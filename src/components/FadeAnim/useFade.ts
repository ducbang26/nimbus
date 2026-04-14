/* eslint-disable react-hooks/preserve-manual-memoization */
import { gsap } from 'gsap';
import { getDelay } from '@Utils/UiHelper';
import { IAnimationElement } from '@Types/common';
import { useCallback } from 'react';

type FadeDirection = 'top' | 'bottom' | 'left' | 'right' | 'none';

interface UseFadeProps {
  refContent: React.RefObject<IAnimationElement | null>;
  direction?: FadeDirection;
  duration?: number;
  delayTrigger?: number;
  delayEnter?: number;
  from?: string;
}

interface UseFadeAnimResult {
  animationHide: () => void;
  animationIn: (delayOverride?: number) => void;
}

export default function useFade({
  refContent,
  direction = 'none',
  duration = 0.8,
  delayTrigger,
  delayEnter,
  from = '100%',
}: UseFadeProps): UseFadeAnimResult {
  /* ---------------- Hide animation ---------------- */
  const animationHide = useCallback(() => {
    const el = refContent.current;
    if (!el) return;

    const base: gsap.TweenVars = { opacity: 0 };

    const transform: Partial<gsap.TweenVars> =
      direction === 'left'
        ? { x: `-${from}` }
        : direction === 'right'
          ? { x: from }
          : direction === 'top'
            ? { y: `-${from}` }
            : direction === 'bottom'
              ? { y: from }
              : {};

    gsap.set(el, { ...base, ...transform });
  }, [refContent.current]);

  /* ---------------- Animate in ---------------- */
  const animationIn = useCallback(
    (delayOverride?: number) => {
      const el = refContent.current;
      if (!el) return;

      const delay = getDelay({
        refContentCurrent: el,
        delayEnter,
        delayTrigger,
      });

      const transform: Partial<gsap.TweenVars> =
        direction === 'left' || direction === 'right'
          ? { x: 0 }
          : direction === 'top' || direction === 'bottom'
            ? { y: 0 }
            : {};

      gsap.to(el, {
        opacity: 1,
        duration,
        ease: 'power3.out',
        delay: delayOverride ?? delay,
        overwrite: 'auto',
        ...transform,
      });
    },
    [refContent, delayEnter, delayTrigger, duration]
  );

  return {
    animationHide,
    animationIn,
  };
}
