import React from 'react';

import UIButton from '@Components/Button';
import Container from '@Components/Container';
import Fade from '@Components/FadeAnim';
import TypoAnim from '@Components/TypoAnim';
import Ai from '@Icons/Ai';
import GPS from '@Icons/GPS';
import Speed from '@Icons/Speed';
import Video from '@Icons/Video';
import clsx from 'clsx';
import Image from 'next/image';

import s from './styles.module.scss';

const LIST_FEATURE_CARD = [
  {
    icon: <Video />,
    title: 'Cinematic 4K Video',
    text: 'Capture breathtaking aerial shots',
  },
  {
    icon: <Speed />,
    title: 'High-Speed Flight',
    text: 'Reach speeds up to 50 km/h',
  },
  {
    icon: <GPS />,
    title: 'GPS Precision',
    text: 'Stable, smooth and safe flying',
  },
  {
    icon: <Ai />,
    title: 'AI-Powered Smart Features',
    text: 'Obstacle avoidance & auto-follow',
  },
];

const Why = (): React.ReactElement => {
  return (
    <section className={s.drone_showcase}>
      <Container>
        <div className={s.drone_showcase__header}>
          <TypoAnim delayTrigger={0.5} stagger={0.2}>
            <span className={`${s.drone_showcase__subtitle} txt-med`}>WHY CHOOSE OUR DRONES?</span>
          </TypoAnim>
          <TypoAnim delayTrigger={0.5} stagger={0.2}>
            <h5 className={`${s.drone_showcase__title} txt-light`}>
              Elevate Your Flight Experience
            </h5>
          </TypoAnim>
          <TypoAnim delayTrigger={0.5} stagger={0.1}>
            <p className={s.drone_showcase__description}>
              Our drones provide the best combination of power, intelligence, and reliability.
            </p>
          </TypoAnim>
          <Fade direction="bottom" from="10px" delayTrigger={1}>
            <UIButton>Explore More</UIButton>
          </Fade>
        </div>

        <div className={`${s.drone_showcase__features} grid grid-cols-12`}>
          {LIST_FEATURE_CARD.map((card, index) => {
            return (
              <div className={clsx(s.drone_showcase__feature_card, 'feature_card')}>
                <div
                  className={`${s.drone_showcase__feature_icon} ${s.drone_showcase__feature_icon__video}`}
                >
                  <span className={s.drone_showcase__feature_svg}>{card.icon}</span>
                </div>
                <h6 className={s.drone_showcase__feature_title}>{card.title}</h6>
                <p className={s.drone_showcase__feature_text}>{card.text}</p>
              </div>
            );
          })}
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
