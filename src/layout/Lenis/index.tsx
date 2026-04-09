'use client';
import React, {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
} from 'react';

import { gsap } from 'gsap';
import { LenisRef, ReactLenis } from 'lenis/react';

interface LenisContextValue {
  start: () => void;
  stop: () => void;
}

const LenisContext = createContext<LenisContextValue>({ start: () => {}, stop: () => {} });

export const useLenisControl = (): LenisContextValue => useContext(LenisContext);

export default function LenisScroller({ children }: PropsWithChildren): React.ReactElement {
  const lenisRef = useRef<LenisRef>(null);

  useLayoutEffect(() => {
    lenisRef.current?.lenis?.stop();
  }, []);

  useLayoutEffect(() => {
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

  const stop = useCallback(() => {
    lenisRef.current?.lenis?.stop();
  }, []);

  return (
    <LenisContext.Provider value={{ start, stop }}>
      <ReactLenis root ref={lenisRef} options={{ autoRaf: false }}>
        {children}
      </ReactLenis>
    </LenisContext.Provider>
  );
}
