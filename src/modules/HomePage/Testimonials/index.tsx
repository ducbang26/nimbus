import React from 'react';
import s from './styles.module.scss';
import Container from '@Components/Container';

const Testimonials = () => {
  return (
    <section className={s.testimonials}>
      <Container>
        <div className={s.testimonials_header}>
          <h5 className={`${s.testimonials_title} txt-light`}>Trusted by Pilots Worldwide</h5>
          <p className={s.testimonials_desc}>See what our users say about their experience.</p>
        </div>

        <div className='grid'>
          <div className={s.bar}>
            <div className={s.bar_thumb}></div>
            <div className={s.bar_track}></div>
          </div>
        </div>

        <div className={`${s.testimonials_content} grid`}>

        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
