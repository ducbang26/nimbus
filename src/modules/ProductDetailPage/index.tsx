'use client';
import React from 'react';

import UITypography from '@Components/Typography';
import { EFontLetterSpacing, ETypography } from '@Components/Typography/constants';
import ProductComparison from '@Modules/ProductDetailPage/ProductComparison';
import ProductDroneModel from '@Modules/ProductDetailPage/ProductDroneModel';
import ProductImages from '@Modules/ProductDetailPage/ProductImages';
import ProductInfo from '@Modules/ProductDetailPage/ProductInfo';
import ProductReviews from '@Modules/ProductDetailPage/ProductReviews';
import { clsx } from 'clsx';

import s from './styles.module.scss';

const ProductDetailPage = ({ id }: { id: string }): React.ReactElement => {
  return (
    <main className={clsx('container', s.productDetail)}>
      <div className="mb_20">
        <UITypography
          typography={ETypography.TEXT_100_LIGHT}
          letterSpacing={EFontLetterSpacing.M}
          className="mb_20"
        >
          AeroVision Pro {id}
        </UITypography>
        <UITypography typography={ETypography.TEXT_20_LIGHT}>
          The Ultimate Drone for Filmmakers & Professionals
        </UITypography>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-7">
          <ProductImages />
          <ProductComparison />
          <ProductReviews />
        </div>
        <div className="col-span-5">
          <ProductInfo />
        </div>
      </div>
      <ProductDroneModel />
    </main>
  );
};

export default ProductDetailPage;
