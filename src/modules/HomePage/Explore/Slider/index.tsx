import React from 'react';
import Arrow from '@Icons/Arrow';
import { Swiper, SwiperSlide } from 'swiper/react';

import s from './styles.module.scss';

import 'swiper/css';

const Slider = () : React.ReactElement => {
  const [activeIndex, setActiveIndex] = React.useState(0);

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
        slidesPerView={'auto'}
        spaceBetween={20}
        className={s.slider}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {sliderData.map((item, index) => (
          <SwiperSlide
            key={index}
            className={`${s.slider__item} ${activeIndex === index ? s.active_slide : ''}`}
          >
            <div className={s.slider_image} style={{ backgroundImage: `url(${item.image})` }}></div>
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
        ))}
      </Swiper>
  );
};

export default Slider;
