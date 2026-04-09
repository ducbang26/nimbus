import React, { Suspense, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { CustomEase, Flip } from 'gsap/all';
import { useGSAP } from '@gsap/react';

import UIButton from '@Components/Button';
import s from './styles.module.scss';
import { useLenis } from 'lenis/react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { AboutDrone } from '@Components/AboutDrone';
import TypoAnim from '@Components/TypoAnim';

// =========================
// GSAP SETUP
// =========================
gsap.registerPlugin(Flip, CustomEase, useGSAP);

CustomEase.create('customEase', '0.6, 0.01, 0.05, 1');
CustomEase.create('directionalEase', '0.16, 1, 0.3, 1');
CustomEase.create('smoothBlur', '0.25, 0.1, 0.25, 1');
CustomEase.create('gentleIn', '0.38, 0.005, 0.215, 1');

const INITIAL_ZOOM = 1.2;

const HERO_BG = [
  { src: '/images/hero-bg.png' },
  { src: '/images/home-why-bg.webp' },
  { src: '/images/cta-image.png' },
  { src: '/images/ticker-bg.png' },
  { src: '/images/hero-bg.png' },
];

const Hero = () => {
  const scopeRef = useRef(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const lenis = useLenis();

  // IMAGE REFS
  const imageWrappersRef = useRef<(HTMLDivElement | null)[]>([]);
  const finalWrapperRef = useRef<HTMLDivElement | null>(null);
  const preloaderContainerRef = useRef<HTMLDivElement | null>(null);

  // UI REFS
  const heroHeadingRef = useRef(null);
  const heroSubtitleRef = useRef(null);
  const heroBtnRef = useRef(null);
  const previewRef = useRef<HTMLDivElement | null>(null);

  // =========================
  // RESET STATE
  // =========================

  function resetToInitialState() {
    // Reset container
    gsap.set(preloaderContainerRef.current, {
      width: '40rem',
      height: '30rem',
      position: 'relative',
      overflow: 'hidden',
    });

    // Get all wrappers and images
    const images = gsap.utils.toArray<HTMLImageElement>('img', preloaderContainerRef.current);

    // Reset all wrappers to initial state
    gsap.set(imageWrappersRef.current, {
      visibility: 'visible',
      clipPath: 'inset(100% 0 0 0)',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      xPercent: 0,
      yPercent: 0,
      clearProps: 'transform,transformOrigin',
    });

    gsap.set(finalWrapperRef.current, {
      visibility: 'visible',
      clipPath: 'inset(100% 0 0 0)',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      xPercent: 0,
      yPercent: 0,
      clearProps: 'transform,transformOrigin',
    });

    // Reset all images with initial zoom
    gsap.set(images, {
      scale: INITIAL_ZOOM,
      transformOrigin: 'center center',
      clearProps: 'width,height',
    });
  }

  // =========================
  // ANIMATION
  // =========================
  const runAnimation = () => {
    tlRef.current?.kill();
    resetToInitialState();

    const tl: gsap.core.Timeline = gsap.timeline({
      ease: 'circ.out',
    });
    tlRef.current = tl;

    tl.add(() => {
      lenis?.stop();
    }, 'start');

    // PHASE 1 – IMAGE REVEAL
    imageWrappersRef.current.forEach((wrapper, i) => {
      tl.to(
        wrapper,
        {
          clipPath: 'inset(0% 0 0 0)',
          duration: 0.65,
          ease: 'smoothBlur',
        },
        i === 0 ? 0 : '<0.15'
      );
    });

    // PHASE 2 – FLIP ZOOM
    tl.add('pauseBeforeZoom', '>0.2');

    // PHASE 2: Slower zoom and text animation
    // After the last image is revealed, prepare for the final animation
    tl.add('finalAnimation', 'pauseBeforeZoom');

    tl.add(() => {
      const finalWrapper = preloaderContainerRef.current?.querySelector('#final-image');
      if (finalWrapper) {
        const finalImage = finalWrapper.querySelector('img');
        const state = Flip.getState(finalWrapper);

        gsap.set(preloaderContainerRef.current, {
          overflow: 'visible',
        });

        gsap.set(finalWrapper, {
          top: '50%',
          left: '50%',
          xPercent: -50,
          yPercent: -50,
          width: '100dvw',
          height: '100dvh',
        });

        Flip.from(state, {
          duration: 1.2,
          ease: 'customEase',
          absolute: true,
        });

        gsap.to(finalImage, {
          height: '100%',
          scale: 1,
          duration: 1.2,
          ease: 'customEase',
        });
      }
    }, 'zoom');

    // PHASE 3 – UI
    tl.add('ui', '+=0.3');

    // tl.to(
    //   headerLeftRef.current,
    //   {
    //     opacity: 1,
    //     y: 0,
    //     duration: 0.6,
    //     ease: 'directionalEase',
    //   },
    //   'ui'
    // );

    // tl.to(
    //   headerMiddleRef.current,
    //   {
    //     opacity: 1,
    //     y: 0,
    //     duration: 0.6,
    //     ease: 'directionalEase',
    //   },
    //   'ui+=0.15'
    // );

    // tl.to(
    //   socialLinksRef.current,
    //   {
    //     opacity: 1,
    //     y: 0,
    //     duration: 0.6,
    //     ease: 'directionalEase',
    //   },
    //   'ui+=0.3'
    // );

    // tl.to(
    //   footerRef.current,
    //   {
    //     y: 0,
    //     duration: 0.7,
    //     ease: 'directionalEase',
    //   },
    //   'ui+=0.5'
    // );
    tl.add(() => {
      lenis?.start();
    }, 'ui+=0.7');
  };

  // =========================
  // GSAP LIFECYCLE (AUTO CLEAN)
  // =========================
  useGSAP(
    () => {
      runAnimation();
    },
    { dependencies: [lenis], scope: scopeRef }
  );

  return (
    <>
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
                <div ref={heroBtnRef}>
                  <UIButton color="secondary">Explore Our Drones</UIButton>
                </div>
              </div>

              {/* <div ref={previewRef} className={s.home__hero_preview}>
        <Image src="/images/hero-preview.avif" alt="" width={296} height={160} />
        <div className={s.hero__preview_txt}>View new drone 2025</div>
      </div> */}
            </div>
          </div>
          <div className={`${s.about__main} container grid grid-cols-12`}>
            <div className={`${s.about__main_subtitle} txt-med`}>ABOUT OUR DRONE</div>
            <div className={s.about__main_content}>
              <h4 className={`${s.about__main_title} txt-light`}>What is Our Drone?</h4>
              <p className={`${s.about__main_txt} txt-light`}>
                Our drones are designed for professionals, hobbyists, and adventurers alike. Whether
                you need stunning aerial photography, precision mapping, or high-speed racing, our
                advanced drones deliver cutting-edge performance with ease.
              </p>
            </div>
          </div>
          <div style={{ width: '100%', height: '80vh' }}></div>

          {/* BACKGROUND */}
          <div className={s.home__hero_bg}>
            <div ref={preloaderContainerRef} className={s.preloader__container}>
              {HERO_BG.map((image, i) => (
                <div
                  key={i}
                  ref={(el) => {
                    imageWrappersRef.current[i] = el;
                  }}
                  className={s.image__wrapper}
                  id={i == HERO_BG.length - 1 ? 'final-image' : ''}
                >
                  <Image src={image.src} alt="" width={2880} height={1700} priority={i === 0} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* CONTENT */}

        <div className={s.home__about_model}>
          <div className={s.about__model_wrap}>
            <Canvas shadows camera={{ position: [0, 5, 6], fov: 25, near: 0.1, far: 100 }}>
              <Suspense fallback={null}>
                <OrbitControls
                  minDistance={6}
                  maxDistance={10}
                  enableZoom={false}
                  minPolarAngle={1.3}
                  maxPolarAngle={Math.PI / 2}
                  enablePan={false}
                />
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
    </>
  );
};

export default Hero;
