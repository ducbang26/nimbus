'use client';
import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import Cursor from '@Components/Cursor';
import { PageEffectProvider } from '@Contexts/pageEffectContext';
import Footer from '@Layouts/Footer';
import Header from '@Layouts/Header';
import LenisScroller from '@Layouts/Lenis';
import PreLoader from '@Layouts/PreLoader';
import { store } from '@Store/store';
import { usePathname } from 'next/navigation';

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();

  return (
    <Provider store={store}>
      <PageEffectProvider>
        <LenisScroller>
          <PreLoader key={pathname} modelPath="/models/dji-fpv/drone.gltf" />
          <Cursor isEnter={true} />

          <Header />
          {children}
          <Footer />
          {/* <DebugGrid /> */}
          <ToastContainer />
        </LenisScroller>
      </PageEffectProvider>
    </Provider>
  );
};

export default MainLayout;
