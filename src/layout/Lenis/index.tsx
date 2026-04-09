'use client';
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useLayoutEffect,
  useRef,
  useCallback,
  useEffect,
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
