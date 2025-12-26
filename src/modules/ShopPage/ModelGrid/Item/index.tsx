import UITypography from '@Components/Typography';
import s from './styles.module.scss';
import Image from 'next/image';
import { ETypography, ETypographyColor } from '@Components/Typography/constants';
import { clsx } from 'clsx';

interface IProductItemProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

const ProductItem = ({ image, title, description, price }: IProductItemProps) => {
  return (
    <div className={clsx('col-span-3', s.productItem)}>
      <div className={s.productItem_image}>
        <Image src={image} alt={title} width={500} height={500} />
      </div>
      <div className={s.productItem_content}>
        <UITypography typography={ETypography.TEXT_24_REGULAR}>{title}</UITypography>
        <UITypography typography={ETypography.TEXT_16_LIGHT}>{description}</UITypography>
      </div>
      <UITypography typography={ETypography.TEXT_20_REGULAR} color={ETypographyColor.NEUTRAL_300}>
        {price}
      </UITypography>
    </div>
  );
};

export default ProductItem;
