'use client';
import React, { PropsWithChildren, useEffect } from 'react';

import Cursor from '@Components/Cursor';
import Footer from '@Layouts/Footer';
import Header from '@Layouts/Header';
import LenisScroller from '@Layouts/Lenis';
import PreLoader from '@Layouts/PreLoader';
import { usePathname } from 'next/navigation';

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <LenisScroller>
      <PreLoader key={pathname} modelPath="/models/dji-fpv/drone.gltf" />
      <Cursor isEnter={true} />

      <Header />
      {children}
      <Footer />
      {/* <DebugGrid /> */}
    </LenisScroller>
  );
};

export default MainLayout;
