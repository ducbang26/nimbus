import React, { useEffect, useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { CustomEase, Flip } from 'gsap/all';
import { useGSAP } from '@gsap/react';

import UIButton from '@Components/Button';
import s from './styles.module.scss';
import { useLenis } from 'lenis/react';

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
  { src: '/images/cta-image.png' },
  { src: '/images/home-why-bg.webp' },
  { src: '/images/cta-image.png' },
  { src: '/images/ticker-bg.png' },
  { src: '/images/hero-bg.webp' },
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
  const headerLeftRef = useRef(null);
  const headerMiddleRef = useRef(null);
  const socialLinksRef = useRef(null);
  const footerRef = useRef(null);

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

    const tl: gsap.core.Timeline = gsap.timeline();
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
    {dependencies: [lenis], scope: scopeRef }
  );

  return (
    <section ref={scopeRef} className={s.home__hero}>
      {/* CONTENT */}
      <div className={`${s.home__hero_main} container`}>
        <div className="grid grid-cols-12">
          <h3 ref={headerLeftRef} className={`${s.home__hero_heading} txt-light`}>
            Revolutionize <br /> Your Perspective
          </h3>
        </div>

        <div className={`${s.home__hero_bottom} grid grid-cols-12`}>
          <div ref={headerMiddleRef} className={`${s.home__hero_cta} txt-light`}>
            <p className={s.hero__cta_txt}>Experience the Future of Aerial Technology</p>
            <UIButton color="secondary">Explore Our Drones</UIButton>
          </div>

          <div ref={socialLinksRef} className={s.home__hero_preview}>
            <Image src="/images/hero-preview.avif" alt="" width={296} height={160} />
            <div className={s.hero__preview_txt}>View new drone 2025</div>
          </div>
        </div>
      </div>

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
    </section>
  );
};

export default Hero;
