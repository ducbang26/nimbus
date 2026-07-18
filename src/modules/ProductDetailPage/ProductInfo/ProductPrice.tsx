'use client';
import { ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import UIButton from '@Components/Button';
import UITypography from '@Components/Typography';
import { ETypography, ETypographyColor } from '@Components/Typography/constants';
import FilledCheck from '@Icons/FilledCheck';
import Minus from '@Icons/Minus';
import Plus from '@Icons/Plus';
import { addToCart } from '@Store/slices/cartSlice';
import { ICartItem } from '@Types/global';
import { ProductItemData } from '@Types/product';
import { clsx } from 'clsx';

import s from './styles.module.scss';

interface IProductPriceProps {
  product?: ProductItemData;
}

const ProductPrice = ({ product }: IProductPriceProps): ReactElement => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const increase = (): void => {
    setQuantity((prev) => prev + 1);
  };

  const decrease = (): void => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleAddToCart = (): void => {
    if (!product?._id) {
      toast.warning('Product information is unavailable', {
        position: 'bottom-right',
        hideProgressBar: true,
        pauseOnFocusLoss: false,
        pauseOnHover: false,
      });
      return;
    }

    const normalizedQuantity = Math.max(1, quantity);
    const item: ICartItem = {
      ...(product as unknown as ICartItem),
      quantity: normalizedQuantity,
    };

    dispatch(addToCart(item));
    setQuantity(1);
    toast.success('Add to cart successful', {
      position: 'bottom-right',
      hideProgressBar: true,
      pauseOnFocusLoss: false,
      pauseOnHover: false,
    });
  };

  return (
    <div className="mb_20">
      <UITypography typography={ETypography.TEXT_32_REGULAR} className="mb_24">
        {product?.name}
      </UITypography>
      <UITypography typography={ETypography.TEXT_20_REGULAR} className="mb_16">
        Quantity
      </UITypography>
      <div className={clsx(s.productPrice_container, 'mb_24')}>
        <UIButton variant="icon" onClick={decrease}>
          <Minus />
        </UIButton>
        <input className={s.productPrice_input} value={quantity} />
        <UIButton variant="icon" onClick={increase}>
          <Plus />
        </UIButton>
      </div>
      <div className={clsx(s.productPrice_price, 'mb_20')}>
        <UITypography typography={ETypography.TEXT_32_LIGHT} color={ETypographyColor.WHITE}>
          ${product?.price}
        </UITypography>
        <UIButton onClick={handleAddToCart} variant="text" disabled={!product?._id}>
          <UITypography typography={ETypography.TEXT_20_LIGHT} color={ETypographyColor.WHITE}>
            Add to cart
          </UITypography>
        </UIButton>
      </div>
      <div className={s.productPrice_features}>
        <div className={clsx(s.productPrice_feature)}>
          <div className={s.productPrice_feature_icon}>
            <FilledCheck />
          </div>
          <UITypography typography={ETypography.TEXT_20_REGULAR}>Fast & Free Shipping</UITypography>
        </div>
        <div className={clsx(s.productPrice_feature)}>
          <div className={s.productPrice_feature_icon}>
            <FilledCheck />
          </div>
          <UITypography typography={ETypography.TEXT_20_REGULAR}>30-Day Returns</UITypography>
        </div>
        <div className={clsx(s.productPrice_feature)}>
          <div className={s.productPrice_feature_icon}>
            <FilledCheck />
          </div>
          <UITypography typography={ETypography.TEXT_20_REGULAR}>12-Month Warranty</UITypography>
        </div>
      </div>
    </div>
  );
};

export default ProductPrice;
