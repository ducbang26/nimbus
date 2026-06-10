import React from 'react';

import UITypography from '@Components/Typography';
import { EFontLetterSpacing, ETypography } from '@Components/Typography/constants';
import ProductComparison from '@Modules/ProductDetailPage/ProductComparison';
import ProductImages from '@Modules/ProductDetailPage/ProductImages';
import ProductInfo from '@Modules/ProductDetailPage/ProductInfo';
import ProductReviews from '@Modules/ProductDetailPage/ProductReviews';
import { ProductItemData } from '@Types/product';
import { clsx } from 'clsx';
import { defineQuery } from 'next-sanity';
import { notFound } from 'next/navigation';

import { sanityFetch } from '../../sanity/live';
import s from './styles.module.scss';

const EVENT_QUERY = defineQuery(`*[
  _type=="product"
 && inStock == true &&
 slug.current == $slug
] 
[0]
{
  _id,
  name,
  price,
  category->{name},
  description[0]{children[0]{text}},
  shortDesc,
  "images": images[]{
    "url": asset->url
  },
  slug{current}
}`);

const ProductDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<React.ReactElement> => {
  const { data } = await sanityFetch({
    query: EVENT_QUERY,
    params: params,
  });
  const product = (data ?? {}) as ProductItemData;
  if (!product) {
    notFound();
  }
  const { name, shortDesc, images } = product;

  return (
    <main className={clsx('container', s.productDetail)}>
      <div className="mb_20">
        <UITypography
          typography={ETypography.TEXT_100_LIGHT}
          letterSpacing={EFontLetterSpacing.M}
          className="mb_20"
        >
          {name}
        </UITypography>
        <UITypography typography={ETypography.TEXT_20_LIGHT}>{shortDesc}</UITypography>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-7">
          <ProductImages images={images} />
          <ProductComparison />
          <ProductReviews />
        </div>
        <div className="col-span-5">
          <ProductInfo product={product} />
        </div>
      </div>
      {/* <ProductDroneModel /> */}
    </main>
  );
};

export default ProductDetailPage;
