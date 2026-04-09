'use client';

// import { TIME_DELAY_ROUTING } from '@Constants/animation';
// import PageEffect from '@Layouts/PageEffect';
import React, {
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { usePathname, useRouter } from 'next/navigation';

type IpageStaus = 'EXIT' | 'INIT' | 'ENTER';
type IPageTransition = 'OUT' | 'IN' | null;
type IAnimationStatus = 'INIT' | 'PLAY';

interface IPageEffectContext {
  pageName: string;
  pageStatus: IpageStaus;

  pageInit: () => void;
  pageExit: () => void;
  pageEnter: () => void;
  pageAfter: () => void;

  setPageName: (n: string) => void;
  setPageUrl: (url: string) => void;
  setPageStatus: (st: IpageStaus) => void;

  isReadyInteractive: boolean;
  animationStatus: IAnimationStatus;
  pageTransition: IPageTransition;

  pageTransitionIn: () => void;
  pageTransitionOut: () => void;

  isWinLoad: boolean;
}

export const PageEffectContext = createContext<IPageEffectContext>({
  pageName: 'Hi',
  pageStatus: 'INIT',

  pageInit: () => null,
  pageExit: () => null,
  pageEnter: () => null,
  pageAfter: () => null,

  pageTransitionIn: () => null,
  pageTransitionOut: () => null,

  setPageName: (_) => null,
  setPageUrl: (_) => null,
  setPageStatus: (_) => null,

  isReadyInteractive: false,
  animationStatus: 'INIT',
  pageTransition: null,

  isWinLoad: true,
});

export const PageEffectProvider: FC<PropsWithChildren> = ({ children }) => {
  const pathName = usePathname();
  const refFirstLoad = useRef(0);

  const [pageName, setPageName] = useState<string>('Hi');
  const [pageStatus, setPageStatus] = useState<IpageStaus>('INIT');

  const [isReadyInteractive, setIReadyInteractive] = useState(false);
  const [pageTransition, setPageTransition] = useState<IPageTransition>(null);
  const [animationStatus, setAnimationStatus] = useState<IAnimationStatus>('INIT');

  const [isWinLoad, setIsWinLoad] = useState(true);

  const refPageUrl = useRef<string | null>(null);

  const router = useRouter();

  const pageExit = useCallback((): void => {
    setPageStatus('EXIT');
    setIReadyInteractive(false);
  }, []);

  const pageTransitionOut = useCallback(() => {
    setPageTransition('OUT');
  }, []);

  const setPageUrl = useCallback((url: string | null) => {
    refPageUrl.current = url;
  }, []);

  const pageInit = useCallback((): void => {
    if (!refPageUrl.current) return;
    router.push(refPageUrl.current);
  }, [router]);

  const pageEnter = useCallback((): void => {
    setPageStatus('ENTER');
    setAnimationStatus('PLAY');
  }, []);

  const pageAfter = useCallback(() => {
    setPageName('');
    setIReadyInteractive(true);
    refFirstLoad.current++;
    setIsWinLoad(false);
  }, []);

  const pageTransitionIn = useCallback(() => {
    setPageTransition('IN');
  }, []);

  useEffect(() => {
    if (!refFirstLoad.current) return;

    const timer = setTimeout(() => {
      setPageUrl(null);
      setPageStatus('INIT');
      setAnimationStatus('INIT');
      pageTransitionOut();
    }, 0);

    return (): void => clearTimeout(timer);
  }, [pathName, pageTransitionOut, setPageUrl]);

  const contextValues = useMemo(() => {
    return {
      setPageName,
      pageName,
      pageStatus,
      pageInit,
      pageExit,
      pageEnter,
      pageAfter,
      setPageUrl,
      setPageStatus,
      isReadyInteractive,
      animationStatus,
      pageTransition,
      pageTransitionIn,
      pageTransitionOut,

      isWinLoad,
    };
  }, [
    setPageName,
    pageName,
    pageStatus,
    pageInit,
    pageExit,
    pageEnter,
    pageAfter,
    setPageUrl,
    setPageStatus,
    isReadyInteractive,
    animationStatus,
    pageTransition,
    pageTransitionIn,
    pageTransitionOut,

    isWinLoad,
  ]);

  return (
    <PageEffectContext.Provider value={contextValues}>
      {children}
      {/* <PageEffect /> */}
    </PageEffectContext.Provider>
  );
};

export default function usePageEffectContext(): IPageEffectContext {
  return useContext(PageEffectContext);
}

export const usePageEnter = (): boolean => {
  const { pageStatus } = usePageEffectContext();

  return useMemo((): boolean => {
    return pageStatus === 'ENTER';
  }, [pageStatus]);
};

export const usePageExit = (): boolean => {
  const { pageStatus } = usePageEffectContext();

  return useMemo((): boolean => {
    return pageStatus === 'EXIT';
  }, [pageStatus]);
};
