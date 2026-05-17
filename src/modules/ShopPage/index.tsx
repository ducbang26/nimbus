import React from 'react';

import ShopPageCollection from '@Modules/ShopPage/Collection';
import ShopPageHero from '@Modules/ShopPage/Hero';
import ShopPageModelGrid from '@Modules/ShopPage/ModelGrid';

import { sanityFetch } from '../../sanity/live';
import { PRODUCTS_QUERY } from '../../sanity/queries';

import s from './styles.module.scss';
import { ProductItemData } from '@Types/product';

const ShopPage = async (): Promise<React.ReactElement> => {
  const { data } = await sanityFetch({ query: PRODUCTS_QUERY });
  const sanityProducts = (data ?? []) as ProductItemData[];
  const products = sanityProducts.map((item) => item);

  return (
    <main className={s.shop}>
      <ShopPageHero />
      <ShopPageModelGrid products={products} />
      <ShopPageCollection />
    </main>
  );
};

export default ShopPage;
