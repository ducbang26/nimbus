import React from 'react';
import s from './styles.module.scss';

const About = () => {
  return (
    <section className={s.home__about}>
      <div className={`${s.about__main} container grid grid-cols-12`}>
        <div className={`${s.about__main_subtitle} txt-med`}>ABOUT OUR DRONE</div>
        <div className={s.about__main_content}>
          <h4 className={`${s.about__main_title} txt-light`}>What is Our Drone?</h4>
          <p className={`${s.about__main_txt} txt-light`}>
            Our drones are designed for professionals, hobbyists, and adventurers alike. Whether you
            need stunning aerial photography, precision mapping, or high-speed racing, our advanced
            drones deliver cutting-edge performance with ease.
          </p>
        </div>
      </div>

      <div id="home__about-model">
        <canvas
          className="about__model-canvas"
          data-engine="three.js r169"
          width="1365"
          height="953"
        ></canvas>
      </div>
    </section>
  );
};

export default About;
