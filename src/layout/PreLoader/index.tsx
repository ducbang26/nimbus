'use client';

import { useEffect, useRef } from 'react';

import { useGLTF } from '@react-three/drei';
import { clsx } from 'clsx';
import { gsap } from 'gsap';
import { peek } from 'suspend-react';
import { GLTFLoader } from 'three-stdlib';

import s from './styles.module.scss';
import { useLenis } from 'lenis/react';

const MODEL_PATH = '/models/dji-fpv/drone.gltf';

interface PreLoaderProps {
  onComplete?: () => void;
  modelPath?: string;
}

const PreLoader: React.FC<PreLoaderProps> = ({ onComplete, modelPath = MODEL_PATH }) => {
  const lenis = useLenis();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const progressWrapperRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);
  const processBarRef = useRef<HTMLDivElement>(null);
  const hideLoaderTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const dataProxy = useRef({
    percent: 1,
    isAssetLoaded: false,
    looper: { offset: 1, deal: 1.15 },
  });

  const refQuickProcessing = useRef<gsap.QuickToFunc | null>(null);

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
    lenis?.stop();

    // Kick off model loading — populates suspend-react cache for useGLTF
    useGLTF.preload(modelPath);

    const isLoaded = (): boolean => {
      return peek([GLTFLoader, modelPath]) != null;
    };

    refQuickProcessing.current = gsap.quickTo(dataProxy.current, 'percent', {
      ease: 'power3.out',
      duration: 0.4,
      onUpdate: () => {
        const ps = Math.max(1, Math.min(100, Math.floor(dataProxy.current.percent)));
        if (percentRef.current) {
          percentRef.current.textContent = `${ps < 10 ? '0' : ''}${ps}`;
        }
        if (processBarRef.current) {
          processBarRef.current.style.setProperty('--progress-width', `${ps}%`);
        }
      },
    });

    const looper = (): void => {
      const d = dataProxy.current.looper;

      refQuickProcessing.current?.(Math.floor(d.offset));
      d.offset += d.deal;

      if (d.offset >= 100 && dataProxy.current.isAssetLoaded) {
        gsap.ticker.remove(looper);
        refQuickProcessing.current?.(100);

        hideLoaderTimeoutRef.current = setTimeout(() => {
          if (wrapperRef.current) {
            gsap.set(wrapperRef.current, { clipPath: 'inset(0% 0% 0% 0%)' });
            gsap.to(wrapperRef.current, {
              clipPath: 'inset(0% 0% 100% 0%)',
              duration: 1.5,
              ease: 'power3.inOut',
              onComplete: () => {
                gsap.to(progressWrapperRef.current, {
                  opacity: 0,
                  duration: 0.8,
                  ease: 'power3',
                  onComplete: () => {
                    wrapperRef.current?.classList.add(s.isHide);
                    progressWrapperRef.current?.classList.add(s.isHide);
                    onComplete?.();
                  },
                });
              },
            });
          }
        }, 300);
      } else {
        if (isLoaded() && !dataProxy.current.isAssetLoaded) {
          dataProxy.current.isAssetLoaded = true;
          d.deal = 6;
        } else {
          if (dataProxy.current.isAssetLoaded) {
            d.deal = Math.max(d.deal, 2.5);
          } else if (d.offset > 94) {
            // Hold at the edge until the 3D model is actually ready.
            d.offset = 94;
            d.deal = 0.02;
          } else {
            d.deal *= 0.94;
            if (d.deal < 0.08) d.deal = 0.2;
          }
        }
      }
    };

    gsap.ticker.add(looper);

    return (): void => {
      gsap.ticker.remove(looper);
      if (hideLoaderTimeoutRef.current) clearTimeout(hideLoaderTimeoutRef.current);
    };
  }, [lenis, modelPath, onComplete]);

  return (
    <>
      <div
        ref={progressWrapperRef}
        className={clsx(s.preLoader_progress_wrapper, 'col-span-4 sm:col-span-8 lg:col-span-12')}
      >
        <div className={clsx(s.preLoader_progress_inner)} ref={processBarRef} />
      </div>

      <div className={s.preLoader} ref={wrapperRef}>
        <div className={s.preLoader_percent}>
          <span ref={percentRef}>01</span>
        </div>
      </div>
    </>
  );
};

export default PreLoader;
