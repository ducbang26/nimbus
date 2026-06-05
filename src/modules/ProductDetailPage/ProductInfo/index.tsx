import { ReactElement } from 'react';

import ProductDesc from '@Modules/ProductDetailPage/ProductInfo/ProductDesc';
import ProductPrice from '@Modules/ProductDetailPage/ProductInfo/ProductPrice';
import { ProductItemData } from '@Types/product';

interface IProductInfoProps {
  product?: ProductItemData;
}

const ProductInfo = ({ product }: IProductInfoProps): ReactElement => {
  return (
    <>
      <ProductPrice product={product} />
      <ProductDesc />
    </>
  );
};

export default ProductInfo;
