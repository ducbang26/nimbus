import React, { Suspense, useMemo, useRef } from 'react';

import { AboutDrone } from '@Components/AboutDrone';
import UIButton from '@Components/Button';
import Fade from '@Components/FadeAnim';
import TypoAnim from '@Components/TypoAnim';
import { Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Image from 'next/image';

import s from './styles.module.scss';

const Hero = (): React.ReactElement => {
  const scopeRef = useRef(null);

  // IMAGE REFS
  const preloaderContainerRef = useRef<HTMLDivElement | null>(null);

  // UI REFS
  const heroHeadingRef = useRef(null);
  const heroSubtitleRef = useRef(null);

  const dpr = useMemo(() => {
    if (typeof window === 'undefined') return 1;
    return [1, Math.min(1.5, window.devicePixelRatio)] as [number, number];
  }, []);

  return (
    <section ref={scopeRef} className={`${s.home__hero} home-hero`}>
      <div className={`${s.home__hero_wrap}`}>
        <div className={`${s.home__hero_main}`}>
          <div className={`${s.hero__heading_wrap} grid grid-cols-12`}>
            <TypoAnim delayTrigger={2.5} stagger={0.2}>
              <h3 ref={heroHeadingRef} className={`${s.home__hero_heading} txt-light`}>
                Revolutionize <br /> Your Perspective
              </h3>
            </TypoAnim>
          </div>

          <div className={`${s.home__hero_bottom} grid grid-cols-12`}>
            <div className={`${s.home__hero_cta} txt-light`}>
              <TypoAnim delayTrigger={2.9} stagger={0.05}>
                <p ref={heroSubtitleRef} className={s.hero__cta_txt}>
                  Experience the Future of Aerial Technology
                </p>
              </TypoAnim>
              <Fade direction="bottom" from="10px" delayTrigger={3.4} duration={1.2}>
                <div style={{ opacity: 0 }}>
                  <UIButton color="secondary">Explore Our Drones</UIButton>
                </div>
              </Fade>
            </div>

            {/* <div ref={previewRef} className={s.home__hero_preview}>
        <Image src="/images/hero-preview.avif" alt="" width={296} height={160} />
        <div className={s.hero__preview_txt}>View new drone 2025</div>
      </div> */}
          </div>
        </div>
        <div className={`${s.about__main} container grid grid-cols-12`}>
          <TypoAnim delayTrigger={0.7} stagger={0.1}>
            <div className={`${s.about__main_subtitle} txt-med`}>ABOUT OUR DRONE</div>
          </TypoAnim>
          <div className={s.about__main_content}>
            <TypoAnim delayTrigger={0.7} stagger={0.1}>
              <h4 className={`${s.about__main_title} txt-light`}>What is Our Drone?</h4>
            </TypoAnim>
            <TypoAnim delayTrigger={1} stagger={0.02}>
              <p className={`${s.about__main_txt} txt-light`}>
                Our drones are designed for professionals, hobbyists, and adventurers alike. Whether
                you need stunning aerial photography, precision mapping, or high-speed racing, our
                advanced drones deliver cutting-edge performance with ease.
              </p>
            </TypoAnim>
          </div>
        </div>
        <div style={{ width: '100%', height: '80vh' }}></div>

        {/* BACKGROUND */}
        <div className={s.home__hero_bg}>
          <div ref={preloaderContainerRef} className={s.preloader__container}>
            <div className={s.image__wrapper} id={'final-image'}>
              <Image style={{ height: "100%" }} src={'/images/hero-bg.png'} alt="" width={2880} height={1700} />
            </div>
          </div>
        </div>
      </div>
      {/* CONTENT */}

      <div className={s.home__about_model}>
        <div className={s.about__model_wrap}>
          <Canvas shadows dpr={dpr} camera={{ position: [0, 5, 6], fov: 25, near: 0.1, far: 100 }}>
            <Suspense fallback={null}>
              {/* <OrbitControls
                  minDistance={6}
                  maxDistance={10}
                  enableZoom={false}
                  minPolarAngle={1.3}
                  maxPolarAngle={Math.PI / 2}
                  enablePan={false}
                /> */}
              <directionalLight
                position={[-2, 2, 1]}
                castShadow
                shadow-mapSize-width={256}
                intensity={2}
                shadow-bias={-0.0001}
              />
              <Environment preset="warehouse" environmentIntensity={0.8} />
              <AboutDrone />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Hero;
