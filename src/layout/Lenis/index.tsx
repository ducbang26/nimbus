'use client';
import React, { PropsWithChildren, useLayoutEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LenisRef, ReactLenis } from 'lenis/react';

gsap.registerPlugin(ScrollTrigger);

export default function LenisScroller({ children }: PropsWithChildren): React.ReactElement {
  const lenisRef = useRef<LenisRef>(null);

  useLayoutEffect(() => {
    function update(time: number): void {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);
    // Prevent GSAP from auto-updating ScrollTrigger — Lenis will drive it
    gsap.ticker.lagSmoothing(0);

    return (): void => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        autoRaf: false,
        syncTouch: true,
      }}
      onScroll={() => ScrollTrigger.update()}
    >
      {children}
    </ReactLenis>
  );
}
