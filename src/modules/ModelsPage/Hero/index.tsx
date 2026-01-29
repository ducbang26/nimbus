import UIButton from '@Components/Button';
import UITypography from '@Components/Typography';
import { ETypography, ETypographyColor } from '@Components/Typography/constants';
import { clsx } from 'clsx';
import Image from 'next/image';

import s from './styles.module.scss';

const ModelsPageHero = (): React.ReactElement => {
  return (
    <div className={s.hero}>
      <div className={clsx('container', s.hero_container)}>
        <UITypography typography={ETypography.TEXT_32_REGULAR} className={s.hero_title}>
          CAMERA DRONE
        </UITypography>
        <UITypography typography={ETypography.TEXT_24_LIGHT}>
          Discover the best drones for professionals, enthusiasts, and beginners.
        </UITypography>
      </div>
      <div className={s.hero_banner}>
        <Image
          src="/images/shop-model.png"
          alt="hero-image"
          width={1920}
          height={1080}
          className={s.hero_image}
        />
        <UIButton variant="ghost" className={s.hero_button}>
          <UITypography color={ETypographyColor.WHITE} typography={ETypography.TEXT_24_REGULAR}>
            Shop Now
          </UITypography>
        </UIButton>
      </div>
    </div>
  );
};

export default ModelsPageHero;
