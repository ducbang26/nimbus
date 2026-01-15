import { ReactElement } from 'react';
import { clsx } from 'clsx';
import Image from 'next/image';

import s from './styles.module.scss';

interface IProductImageCardProps {
  image: string;
  alt: string;
  isSelected: boolean;
}

const ProductImageCard = ({ image, alt, isSelected }: IProductImageCardProps): ReactElement => {
  return (
    <button className={clsx(s.productImageCard, isSelected && s.productImageCard__selected)}>
      <Image src={image} alt={alt} width={100} height={100} />
    </button>
  );
};

export default ProductImageCard;
