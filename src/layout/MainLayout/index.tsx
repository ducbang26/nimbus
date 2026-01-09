'use client';
import React, { PropsWithChildren } from 'react';
import Footer from '@Layouts/Footer';
import Header from '@Layouts/Header';
import LenisScroller from '@Layouts/Lenis';

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
