import UITypography from '@Components/Typography';
import { ETypography } from '@Components/Typography/constants';
import { MOCK_ITEMS } from '@Modules/ShopPage/constants';
import Image from 'next/image';
import Link from 'next/link';

import s from './styles.module.scss';

interface IModelsLineUpItemProps {
  image: string;
  title: string;
  description: string;
}

const ModelsLineUpItem = ({
  image,
  title,
  description,
}: IModelsLineUpItemProps): React.ReactElement => {
  const index = MOCK_ITEMS.findIndex(item => item.title === title);
  
  return (
    <Link href={`/product/${index >= 0 ? index : 0}`} className={s.productItem}>
      <div className={s.productItem_image}>
        <Image src={image} alt={title} width={1000} height={1000} />
      </div>
      <div className={s.productItem_content}>
        <UITypography typography={ETypography.TEXT_36_LIGHT} className={s.productItem_title}>
          {title}
        </UITypography>
        <UITypography typography={ETypography.TEXT_24_LIGHT}>{description}</UITypography>
      </div>
    </Link>
  );
};

export default ModelsLineUpItem;
