import { ReactElement } from 'react';
import UIButton from '@Components/Button';
import UITypography from '@Components/Typography';
import { ETypography } from '@Components/Typography/constants';
import Review from '@Modules/ProductDetailPage/ProductReviews/Review';
import { clsx } from 'clsx';

import s from './styles.module.scss';

const ProductReviews = (): ReactElement => {
  return (
    <div className={clsx('col-span-7 mb_20', s.productReviews)}>
      <UITypography typography={ETypography.TEXT_24_MEDIUM} className="mb_24">
        Customer Reviews
      </UITypography>
      <UITypography typography={ETypography.TEXT_16_LIGHT} className="mb_24">
        4.9/5 – 2,315 Reviews
      </UITypography>
      <Review />
      <Review />
      <Review />
      <div className={s.productReviews_readAll}>
        <UIButton color="gray">
          <UITypography typography={ETypography.TEXT_16_LIGHT}>Read All Reviews</UITypography>
        </UIButton>
      </div>
    </div>
  );
};

export default ProductReviews;
