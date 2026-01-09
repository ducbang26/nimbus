import React from 'react';
import ShopPageCollection from '@Modules/ShopPage/Collection';
import ShopPageHero from '@Modules/ShopPage/Hero';
import ShopPageModelGrid from '@Modules/ShopPage/ModelGrid';

import s from './styles.module.scss';

const ShopPage = () : React.ReactElement => {
  return (
    <main className={s.shop}>
      <ShopPageHero />
      <ShopPageModelGrid />
      <ShopPageCollection />
    </main>
  );
};

export default ShopPage;
