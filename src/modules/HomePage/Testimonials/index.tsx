import React from 'react';

import Container from '@Components/Container';
import Image from 'next/image';

import s from './styles.module.scss';

const Testimonials = (): React.ReactElement => {
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
          <div className={s.testimonials_thumbnail}>
            <div className={`${s.testimonials_thumbnail_list} grid-1-1`}>
              <div className={s.thumbnail_img}>
                <Image
                  width={762}
                  height={550}
                  sizes=""
                  src="/images/testi-1.png"
                  alt="connection-image"
                />
              </div>
              <div className={s.thumbnail_img}>
                <Image
                  width={762}
                  height={550}
                  sizes=""
                  src="/images/testi-1.png"
                  alt="connection-image"
                />
              </div>
              <div className={s.thumbnail_img}>
                <Image
                  width={762}
                  height={550}
                  sizes=""
                  src="/images/testi-1.png"
                  alt="connection-image"
                />
              </div>
            </div>
          </div>
          <div className={s.testimonials_slider_content}>
            <div className={`grid-1-1`}>
              <p className={s.testimonials_slider_text}>
                &quot;The best drone I’ve ever used—smooth flight and incredible footage!&quot;
              </p>
              <p className={s.testimonials_slider_text}>
                &quot;The best drone I’ve ever used—smooth flight and incredible footage!&quot;
              </p>
              <p className={s.testimonials_slider_text}>
                &quot;The best drone I’ve ever used—smooth flight and incredible footage!&quot;
              </p>
            </div>
            <div className={s.testimonials_slider_info}>
              <div className={s.line}></div>
              <div className={s.info_inner}>
                <div className={`grid-1-1`}>
                  <div className={s.info_avt}> </div>
                  <div className={s.info_avt}> </div>
                  <div className={s.info_avt}> </div>
                </div>
                <div className={`grid-1-1`}>
                  <div className={s.info_name}>David, Photographer</div>
                  <div className={s.info_name}>David, Photographer</div>
                  <div className={s.info_name}>David, Photographer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
