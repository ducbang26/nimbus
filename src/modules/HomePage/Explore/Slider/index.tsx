import React from 'react';

import Fade from '@Components/FadeAnim';
import Arrow from '@Icons/Arrow';
import clsx from 'clsx';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import s from './styles.module.scss';

const Slider = (): React.ReactElement => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);

  const sliderData = [
    {
      image: '/images/drone1.png',
      title: 'AeroVision Pro',
      desc: 'For professional filmmakers & photographers',
    },
    {
      image: '/images/drone2.png',
      title: 'SkyRacer X',
      desc: 'High-speed drone for racing enthusiasts',
    },
    {
      image: '/images/drone3.png',
      title: 'Explorer Mini',
      desc: 'Compact and easy-to-use for beginners',
    },
    {
      image: '/images/drone4.png',
      title: 'Explorer Mini',
      desc: 'Compact and easy-to-use for beginners',
    },
  ];

  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={20}
      className={s.slider}
      onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.activeIndex)}
      onTouchStart={() => setIsDragging(true)}
      onSliderMove={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTransitionEnd={() => setIsDragging(false)}
    >
      {sliderData.map((item, index) => {
        const isActive = isDragging || activeIndex === index;

        return (
          <Fade direction="bottom" from="10px" delayTrigger={0.5 + 0.1 * index} duration={0.8}>
            <SwiperSlide key={index} className={clsx(s.slider__item, isActive && s.active_slide)}>
              <div className={s.slider_image} style={{ backgroundImage: `url(${item.image})` }} />

              <div className={s.slider_content}>
                <div>
                  <p className={s.drone_title}>{item.title}</p>
                  <p className={s.drone_description}>{item.desc}</p>
                </div>

                <div className={s.icon_wrapper}>
                  <Arrow />
                </div>
              </div>
            </SwiperSlide>
          </Fade>
        );
      })}
    </Swiper>
  );
};

export default Slider;
