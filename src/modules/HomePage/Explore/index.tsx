import React from 'react';

import UIButton from '@Components/Button';
import Container from '@Components/Container';
import Fade from '@Components/FadeAnim';
import TypoAnim from '@Components/TypoAnim';
import Image from 'next/image';

import Slider from './Slider';
import s from './styles.module.scss';

const Explore = (): React.ReactElement => {
  return (
    <>
      <section className={s.home_explore}>
        <Container>
          <div className={s.home_explore__header}>
            <TypoAnim delayTrigger={0} stagger={0.2}>
              <span className={`${s.home_explore__subtitle} txt-med`}>Explore Our Models</span>
            </TypoAnim>
            <TypoAnim delayTrigger={0} stagger={0.2}>
              <h5 className={`${s.home_explore__title} txt-light`}>Choose Your Perfect Drone</h5>
            </TypoAnim>
            <TypoAnim delayTrigger={0} stagger={0.1}>
              <p className={s.home_explore__description}>Find the best drone for your needs.</p>
            </TypoAnim>
          </div>

          <div className={s.slider_title_wrap}>
            <Fade direction="bottom" from="10px" delayTrigger={1}>
              <h5 className={`${s.slider__title}`}>Drone Model</h5>
            </Fade>
            <Fade direction="bottom" from="10px" delayTrigger={1.1}>
              <UIButton>View All Models</UIButton>
            </Fade>
          </div>
        </Container>

        <Slider />
      </section>

      <div className={s.ticker_bg_wrap}>
        <div className={s.ticker_bg}>
          <Image
            className={s.ticker_bg__image}
            src="/images/ticker-bg.png"
            alt=""
            height="1636"
            width="2880"
            priority
          ></Image>
        </div>
      </div>
    </>
  );
};

export default Explore;
