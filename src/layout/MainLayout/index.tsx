'use client';
import Footer from '@Layouts/Footer';
import Header from '@Layouts/Header';
import LenisScroller from '@Layouts/Lenis';
import React, { PropsWithChildren } from 'react';

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <LenisScroller>
      <Header />
      {children}
      <Footer />
      {/* <DebugGrid /> */}
    </LenisScroller>
  );
};

export default MainLayout;
