'use client';
import { ReactElement, useState } from 'react';

import ProductImageCard from '@Modules/ProductDetailPage/ProductImages/ImageCard';
import clsx from 'clsx';
import Image from 'next/image';

import s from './styles.module.scss';

export interface ProductImage {
  url: string;
}

interface ProductImagesProps {
  images?: ReadonlyArray<ProductImage>;
}

const ProductImages = ({ images }: ProductImagesProps): ReactElement => {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleSelectImage = (image: number) => {
    setSelectedImage(image);
  };

  return (
    <div className={clsx('col-span-7 grid grid-cols-7 mb_32', s.productImages)}>
      <div data-lenis-prevent className={clsx('col-span-1', s.productImages_list)}>
        {images &&
          images.map((image, index) => (
            <ProductImageCard
              key={image.url}
              image={image.url}
              isSelected={index === selectedImage}
              handleSelectImage={() => handleSelectImage(index)}
            />
          ))}
      </div>

      <div className={clsx('col-span-6', s.productImages_selected)}>
        <Image
          src={images?.[selectedImage]?.url || '/images/fallback.png'}
          alt="Selected product image"
          width={500}
          height={500}
          priority
        />
      </div>
    </div>
  );
};

export default ProductImages;
