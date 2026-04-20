/* eslint-disable react-hooks/refs */
'use client';

import React, { ReactElement, useLayoutEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';

import useTypoAnim from './useTypoAnim';
import usePageEffectContext from '@Contexts/pageEffectContext';

interface TypoAnimProps {
  children: ReactElement<{ ref?: React.Ref<HTMLElement> }>;
  delayEnter?: number;
  delayTrigger?: number;
  stagger?: number;
  duration?: number;
}

gsap.registerPlugin(ScrollTrigger);

export default function TypoAnim({
  children,
  delayEnter,
  delayTrigger,
  stagger,
  duration,
}: TypoAnimProps): ReactElement {
  const contentRef = useRef<HTMLParagraphElement>(null);
  
  const { isReadyInteractive } = usePageEffectContext();
  
  const { animationIn, animationHide } = useTypoAnim({
    refContent: contentRef,
    delayEnter,
    delayTrigger,
    duration,
  });

  useLayoutEffect(() => {
    animationHide();
  }, [animationHide]);

  useGSAP(
    () => {
      const el = contentRef.current;
      if (!el || !isReadyInteractive) return;

      const trigger = ScrollTrigger.create({
        trigger: el,
        start: '+=20% bottom',
        once: true,
        onEnter: () => animationIn(delayTrigger, stagger),
      });

      return (): void => trigger.kill();
    },
    { dependencies: [contentRef.current, isReadyInteractive], scope: contentRef }
  );

  return React.cloneElement(children, {
    ref: contentRef,
  });
}
