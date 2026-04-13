'use client';
import React, {
  PropsWithChildren,
  useLayoutEffect,
  useRef,
} from 'react';

import { gsap } from 'gsap';
import { LenisRef, ReactLenis } from 'lenis/react';

export default function LenisScroller({ children }: PropsWithChildren): React.ReactElement {
  const lenisRef = useRef<LenisRef>(null);

  useLayoutEffect(() => {
    function update(time: number): void {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return (): void => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis root ref={lenisRef} options={{ autoRaf: false }}>
      {children}
    </ReactLenis>
  );
}
