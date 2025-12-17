import React from 'react';
import s from './styles.module.scss';
import Container from '@Components/Container';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <section className={s.testimonials}>
      <Container className={s.testimonials_wrap}>
        <div className={s.testimonials_header}>
          <h5 className={`${s.testimonials_title} txt-light`}>Trusted by Pilots Worldwide</h5>
          <p className={s.testimonials_desc}>See what our users say about their experience.</p>
        </div>

        <div className="grid">
          <div className={s.bar}>
            <div className={s.bar_thumb}></div>
            <div className={s.bar_track}></div>
          </div>
        </div>

        <div className={`${s.testimonials_slider} grid`}>
          <div className={s.testimonials_slider_img}>
            <div className={`${s.img_wrap} grid-1-1`}>
              <Image
                width={0}
                height={0}
                sizes="100vw"
                src="/images/testi-1.png"
                alt="connection-image"
              />
              <Image
                width={0}
                height={0}
                sizes="100vw"
                src="/images/testi-1.png"
                alt="connection-image"
              />
              <Image
                width={0}
                height={0}
                sizes="100vw"
                src="/images/testi-1.png"
                alt="connection-image"
              />
            </div>
          </div>
          <div className={s.testimonials_slider_content}>
            <div className={`grid-1-1`}>
              <p>&quot;The best drone I’ve ever used—smooth flight and incredible footage!&quot;</p>
              <p>&quot;The best drone I’ve ever used—smooth flight and incredible footage!&quot;</p>
              <p>&quot;The best drone I’ve ever used—smooth flight and incredible footage!&quot;</p>
            </div>
            <div>
              
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
