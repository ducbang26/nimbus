import { ReactElement } from 'react';

import UIButton from '@Components/Button';
import ProductItem from '@Components/ProductItem';
import UITypography from '@Components/Typography';
import { ETypography } from '@Components/Typography/constants';
import { MOCK_ITEMS } from '@Modules/ShopPage/constants';
import { clsx } from 'clsx';

import s from './styles.module.scss';

const ProductDroneModel = (): ReactElement => {
  return (
    <div className={clsx('col-span-7 mb_20', s.productDroneModel)}>
      <div className={s.productDroneModel_header}>
        <UITypography typography={ETypography.TEXT_32_REGULAR}>DRONE MODEL</UITypography>
        <UIButton>View All Models</UIButton>
      </div>
      <div className={clsx('grid grid-cols-12', s.productDroneModel_list)}>
        {MOCK_ITEMS.map((item, index) => (
          <ProductItem key={item.title} {...item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductDroneModel;
