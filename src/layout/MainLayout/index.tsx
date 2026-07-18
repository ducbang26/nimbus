'use client';
import React, { PropsWithChildren, useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import Cursor from '@Components/Cursor';
import { PageEffectProvider } from '@Contexts/pageEffectContext';
import Footer from '@Layouts/Footer';
import Header from '@Layouts/Header';
import LenisScroller from '@Layouts/Lenis';
import PreLoader from '@Layouts/PreLoader';
import { hydrateCart } from '@Store/slices/cartSlice';
import { store } from '@Store/store';
import { usePathname } from 'next/navigation';

const MainLayoutContent: React.FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    try {
      const storedCart = window.localStorage.getItem('cart');

      if (storedCart) {
        const parsedCart = JSON.parse(storedCart);
        dispatch(hydrateCart(parsedCart));
      }
    } catch {
      // Ignore malformed cart data.
    }
  }, [dispatch]);

  return (
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
  );
};

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={store}>
      <MainLayoutContent>{children}</MainLayoutContent>
    </Provider>
  );
};

export default MainLayout;
