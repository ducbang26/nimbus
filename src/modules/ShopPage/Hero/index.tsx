import Image from 'next/image';

import s from './styles.module.scss';
import UITypography from '@Components/Typography';
import { ETypography, ETypographyColor } from '@Components/Typography/constants';

const ShopPageHero = () => {
  return (
    <div className={s.hero}>
      <div className={s.hero_container}>
        <Image
          className={s.hero_image}
          src="/images/hero-bg.webp"
          alt="shop-page-hero"
          width={1920}
          height={1080}
        />
        <div className={s.hero_content}>
          <UITypography
            tag="h3"
            typography={ETypography.TEXT_52_LIGHT}
            className={s.hero_title}
            color={ETypographyColor.WHITE}
          >
            Welcome to Nimbus Air
          </UITypography>
          <UITypography
            typography={ETypography.TEXT_24_LIGHT}
            className={s.hero_subtitle}
            color={ETypographyColor.WHITE}
          >
            Discover top-tier drones and accessories for every adventure.
          </UITypography>
        </div>
      </div>
    </div>
  );
};

export default ShopPageHero;
