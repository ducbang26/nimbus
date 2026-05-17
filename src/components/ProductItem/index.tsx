import React from 'react';

// import { useDispatch } from 'react-redux';

import UITypography from '@Components/Typography';
import { ETypography, ETypographyColor } from '@Components/Typography/constants';
import { ProductItemData } from '@Types/product';
// import { addToCart } from '@Store/slices/cartSlice';
import { clsx } from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import s from './styles.module.scss';

const ProductItem = ({
  _id,
  name,
  price,
  shortDesc,
  images,
  slug,
}: ProductItemData): React.ReactElement => {
  const imageUrl = (images as any)?.[0]?.asset?.url ?? '/images/drone1.png';

  return (
    <Link href={`/product/${slug.current}`} className={clsx('col-span-3 js-product-item', s.productItem)}>
      <div className={clsx('col-span-3 js-product-item', s.productItem)}>
        <div className={s.productItem_image}>
          <Image src={imageUrl} alt={name} width={500} height={500} />
        </div>
        <div className={s.productItem_content}>
          <UITypography typography={ETypography.TEXT_24_REGULAR}>{name}</UITypography>
          <UITypography typography={ETypography.TEXT_16_LIGHT}>{shortDesc}</UITypography>
        </div>
        <UITypography typography={ETypography.TEXT_20_REGULAR} color={ETypographyColor.NEUTRAL_300}>
          ${price}
        </UITypography>
      </div>
    </Link>
  );
};

export default ProductItem;
