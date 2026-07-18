import React from 'react';

import UIButton from '@Components/Button';
import Fade from '@Components/FadeAnim';
import TypoAnim from '@Components/TypoAnim';
import Image from 'next/image';

import s from './styles.module.scss';

const CTA = (): React.ReactElement => {
  return (
    <section className={s.cta}>
      <div className={`${s.cta_main} container`}>
        <div className={`${s.cta_bottom} grid grid-cols-12`}>
          <div className={`${s.cta_content} txt-light`}>
            <TypoAnim delayTrigger={0} stagger={0.05}>
              <div className={`${s.cta_content_txt} txt-light`}>Ready to Ride the Future?</div>
            </TypoAnim>
            <Fade direction="bottom" from="10px" delayTrigger={0.6} duration={1.2}>
              <div style={{ opacity: 0 }}>
                <UIButton color="secondary">Get Your Drone</UIButton>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div className={s.cta_bg}>
        <Image
          className={s.cta_bg_image}
          src="/images/cta-image.png"
          alt=""
          height="1700"
          width="2880"
        ></Image>
      </div>
    </section>
  );
};

export default CTA;
