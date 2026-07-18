import React, { useRef } from 'react';

import UIButton from '@Components/Button';
import Container from '@Components/Container';
import Fade from '@Components/FadeAnim';
import TypoAnim from '@Components/TypoAnim';
import Ai from '@Icons/Ai';
import GPS from '@Icons/GPS';
import Speed from '@Icons/Speed';
import Video from '@Icons/Video';
import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

import s from './styles.module.scss';

const LIST_FEATURE_CARD = [
  {
    id: 1,
    icon: <Video />,
    title: 'Cinematic 4K Video',
    text: 'Capture breathtaking aerial shots',
  },
  {
    id: 2,
    icon: <Speed />,
    title: 'High-Speed Flight',
    text: 'Reach speeds up to 50 km/h',
  },
  {
    id: 3,
    icon: <GPS />,
    title: 'GPS Precision',
    text: 'Stable, smooth and safe flying',
  },
  {
    id: 4,
    icon: <Ai />,
    title: 'AI-Powered Smart Features',
    text: 'Obstacle avoidance & auto-follow',
  },
];

gsap.registerPlugin(ScrollTrigger);

const Why = (): React.ReactElement => {
  const containerRef = useRef<HTMLElement | null>(null);
  const featuresImageRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const mainTL = gsap.timeline({
        scrollTrigger: {
          trigger: '.feature_card_wrap',
          start: 'top 50%',
          invalidateOnRefresh: true,
        },
      });

      const imageTL = gsap.timeline({
        scrollTrigger: {
          trigger: featuresImageRef.current,
          start: 'top 30%',
          invalidateOnRefresh: true,
        },
      });

      const featureCards = containerRef.current.querySelectorAll('.feature_card');

      gsap.set(featureCards, { clipPath: 'inset(0% 0% 100% 0%)' });

      mainTL.to(featureCards, {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 0.8,
        stagger: 0.3,
        ease: 'power2.inOut',
      });

      imageTL.to(featuresImageRef.current, {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1.2,
        ease: 'power2.inOut',
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className={s.drone_showcase}>
      <Container>
        <div className={s.drone_showcase__header}>
          <TypoAnim delayTrigger={0} stagger={0.2}>
            <span className={`${s.drone_showcase__subtitle} txt-med`}>WHY CHOOSE OUR DRONES?</span>
          </TypoAnim>
          <TypoAnim delayTrigger={0} stagger={0.2}>
            <h5 className={`${s.drone_showcase__title} txt-light`}>
              Elevate Your Flight Experience
            </h5>
          </TypoAnim>
          <TypoAnim delayTrigger={0} stagger={0.1}>
            <p className={s.drone_showcase__description}>
              Our drones provide the best combination of power, intelligence, and reliability.
            </p>
          </TypoAnim>
          <Fade direction="bottom" from="10px" delayTrigger={1}>
            <UIButton>Explore More</UIButton>
          </Fade>
        </div>

        <div className={clsx(s.drone_showcase__features, 'grid grid-cols-12 feature_card_wrap')}>
          {LIST_FEATURE_CARD.map((card) => {
            return (
              <div key={card.id} className={clsx(s.drone_showcase__feature_card, 'feature_card')}>
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

        <div ref={featuresImageRef} className={s.drone_showcase__features_image}>
          <Image
            className={s.features__image_inner}
            src="/images/home-why-bg.webp"
            alt=""
            height="750"
            width="1320"
            priority
          />
        </div>
      </Container>
    </section>
  );
};

export default Why;
