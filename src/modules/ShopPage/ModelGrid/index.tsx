'use client';

import React, { useState } from 'react';

import UIButton from '@Components/Button';
import ProductItem from '@Components/ProductItem';
import UITypography from '@Components/Typography';
import {
  ETypography,
  ETypographyColor,
} from '@Components/Typography/constants';
import {
  EModelFilter,
  MODEL_FILTERS,
} from '@Modules/ShopPage/constants';
import type { ProductItemData } from '@Types/product';
import { clsx } from 'clsx';
import {
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';

import s from './styles.module.scss';

interface ShopPageModelGridProps {
  products: ProductItemData[];
  currentPage: number;
  totalPages: number;
}

const ShopPageModelGrid = ({
  products,
  currentPage,
  totalPages,
}: ShopPageModelGridProps): React.ReactElement => {
  const [activeFilter, setActiveFilter] =
    useState<EModelFilter>(EModelFilter.ALL);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleFilterClick = (filter: EModelFilter): void => {
    setActiveFilter(filter);

    const params = new URLSearchParams(
      searchParams.toString()
    );

    params.set('page', '1');

    router.push(`${pathname}?${params.toString()}`);
  };

  const handlePageClick = (page: number): void => {
    const params = new URLSearchParams(
      searchParams.toString()
    );

    params.set('page', page.toString());

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className={clsx('container', s.modelGrid)}>
      <div className={s.modelGrid_filters}>
        {MODEL_FILTERS.map((filter) => (
          <div
            key={filter.value}
            className={s.modelGrid_filter}
          >
            <UIButton
              variant="text"
              color="primary"
              onClick={() =>
                handleFilterClick(filter.value)
              }
            >
              <UITypography
                typography={ETypography.TEXT_24_REGULAR}
                color={
                  activeFilter === filter.value
                    ? ETypographyColor.NEUTRAL_950
                    : ETypographyColor.NEUTRAL_300
                }
              >
                {filter.label}
              </UITypography>
            </UIButton>
          </div>
        ))}
      </div>

      <div className={s.modelGrid_models}>
        <div>
          <UITypography
            typography={ETypography.TEXT_32_REGULAR}
            className={s.modelGrid_models_title}
          >
            MODELS
          </UITypography>

          <UITypography
            typography={ETypography.TEXT_20_LIGHT}
            className={s.modelGrid_models_description}
          >
            Our most popular drones, loved by customers
            worldwide.
          </UITypography>
        </div>

        <div
          className={clsx(
            'grid grid-cols-12 gap-5',
            s.modelGrid_models_list
          )}
        >
          <div
            className={clsx(
              'col-span-6',
              s.modelGrid_models_list_wrapper
            )}
          >
            <UITypography
              typography={ETypography.TEXT_36_LIGHT}
            >
              Best-selling and most advanced drones
              available now!
            </UITypography>
          </div>

          {products.map((item) => (
            <ProductItem
              key={item.slug.current}
              {...item}
            />
          ))}
        </div>
      </div>

      {totalPages > 1 && (
        <div className={s.modelGrid_pagination}>
          {Array.from(
            { length: totalPages },
            (_, index) => {
              const page = index + 1;

              return (
                <div
                  key={page}
                  className={
                    s.modelGrid_pagination_item
                  }
                >
                  <UIButton
                    variant="text"
                    onClick={() =>
                      handlePageClick(page)
                    }
                  >
                    <UITypography
                      typography={
                        ETypography.TEXT_24_REGULAR
                      }
                      color={
                        currentPage === page
                          ? ETypographyColor.NEUTRAL_950
                          : ETypographyColor.NEUTRAL_300
                      }
                    >
                      {page}
                    </UITypography>
                  </UIButton>
                </div>
              );
            }
          )}
        </div>
      )}
    </div>
  );
};

export default ShopPageModelGrid;