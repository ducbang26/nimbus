'use client';
import { LenisRef, ReactLenis } from 'lenis/react';
import { gsap } from 'gsap';
import React, { PropsWithChildren, useEffect, useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ISmoothScroller extends PropsWithChildren {}

export default function LenisScroller({ children }: ISmoothScroller): React.ReactElement {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    lenisRef.current?.lenis?.stop();
  }, []);

  useEffect(() => {
    function update(time: number): void {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{ autoRaf: false }}
    >
      {children}
    </ReactLenis>
  );
}