'use client';
import React, { PropsWithChildren, useEffect, useLayoutEffect } from 'react';

import Cursor from '@Components/Cursor';
import Footer from '@Layouts/Footer';
import Header from '@Layouts/Header';
import LenisScroller from '@Layouts/Lenis';

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LenisScroller>
      <Cursor isEnter={true} />

      <Header />
      {children}
      <Footer />
      {/* <DebugGrid /> */}
    </LenisScroller>
  );
};

export default MainLayout;
