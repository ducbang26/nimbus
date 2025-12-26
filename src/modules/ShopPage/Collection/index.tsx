'use client';

import clsx from 'clsx';
import s from './styles.module.scss';
import {
  EFontLetterSpacing,
  ETypography,
  ETypographyColor,
} from '@Components/Typography/constants';
import UITypography from '@Components/Typography';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { COLLECTION_ITEMS } from '@Modules/ShopPage/constants';
import Arrow from '@Icons/Arrow';

const ShopPageCollection = () => {
  return (
    <>
      <div className={clsx(s.collection, 'container grid grid-cols-12')}>
        <div className={clsx('col-span-4')}>
          <UITypography typography={ETypography.TEXT_36_LIGHT} letterSpacing={EFontLetterSpacing.L}>
            Find the Perfect Drone for You
          </UITypography>
          <UITypography
            typography={ETypography.TEXT_24_LIGHT}
            letterSpacing={EFontLetterSpacing.S}
            color={ETypographyColor.NEUTRAL_300}
          >
            Explore our cutting-edge drones designed for every need, from cinematic filming to
            high-speed racing.
          </UITypography>
        </div>
        <Image
          className="col-span-8"
          src="/images/ticker-bg.png"
          alt="collection-image"
          width={1000}
          height={1000}
        />
      </div>
      <UITypography typography={ETypography.TEXT_32_REGULAR} className={s.collection_title}>
        COLLECTION
      </UITypography>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={20}
        className={s.collection_slider}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
      >
        {COLLECTION_ITEMS.map((item, index) => (
          <SwiperSlide key={index} className={s.collection_slide}>
            <div className={s.collection_item}>
              <div className={s.collection_item_image}>
                <Image src={item.image} alt={item.title} width={600} height={600} />
              </div>
              <div className={s.collection_item_content}>
                <UITypography typography={ETypography.TEXT_32_REGULAR} letterSpacing={EFontLetterSpacing.M}>
                  {item.title} {item.subtitle && `(${item.subtitle})`}
                </UITypography>
                <div className={s.collection_item_arrow}>
                  <Arrow />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={clsx(s.collection_footer)}>
        <div className={s.collection_footer_image_wrap}>
          <Image
            src="/images/ticker-bg.png"
            alt="collection-image"
            width={1000}
            height={1000}
            className={s.collection_footer_image}
          />
        </div>
        <div className={s.collection_footer_content}>
          <UITypography typography={ETypography.TEXT_36_LIGHT} lineHeight={48}>
            Best-selling and most advanced drones available now!
          </UITypography>
        </div>
      </div>
    </>
  );
};

export default ShopPageCollection;
