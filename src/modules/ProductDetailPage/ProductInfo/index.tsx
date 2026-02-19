import { ReactElement } from 'react';

import ProductDesc from '@Modules/ProductDetailPage/ProductInfo/ProductDesc';
import ProductPrice from '@Modules/ProductDetailPage/ProductInfo/ProductPrice';

const ProductInfo = (): ReactElement => {
  return (
    <>
      <ProductPrice />
      <ProductDesc />
    </>
  );
};

export default ProductInfo;
