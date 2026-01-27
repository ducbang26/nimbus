'use client';
import React, { PropsWithChildren } from 'react';
import Footer from '@Layouts/Footer';
import Header from '@Layouts/Header';
import LenisScroller from '@Layouts/Lenis';
import Cursor from '@Components/Cursor';

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
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
