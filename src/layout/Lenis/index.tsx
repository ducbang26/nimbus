'use client';
import React, {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from 'react';

import { gsap } from 'gsap';
import { LenisRef, ReactLenis } from 'lenis/react';

interface LenisContextValue {
  start: () => void;
}

const LenisContext = createContext<LenisContextValue>({ start: () => {} });

export const useLenisControl = (): LenisContextValue => useContext(LenisContext);

export default function LenisScroller({ children }: PropsWithChildren): React.ReactElement {
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

    return (): void => {
      gsap.ticker.remove(update);
    };
  }, []);

  const start = useCallback(() => {
    lenisRef.current?.lenis?.start();
  }, []);

  return (
    <LenisContext.Provider value={{ start }}>
      <ReactLenis root ref={lenisRef} options={{ autoRaf: false }}>
        {children}
      </ReactLenis>
    </LenisContext.Provider>
  );
}
