import { ReactElement } from 'react';

import ProductImageCard from '@Modules/ProductDetailPage/ProductImages/ImageCard';
import clsx from 'clsx';
import Image from 'next/image';

import s from './styles.module.scss';

const ProductImages = (): ReactElement => {
  return (
    <div className={clsx('col-span-7 grid grid-cols-7 mb_32', s.productImages)}>
      <div data-lenis-prevent className={clsx('col-span-1', s.productImages_list)}>
        {Array.from({ length: 6 }).map((_, index) => (
          <ProductImageCard
            key={index}
            image={`/images/hero-bg.webp`}
            alt={`Product ${index + 1}`}
            isSelected={index === 0}
          />
        ))}
      </div>
      <div className={clsx('col-span-6', s.productImages_selected)}>
        <Image src="/images/drone1.png" alt="Product 1" width={500} height={500} />
      </div>
    </div>
  );
};

export default ProductImages;
