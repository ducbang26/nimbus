import { ReactElement } from 'react';
import UIButton from '@Components/Button';
import UITypography from '@Components/Typography';
import { ETypography, ETypographyColor } from '@Components/Typography/constants';
import FilledCheck from '@Icons/FilledCheck';
import Minus from '@Icons/Minus';
import Plus from '@Icons/Plus';
import { clsx } from 'clsx';

import s from './styles.module.scss';

const ProductPrice = (): ReactElement => {
  return (
    <div className='mb_20'>
      <UITypography typography={ETypography.TEXT_32_REGULAR} className="mb_24">
        AeroVison Pro
      </UITypography>
      <UITypography typography={ETypography.TEXT_20_REGULAR} className="mb_16">
        Quantity
      </UITypography>
      <div className={clsx(s.productPrice_container, 'mb_24')}>
        <UIButton variant="icon">
          <Minus />
        </UIButton>
        <input className={s.productPrice_input} value={1} />
        <UIButton variant="icon">
          <Plus />
        </UIButton>
      </div>
      <div className={clsx(s.productPrice_price, 'mb_20')}>
        <UITypography typography={ETypography.TEXT_32_LIGHT} color={ETypographyColor.WHITE}>
          $1,100
        </UITypography>
        <UIButton variant="text">
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
