import Image from 'next/image';
import React from 'react';
import s from './styles.module.scss';

const Hero = () => {
  return (
    <section className={s.home__hero}>
      <div className={`${s.home__hero_main} container`}>
        <div className="grid grid-cols-12">
          <h3 className={`${s.home__hero_heading} txt-light`}>
            Revolutionize <br /> Your Perspective
          </h3>
        </div>
        <div className={`${s.home__hero_bottom} grid grid-cols-12`}>
          <div className={`${s.home__hero_cta} txt-light`}>
            <p className={`${s.hero__cta_txt} txt-light`}>
              Experience the Future of Aerial Technology
            </p>
            <div className={`${s.hero__cta_btn} txt-light`}>Explore Our Drones</div>
          </div>
          <div className={s.home__hero_preview}>
            <Image
              className={s.hero__preview_image}
              src="/images/hero-preview.avif"
              alt=""
              height="160"
              width="296"
            ></Image>
            <div className={`${s.hero__preview_txt} txt-regular`}>View new drone 2025</div>
          </div>
        </div>
      </div>
      <div className={s.home__hero_bg}>
        <Image
          className={s.hero__bg_image}
          src="/images/hero-bg.webp"
          alt=""
          height="1700"
          width="2880"
        ></Image>
      </div>
    </section>
  );
};

export default Hero;
