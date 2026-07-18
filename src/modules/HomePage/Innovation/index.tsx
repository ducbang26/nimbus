import React from 'react';

import Container from '@Components/Container';
import Fade from '@Components/FadeAnim';
import TypoAnim from '@Components/TypoAnim';
import Image from 'next/image';

import s from './styles.module.scss';

const Innovation = (): React.ReactElement => {
  return (
    <section className={s.innovation}>
      <Container>
        <div className={`${s.innovation_wrap} grid grid-cols-12`}>
          <div className={s.innovation_content}>
            <TypoAnim delayTrigger={0.1} stagger={0.2}>
              <div className={s.innovation_content_subtitle}>Innovation & Technology</div>
            </TypoAnim>
            <TypoAnim delayTrigger={0.2} stagger={0.1}>
              <div className={s.innovation_content_title}>Pushing the Limits of Aerial Tech</div>
            </TypoAnim>
            <TypoAnim delayTrigger={0.3} stagger={0.1}>
              <div className={s.innovation_content_text}>
                Our drones are built with the latest advancements in AI, GPS stabilization, and
                high-definition imaging to ensure the best flight experience.
              </div>
            </TypoAnim>
          </div>
          <div className={s.innovation_hightlight}>
            <div className={s.innovation_hightlight_item}>
              <Fade direction="bottom" from="10px" delayTrigger={0.6}>
                <div className={s.hightlight_stat}>1,000,000+</div>
              </Fade>
              <Fade direction="bottom" from="10px" delayTrigger={0.7}>
                <div className={s.hightlight_content}>Aerial Videos Captured</div>
              </Fade>
            </div>
            <div className={s.innovation_hightlight_item}>
              <Fade direction="bottom" from="10px" delayTrigger={0.8}>
                <div className={s.hightlight_stat}>Advanced</div>
              </Fade>
              <Fade direction="bottom" from="10px" delayTrigger={0.9}>
                <div className={s.hightlight_content}>AI & GPS Technology</div>
              </Fade>
            </div>
            <div className={s.innovation_hightlight_item}>
              <Fade direction="bottom" from="10px" delayTrigger={1}>
                <div className={s.hightlight_stat}>Award</div>
              </Fade>
              <Fade direction="bottom" from="10px" delayTrigger={1.1}>
                <div className={s.hightlight_content}>Winning Drone Design</div>
              </Fade>
            </div>
          </div>
        </div>
      </Container>
      <div className={s.innovation_bg}>
        <Image
          className={s.innovation_bg_image}
          src="/images/innovation-bg.png"
          alt=""
          height="1350"
          width="2160"
          priority
        />
      </div>
    </section>
  );
};

export default Innovation;
