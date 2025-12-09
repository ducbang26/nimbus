import Container from '@Components/Container';
import React from 'react';
import s from './styles.module.scss';
import Slider from './Slider';
import { Button } from '@Components/Button';

const Explore = () => {
  return (
    <section className={s.home_explore}>
      <Container>
        <div className={s.home_explore__header}>
          <span className={`${s.home_explore__subtitle} txt-med`}>Explore Our Models</span>
          <h5 className={`${s.home_explore__title} txt-light`}>Choose Your Perfect Drone</h5>
          <p className={s.home_explore__description}>Find the best drone for your needs.</p>
        </div>

        <div className={s.slider_title_wrap}>
          <h5 className={`${s.slider__title}`}>Drone Model</h5>
          <Button color='grey'>View All Models</Button>
        </div>
      </Container>

      <Slider />

      
    </section>
  );
};

export default Explore;
