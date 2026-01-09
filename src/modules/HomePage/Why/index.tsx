import React from 'react';
import UIButton from '@Components/Button';
import Container from '@Components/Container';
import Ai from '@Icons/Ai';
import GPS from '@Icons/GPS';
import Speed from '@Icons/Speed';
import Video from '@Icons/Video';
import Image from 'next/image';

import s from './styles.module.scss';

const Why = () : React.ReactElement => {
  return (
    <section className={s.drone_showcase}>
      <Container>
        <div className={s.drone_showcase__header}>
          <span className={`${s.drone_showcase__subtitle} txt-med`}>WHY CHOOSE OUR DRONES?</span>
          <h5 className={`${s.drone_showcase__title} txt-light`}>Elevate Your Flight Experience</h5>
          <p className={s.drone_showcase__description}>
            Our drones provide the best combination of power, intelligence, and reliability.
          </p>
          <UIButton color='gray'>Explore More</UIButton>
        </div>

        <div className={`${s.drone_showcase__features} grid grid-cols-12`}>
          <div className={s.drone_showcase__feature_card}>
            <div className={`${s.drone_showcase__feature_icon} ${s.drone_showcase__feature_icon__video}`}>
              <span className={s.drone_showcase__feature_svg}>
                <Video />
              </span>
            </div>
            <h6 className={s.drone_showcase__feature_title}>Cinematic 4K Video</h6>
            <p className={s.drone_showcase__feature_text}>Capture breathtaking aerial shots</p>
          </div>

          <div className={s.drone_showcase__feature_card}>
            <div className={`${s.drone_showcase__feature_icon} ${s.drone_showcase__feature_icon__speed}`}>
              <span className={s.drone_showcase__feature_svg}>
                <Speed />
              </span>
            </div>
            <h6 className={s.drone_showcase__feature_title}>High-Speed Flight</h6>
            <p className={s.drone_showcase__feature_text}>Reach speeds up to 50 km/h</p>
          </div>

          <div className={s.drone_showcase__feature_card}>
            <div className={`${s.drone_showcase__feature_icon} ${s.drone_showcase__feature_icon__gps}`}>
              <span className={s.drone_showcase__feature_svg}>
                <GPS />
              </span>
            </div>
            <h6 className={s.drone_showcase__feature_title}>GPS Precision</h6>
            <p className={s.drone_showcase__feature_text}>Stable, smooth and safe flying</p>
          </div>

          <div className={s.drone_showcase__feature_card}>
            <div className={`${s.drone_showcase__feature_icon} ${s.drone_showcase__feature_icon__ai}`}>
              <span className={s.drone_showcase__feature_svg}>
                <Ai />
              </span>
            </div>
            <h6 className={s.drone_showcase__feature_title}>AI-Powered Smart Features</h6>
            <p className={s.drone_showcase__feature_text}>Obstacle avoidance &amp; auto-follow</p>
          </div>
        </div>

        <div className={s.drone_showcase__features_image}>
          <Image
            className={s.features__image_inner}
            src="/images/home-why-bg.webp"
            alt=""
            height="750"
            width="1320"
          />
        </div>
      </Container>
    </section>
  );
};

export default Why;
