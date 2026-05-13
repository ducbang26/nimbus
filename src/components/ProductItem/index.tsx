import React from 'react';
import { useDispatch } from 'react-redux';

import UITypography from '@Components/Typography';
import { ETypography, ETypographyColor } from '@Components/Typography/constants';
import { addToCart } from '@Store/slices/cartSlice';
import { clsx } from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import s from './styles.module.scss';

interface IProductItemProps {
  image: string;
  title: string;
  description: string;
  price: string;
  index: number;
}

const ProductItem = ({
  image,
  title,
  description,
  price,
  index,
}: IProductItemProps): React.ReactElement => {
  const dispatch = useDispatch();

  // const addToCartHandler = () => {
  //   dispatch(addToCart({ ...data, qty }));
  // };

  return (
    <Link href={`/product/${index}`} className={clsx('col-span-3 js-product-item', s.productItem)}>
      {/* <div className={clsx('col-span-3 js-product-item', s.productItem)}> */}
      <div className={s.productItem_image}>
        <Image src={image} alt={title} width={500} height={500} />
      </div>
      <div className={s.productItem_content}>
        <UITypography typography={ETypography.TEXT_24_REGULAR}>{title}</UITypography>
        <UITypography typography={ETypography.TEXT_16_LIGHT}>{description}</UITypography>
      </div>
      {/* </div> */}
      <UITypography typography={ETypography.TEXT_20_REGULAR} color={ETypographyColor.NEUTRAL_300}>
        ${price}
      </UITypography>
    </Link>
  );
};

export default ProductItem;
