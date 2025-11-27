'use client';
import Container from '@Components/Container';
import Header from '@Layouts/Header';
import LenisScroller from '@Layouts/Lenis';
import React, { PropsWithChildren } from 'react';

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <LenisScroller>
      <Container>
        <Header />
        {children}
      </Container>
      {/* {isDesktop ? <Footer /> : ''} */}
      {/* <DebugGrid /> */}
    </LenisScroller>
  );
};

export default MainLayout;
