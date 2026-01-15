import React from 'react';
import Container from '@Components/Container';
import Image from 'next/image';

import s from './styles.module.scss';

const Innovation = (): React.ReactElement => {
  return (
    <section className={s.innovation}>
      <Container>
        <div className={`${s.innovation_wrap} grid grid-cols-12`}>
          <div className={s.innovation_content}>
            <div className={s.innovation_content_subtitle}>Innovation & Technology</div>
            <div className={s.innovation_content_title}>Pushing the Limits of Aerial Tech</div>
            <div className={s.innovation_content_text}>Our drones are built with the latest advancements in AI, GPS stabilization, and high-definition imaging to ensure the best flight experience.</div>
          </div>
          <div className={s.innovation_hightlight}>
            <div className={s.innovation_hightlight_item}>
                <div className={s.hightlight_stat}>1,000,000+</div>
                <div className={s.hightlight_content}>Aerial Videos Captured</div>
            </div>
            <div className={s.innovation_hightlight_item}>
                <div className={s.hightlight_stat}>Advanced</div>
                <div className={s.hightlight_content}>AI & GPS Technology</div>
            </div>
            <div className={s.innovation_hightlight_item}>
                <div className={s.hightlight_stat}>Award</div>
                <div className={s.hightlight_content}>Winning Drone Design</div>
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
        />
      </div>
    </section>
  );
};

export default Innovation;
