import { ReactElement } from 'react';

import { clsx } from 'clsx';
import Image from 'next/image';

import s from './styles.module.scss';

interface IProductImageCardProps {
  image: string;
  isSelected?: boolean;
  handleSelectImage?: () => void;
}

const ProductImageCard = ({
  image,
  isSelected,
  handleSelectImage,
}: IProductImageCardProps): ReactElement => {
  return (
    <button
      onClick={handleSelectImage}
      className={clsx(s.productImageCard, isSelected && s.productImageCard__selected)}
    >
      <Image src={image} alt={'product-image'} width={100} height={100} />
    </button>
  );
};

export default ProductImageCard;
