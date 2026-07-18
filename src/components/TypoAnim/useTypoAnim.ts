/* eslint-disable react-hooks/preserve-manual-memoization */
import { useCallback, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

import { IAnimationElement } from '@Types/common';
import useSplitType from '@Hooks/useSplitType';
import { getDelay } from '@Utils/UiHelper';

import s from './styles.module.scss';

interface UseTypoAnimProps {
  refContent: React.RefObject<IAnimationElement | null>;
  delayTrigger?: number;
  delayEnter?: number;
  duration?: number;
}

interface UseTypoAnimResult {
  animationHide: () => void;
  animationIn: (delayOverride?: number, staggerOverride?: number) => void;
  animationOut: () => void;
}

export default function useTypoAnim({
  refContent,
  delayTrigger,
  delayEnter,
  duration = 1.2,
}: UseTypoAnimProps): UseTypoAnimResult {
  const { splitter } = useSplitType({
    refTarget: refContent,
    types: 'lines,words',
  });

  /* ---------------- Attach mask class ---------------- */
  useLayoutEffect(() => {
    const el = refContent.current;
    if (!el) return;

    el.classList.add(s.LineMask);
    return (): void => {
      el.classList.remove(s.LineMask);
    };
  }, [refContent]);

  /* ---------------- Hide animation ---------------- */
  const animationHide = useCallback(() => {
    if (!splitter?.words?.length) return;

    gsap.set(splitter.words, {
      y: '40%',
      opacity: 0,
      filter: 'blur(20px)',
      color: '#ff7349',
      transition: 'transform 1s cubic-bezier(0.165, 0.84, 0.44, 1), filter 1s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 1s cubic-bezier(0.165, 0.84, 0.44, 1), color 0.85s cubic-bezier(0.59, 0.01, 0.99, 0.53)',
      overwrite: 'auto',
    });
  }, [splitter]);

  /* ---------------- Enter animation ---------------- */
  const animationIn = useCallback(
    (delayOverride?: number, staggerOverride?: number) => {
      const el = refContent.current;
      if (!splitter?.lines?.length) return;

      const baseDelay = getDelay({
        refContentCurrent: el,
        delayEnter,
        delayTrigger,
      });

      splitter.lines.forEach((line: HTMLElement, index: number) => {
        const words = line.querySelectorAll('.word') as NodeListOf<HTMLElement>;
        if (!words.length) return;

        gsap.to(words, {
          y: '0%',
          opacity: 1,
          filter: 'blur(0px)',
          color: 'inherit',
          delay: (delayOverride ?? baseDelay) + index * 0.1,
          duration,
          ease: 'power3.out',
          stagger: staggerOverride ?? 0.015,
          overwrite: 'auto',
          // onComplete: () => {
          //   splitter.revert();
          // },
        });
      });
    },
    [splitter, refContent, delayEnter, delayTrigger, duration]
  );

  /* ---------------- Exit / scroll-out animation ---------------- */
  const animationOut = useCallback(() => {
    const el = refContent.current;
    if (!splitter?.lines?.length || !el) return;

    gsap.to(splitter.lines, {
      y: '0%',
      duration,
      ease: 'power3.out',
      stagger: 0.15,
      scrollTrigger: el as Element,
      overwrite: 'auto',
    });
  }, [splitter, refContent, duration]);

  return {
    animationHide,
    animationIn,
    animationOut,
  };
}
