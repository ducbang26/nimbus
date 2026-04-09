'use client';
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useLayoutEffect,
  useRef,
} from 'react';
import { gsap } from 'gsap';
import { LenisRef, ReactLenis } from 'lenis/react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ISmoothScroller extends PropsWithChildren {}

const LenisContext = createContext<React.RefObject<LenisRef | null> | null>(null);

export const useLenisContext = () => {
  const ctx = useContext(LenisContext);
  if (!ctx) {
    throw new Error('useLenisContext must be used within LenisScroller');
  }
  return ctx;
};

export default function LenisScroller({ children }: ISmoothScroller): React.ReactElement {
  const lenisRef = useRef<LenisRef>(null);

  useLayoutEffect(() => {
    lenisRef.current?.lenis?.stop();
  }, []);

  useLayoutEffect(() => {
    function update(time: number): void {
      lenisRef.current?.lenis?.raf(time);
    }

    gsap.ticker.add(update);

    return (): void => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisRef}>
      <ReactLenis root ref={lenisRef} options={{ autoRaf: false }}>
        {children}
      </ReactLenis>
    </LenisContext.Provider>
  );
}
