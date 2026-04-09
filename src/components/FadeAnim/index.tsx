'use client';

import React, { forwardRef, PropsWithChildren, ReactElement, useLayoutEffect, useRef } from 'react';
import useFade from './useFade';
import { IAnimationElement } from '@Types/common';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';

type FadeDirection = 'top' | 'bottom' | 'left' | 'right' | 'none';

interface IFade extends PropsWithChildren {
  children: ReactElement<{ ref?: React.Ref<HTMLElement> }>;
  direction?: FadeDirection;
  delayTrigger?: number;
  delayEnter?: number;
  duration?: number;
  from?: string;
}

gsap.registerPlugin(ScrollTrigger);

/**
 * Fade
 * ---
 * Expects exactly ONE child that accepts a DOM ref.
 */
const Fade = forwardRef<HTMLElement, IFade>(function Fade(
  { children, direction = 'none', delayTrigger, delayEnter, duration, from }: IFade,
  ref
): ReactElement {
  // Internal fallback ref
  const refContent = useRef<IAnimationElement>(null);

  // Resolve ref (forwarded OR internal)
  const resolvedRef = (ref as React.RefObject<IAnimationElement>) || refContent;

  // Run fade animation hook
  const { animationIn, animationHide } = useFade({
    refContent: resolvedRef,
    direction,
    delayTrigger,
    delayEnter,
    duration,
    from,
  });

  useLayoutEffect(() => {
    animationHide();
  }, [animationHide]);

  useGSAP(
    () => {
      const el = resolvedRef.current;
      if (!el) return;

      const trigger = ScrollTrigger.create({
        trigger: el,
        start: '+=20% bottom',
        once: true,
        onEnter: () => animationIn(delayTrigger),
      });

      return () => trigger.kill();
    },
    { dependencies: [resolvedRef.current], scope: resolvedRef }
  );

  /* ---------------- Render ---------------- */
  return React.cloneElement(children, {
    ref: resolvedRef,
  });
});

export default Fade;
