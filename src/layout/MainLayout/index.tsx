'use client';
import React, { PropsWithChildren } from 'react';

import Cursor from '@Components/Cursor';
import Footer from '@Layouts/Footer';
import Header from '@Layouts/Header';
import LenisScroller, { useLenisControl } from '@Layouts/Lenis';
import PreLoader from '@Layouts/PreLoader';

import s from './styles.module.scss';

const MainLayoutInner: React.FC<PropsWithChildren> = ({ children }) => {
  const { start: startLenis } = useLenisControl();

  return (
    <>
      <PreLoader onComplete={startLenis} />
      <Cursor isEnter={true} />

      <Header />
      <div className={s.main}>{children}</div>
      <Footer />
    </>
  );
};

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <LenisScroller>
      <MainLayoutInner>{children}</MainLayoutInner>
    </LenisScroller>
  );
};

export default MainLayout;
