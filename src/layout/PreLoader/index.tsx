'use client';

import { useEffect, useRef } from 'react';

import { useGLTF } from '@react-three/drei';
import { clsx } from 'clsx';
import { gsap } from 'gsap';
import { peek } from 'suspend-react';
import { GLTFLoader } from 'three-stdlib';

import s from './styles.module.scss';

const MODEL_PATH = '/models/dji-fpv/drone.gltf';

interface PreLoaderProps {
  onComplete?: () => void;
}

const PreLoader: React.FC<PreLoaderProps> = ({ onComplete }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const progressWrapperRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);
  const processBarRef = useRef<HTMLDivElement>(null);

  const dataProxy = useRef({
    percent: 0,
    isAssetLoaded: false,
    looper: { offset: 0, deal: 1 },
  });

  const refQuickProcessing = useRef<gsap.QuickToFunc | null>(null);

  useEffect(() => {
    // Kick off model loading — populates suspend-react cache for useGLTF
    useGLTF.preload(MODEL_PATH);

    const isLoaded = (): boolean => {
      return peek([GLTFLoader, MODEL_PATH]) != null;
    };

    refQuickProcessing.current = gsap.quickTo(dataProxy.current, 'percent', {
      ease: 'power3.out',
      duration: 0.4,
      onUpdate: () => {
        const ps = Math.floor(dataProxy.current.percent);
        if (percentRef.current) {
          percentRef.current.textContent = `${ps < 10 ? '0' : ''}${ps}%`;
        }
        if (processBarRef.current) {
          processBarRef.current.style.setProperty('--po', `${ps / 100}`);
        }
      },
    });

    const looper = (): void => {
      const d = dataProxy.current.looper;

      refQuickProcessing.current?.(Math.floor(d.offset));
      d.offset += d.deal;

      if (d.offset >= 100) {
        gsap.ticker.remove(looper);
        refQuickProcessing.current?.(100);
        dataProxy.current.isAssetLoaded = true;

        setTimeout(() => {
          if (wrapperRef.current) {
            gsap.to(wrapperRef.current, {
              y: '-100%',
              duration: 0.8,
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
      } else if (d.offset > 96) {
        d.deal = isLoaded() ? 4 : 0.00001;
      } else {
        if (isLoaded()) {
          d.deal = 10;
        } else {
          d.deal *= 0.9;
          if (d.deal < 0.000001) d.deal = 1;
        }
      }
    };

    gsap.ticker.add(looper);

    return (): void => {
      gsap.ticker.remove(looper);
    };
  }, [onComplete]);

  return (
    <>
      <div
        ref={progressWrapperRef}
        className={clsx(s.preLoader_progress_wrapper, 'col-span-4 sm:col-span-8 lg:col-span-12')}
      >
        <div className={clsx(s.preLoader_progress_inner)} ref={processBarRef} />
      </div>

      <div className={s.preLoader} ref={wrapperRef}>
        {/* <div className={s.preLoader_percent}>
        <span ref={percentRef}>00%</span>
      </div> */}
      </div>
    </>
  );
};

export default PreLoader;
