import React from 'react';

import ShopPageCollection from '@Modules/ShopPage/Collection';
import ShopPageHero from '@Modules/ShopPage/Hero';
import ShopPageModelGrid from '@Modules/ShopPage/ModelGrid';

import { sanityFetch } from '../../sanity/live';
import { PRODUCTS_PAGINATION_QUERY } from '../../sanity/queries';

import s from './styles.module.scss';
import { ProductItemData } from '@Types/product';

const PAGE_SIZE = 8;

type ProductsPaginationResponse = {
  products?: ProductItemData[];
  total?: number;
};

interface ShopPageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

const ShopPage = async ({
  searchParams,
}: ShopPageProps): Promise<React.ReactElement> => {
  const params = await searchParams;

  const currentPage = Number(params?.page || 1);

  const start = (currentPage - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const response = await sanityFetch({
    query: PRODUCTS_PAGINATION_QUERY,
    params: {
      start,
      end,
    },
  });

  const data = response.data as ProductsPaginationResponse;
  const products = data?.products ?? [];
  const totalItems = data?.total ?? 0;
  const totalPages = Math.ceil(totalItems / PAGE_SIZE);

  return (
    <main className={s.shop}>
      <ShopPageHero />
      <ShopPageModelGrid
        products={products}
        currentPage={currentPage}
        totalPages={totalPages}
      />
      <ShopPageCollection />
    </main>
  );
};

export default ShopPage;