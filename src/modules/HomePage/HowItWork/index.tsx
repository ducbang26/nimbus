import React from 'react';

import Container from '@Components/Container';
import Image from 'next/image';

import s from './styles.module.scss';

const HowItWork = (): React.ReactElement => {
  return (
    <section className={s.howitwork}>
      <Container>
        <div className={s.howitwork_header}>
          <span className={`${s.howitwork_subtitle} txt-med`}>How It Works</span>
          <h5 className={`${s.howitwork_title} txt-light`}>Fly in 3 Simple Steps</h5>
        </div>
        <div className={s.steps}>
          <div className={s.step_item}>
            <div className={s.step_item_content}>
              <div className={s.step_item_number}>1</div>
              <div className={s.step_item_title}>Choose Your Drone</div>
              <div className={s.step_item_text}>Find the model that suits your needs</div>
            </div>
            <Image
              className={s.step_item_image}
              src="/images/step1.png"
              alt=""
              height="570"
              width="427"
            />
            <div className={s.step_item_overlay}></div>
          </div>
          <div className={s.step_item}>
            <div className={s.step_item_content}>
              <div className={s.step_item_number}>2</div>
              <div className={s.step_item_title}>Unbox & Setup</div>
              <div className={s.step_item_text}>Easy setup with our quick-start guide</div>
            </div>
            <Image
              className={s.step_item_image}
              src="/images/step2.png"
              alt=""
              height="570"
              width="427"
            />
            <div className={s.step_item_overlay}></div>
          </div>
          <div className={s.step_item}>
            <div className={s.step_item_content}>
              <div className={s.step_item_number}>3</div>
              <div className={s.step_item_title}>Take Off & Capture</div>
              <div className={s.step_item_text}>Enjoy high-quality aerial views</div>
            </div>
            <Image
              className={s.step_item_image}
              src="/images/step3.png"
              alt=""
              height="570"
              width="427"
            />
            <div className={s.step_item_overlay}></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWork;
