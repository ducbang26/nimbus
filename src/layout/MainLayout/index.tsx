'use client';
import React, { PropsWithChildren } from 'react';

import Cursor from '@Components/Cursor';
import { PageEffectProvider } from '@Contexts/pageEffectContext';
import Footer from '@Layouts/Footer';
import Header from '@Layouts/Header';
import LenisScroller from '@Layouts/Lenis';
import PreLoader from '@Layouts/PreLoader';
import { usePathname } from 'next/navigation';

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();

  return (
    <PageEffectProvider>
      <LenisScroller>
        <PreLoader key={pathname} modelPath="/models/dji-fpv/drone.gltf" />
        <Cursor isEnter={true} />

        <Header />
        {children}
        <Footer />
        {/* <DebugGrid /> */}
      </LenisScroller>
    </PageEffectProvider>
  );
};

export default MainLayout;
