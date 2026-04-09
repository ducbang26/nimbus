'use client';
import React, { PropsWithChildren, useEffect, useLayoutEffect } from 'react';
import Cursor from '@Components/Cursor';
import Footer from '@Layouts/Footer';
import Header from '@Layouts/Header';
import ReactLenis from 'lenis/react';

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ReactLenis root options={{ smoothWheel: true }}>
      <Cursor isEnter={true} />
      <Header />
      {children}
      <Footer />
      {/* <DebugGrid /> */}
    </ReactLenis>
  );
};

export default MainLayout;
