import Container from '@Components/Container';
import React from 'react';
import s from './styles.module.scss';
import Slider from './Slider';
import Image from 'next/image';
import UIButton from '@Components/Button';

const Explore = () => {
  return (
    <>
      <section className={s.home_explore}>
        <Container>
          <div className={s.home_explore__header}>
            <span className={`${s.home_explore__subtitle} txt-med`}>Explore Our Models</span>
            <h5 className={`${s.home_explore__title} txt-light`}>Choose Your Perfect Drone</h5>
            <p className={s.home_explore__description}>Find the best drone for your needs.</p>
          </div>

          <div className={s.slider_title_wrap}>
            <h5 className={`${s.slider__title}`}>Drone Model</h5>
            <UIButton color='gray'>View All Models</UIButton>
          </div>
        </Container>

        <Slider />
      </section>

      <div className={s.ticker_bg_wrap}>
        <div className={`${s.ticker_title_wrap} container`}>
          <h5 className={`${s.ticker_title}`}>FlyBeyond</h5>
        </div>
        <div className={s.ticker_bg}>
          <Image
            className={s.ticker_bg__image}
            src="/images/ticker-bg.png"
            alt=""
            height="1636"
            width="2880"
          ></Image>
        </div>
      </div>
    </>
  );
};

export default Explore;
