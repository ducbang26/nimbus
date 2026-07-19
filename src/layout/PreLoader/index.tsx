'use client';

import { useEffect, useRef } from 'react';

import usePageEffectContext from '@Contexts/pageEffectContext';
import { useGLTF } from '@react-three/drei';
import { clsx } from 'clsx';
import { gsap } from 'gsap';
import { useLenis } from 'lenis/react';
import { usePathname } from 'next/navigation';

import s from './styles.module.scss';

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
  const pathname = usePathname();

  const { pageAfter } = usePageEffectContext();

  const dataProxy = useRef({
    percent: 1,
    isAssetLoaded: false,
    hasTimedOut: false,
    looper: { offset: 1, deal: 1.15 },
  });

  const refQuickProcessing = useRef<gsap.QuickToFunc | null>(null);

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
    lenis?.stop();

    let isCancelled = false;

    const finishLoader = (): void => {
      if (isCancelled) {
        return;
      }

      dataProxy.current.isAssetLoaded = true;
      refQuickProcessing.current?.(100);

      hideLoaderTimeoutRef.current = setTimeout(() => {
        if (isCancelled || !wrapperRef.current) {
          return;
        }

        gsap.set(wrapperRef.current, { clipPath: 'inset(0% 0% 0% 0%)' });
        gsap.to(wrapperRef.current, {
          clipPath: 'inset(0% 0% 100% 0%)',
          duration: 1.5,
          ease: 'power3.inOut',
          onComplete: () => {
            if (!isCancelled) {
              gsap.to(progressWrapperRef.current, {
                opacity: 0,
                duration: 0.8,
                ease: 'power3',
                onComplete: () => {
                  if (!isCancelled) {
                    wrapperRef.current?.classList.add(s.isHide);
                    progressWrapperRef.current?.classList.add(s.isHide);
                    onComplete?.();
                    if (pathname != '/') {
                      lenis?.start();
                    }
                  }
                },
              });
            }
          },
        });
        pageAfter();
      }, 300);
    };

    try {
      useGLTF.preload(modelPath);
    } catch {
      // Ignore preload errors and fall back to timeout-based completion.
    }

    const timeoutId = window.setTimeout(() => {
      if (!isCancelled) {
        dataProxy.current.hasTimedOut = true;
        finishLoader();
      }
    }, 5000);

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

      if (dataProxy.current.isAssetLoaded || dataProxy.current.hasTimedOut) {
        gsap.ticker.remove(looper);
        finishLoader();
        return;
      }

      if (d.offset > 94) {
        d.offset = 94;
        d.deal = 0.02;
      } else {
        d.deal *= 0.94;
        if (d.deal < 0.08) d.deal = 0.2;
      }
    };

    gsap.ticker.add(looper);

    return (): void => {
      isCancelled = true;
      gsap.ticker.remove(looper);
      window.clearTimeout(timeoutId);
      if (hideLoaderTimeoutRef.current) clearTimeout(hideLoaderTimeoutRef.current);
    };
  }, [lenis, modelPath, onComplete]);

  // useEffect(() => {
  //   lenis?.scrollTo(0, { immediate: true });
  //   lenis?.stop();

  //   dataProxy.current.percent = 0;

  //   refQuickProcessing.current = gsap.quickTo(dataProxy.current, 'percent', {
  //     ease: 'none',
  //     duration: 0.1,
  //     onUpdate: () => {
  //       const ps = Math.max(0, Math.min(100, Math.floor(dataProxy.current.percent)));

  //       if (percentRef.current) {
  //         percentRef.current.textContent = `${ps < 10 ? '0' : ''}${ps}`;
  //       }

  //       if (processBarRef.current) {
  //         processBarRef.current.style.setProperty(
  //           '--progress-width',
  //           `${ps}%`
  //         );
  //       }
  //     },
  //   });

  //   const loadingTween = gsap.to(dataProxy.current, {
  //     percent: 100,
  //     duration: 3,
  //     ease: 'none',
  //     onUpdate: () => {
  //       refQuickProcessing.current?.(dataProxy.current.percent);
  //     },
  //     onComplete: () => {
  //       pageAfter();

  //       hideLoaderTimeoutRef.current = setTimeout(() => {
  //         if (wrapperRef.current) {
  //           gsap.set(wrapperRef.current, {
  //             clipPath: 'inset(0% 0% 0% 0%)',
  //           });

  //           gsap.to(wrapperRef.current, {
  //             clipPath: 'inset(0% 0% 100% 0%)',
  //             duration: 1.5,
  //             ease: 'power3.inOut',
  //             onComplete: () => {
  //               gsap.to(progressWrapperRef.current, {
  //                 opacity: 0,
  //                 duration: 0.8,
  //                 ease: 'power3',
  //                 onComplete: () => {
  //                   wrapperRef.current?.classList.add(s.isHide);
  //                   progressWrapperRef.current?.classList.add(s.isHide);
  //                   onComplete?.();
  //                   lenis?.start();
  //                 },
  //               });
  //             },
  //           });
  //         }
  //       }, 300);
  //     },
  //   });

  //   return () => {
  //     loadingTween.kill();

  //     if (hideLoaderTimeoutRef.current) {
  //       clearTimeout(hideLoaderTimeoutRef.current);
  //     }
  //   };
  // }, [lenis, onComplete, pathname]);

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
