'use client';

import { clsx } from 'clsx';
import s from './styles.module.scss';
import UIButton from '@Components/Button';
import { useState } from 'react';
import { EModelFilter, MOCK_ITEMS, MODEL_FILTERS } from '@Modules/ShopPage/constants';
import UITypography from '@Components/Typography';
import { ETypography, ETypographyColor } from '@Components/Typography/constants';
import ProductItem from '@Modules/ShopPage/ModelGrid/Item';

const ShopPageModelGrid = () => {
  const [activeFilter, setActiveFilter] = useState(EModelFilter.ALL);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, _setTotalPages] = useState(4);

  const handleFilterClick = (filter: EModelFilter) => {
    setActiveFilter(filter);
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={clsx('container', s.modelGrid)}>
      <div className={s.modelGrid_filters}>
        {MODEL_FILTERS.map((filter) => (
          <div className={s.modelGrid_filter} key={filter.value}>
            <UIButton
              variant={'text'}
              color={'primary'}
              onClick={() => handleFilterClick(filter.value)}
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
            Our most popular drones, loved by customers worldwide.
          </UITypography>
        </div>
        <div className={clsx('grid', s.modelGrid_models_list)}>
          <div className={clsx('col-span-6', s.modelGrid_models_list_wrapper)}>
            <UITypography typography={ETypography.TEXT_36_LIGHT}>
              Best-selling and most advanced drones available now!
            </UITypography>
          </div>
          {MOCK_ITEMS.map((item) => (
            <ProductItem key={item.title} {...item} />
          ))}
        </div>
      </div>

      <div className={s.modelGrid_pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          <div className={s.modelGrid_pagination_item} key={index}>
            <UIButton variant={'text'} onClick={() => handlePageClick(index + 1)}>
              <UITypography
                typography={ETypography.TEXT_24_REGULAR}
                color={
                  currentPage === index + 1
                    ? ETypographyColor.NEUTRAL_950
                    : ETypographyColor.NEUTRAL_300
                }
              >
                {index + 1}
              </UITypography>
            </UIButton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPageModelGrid;
