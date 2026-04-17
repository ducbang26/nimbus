'use client';

import React, { useRef } from 'react';

import Container from '@Components/Container';
import { IAnimationElement } from '@Types/common';
import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

import s from './styles.module.scss';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = (): React.ReactElement => {
  const containerRef = useRef<IAnimationElement>(null);
  const scrollBarTrackRef = useRef<HTMLDivElement | null>(null);

  /* =========================
     GSAP Scroll Animation
  ========================= */

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const texts = gsap.utils.toArray<HTMLElement>('.txt', containerRef.current);
      const layers = gsap.utils.toArray<HTMLElement>('.layer', containerRef.current);

      /* =========================
       MAIN TIMELINE
    ========================= */
      const mainTL = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      /* Initial states */
      gsap.set(texts, { y: 20, opacity: 0 });
      gsap.set(layers, { clipPath: 'inset(0% 0% 100% 0%)' });

      if (texts[0]) gsap.set(texts[0], { y: 0, opacity: 1 });
      if (layers[0]) gsap.set(layers[0], { clipPath: 'inset(0% 0% 0% 0%)' });

      layers.forEach((layer, i) => {
        if (i === 0) return;

        mainTL.to(layer, {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 0.8,
          ease: 'power2.inOut',
        });

        if (texts[i - 1]) {
          mainTL.to(
            texts[i - 1],
            {
              y: -20,
              opacity: 0,
              duration: 0.6,
              ease: 'power2.inOut',
            },
            '<'
          );
        }

        if (texts[i]) {
          mainTL.fromTo(
            texts[i],
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: 'power2.inOut',
            },
            '-=0.4'
          );
        }
      });

      /* =========================
       PROGRESS BAR
    ========================= */
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        onUpdate: (self) => {
          if (!scrollBarTrackRef.current) return;
          scrollBarTrackRef.current.style.width = `${self.progress * 100}%`;
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className={clsx(s.testimonials, 'testimonials')}>
      <Container className={s.testimonials_wrap}>
        {/* Header */}
        <div className={s.testimonials_header}>
          <h5 className={clsx(s.testimonials_title, 'txt-light')}>Trusted by Pilots Worldwide</h5>
          <p className={s.testimonials_desc}>See what our users say about their experience.</p>
        </div>

        {/* Progress bar */}
        <div className="grid">
          <div className={s.bar}>
            <div className={s.bar_thumb} />
            <div className={s.bar_track} ref={scrollBarTrackRef} />
          </div>
        </div>

        {/* Content */}
        <div className={clsx(s.testimonials_slider, 'grid')}>
          {/* Thumbnails */}
          <div className={s.testimonials_thumbnail}>
            <div className={clsx(s.testimonials_thumbnail_list, 'grid-1-1')}>
              {['/images/testi-1.png', '/images/testi-2.png', '/images/testi-3.png'].map(
                (src, i) => (
                  <div key={i} className={clsx(s.thumbnail_img, 'layer')}>
                    <Image width={762} height={550} src={src} alt="testimonial-image" />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Text */}
          <div className={s.testimonials_slider_content}>
            <div className="grid-1-1">
              <p className={clsx(s.testimonials_slider_text, 'txt')}>
                “The best drone I’ve ever used—smooth flight and incredible footage! 1”
              </p>
              <p className={clsx(s.testimonials_slider_text, 'txt')}>
                “The best drone I’ve ever used—smooth flight and incredible footage! 2”
              </p>
              <p className={clsx(s.testimonials_slider_text, 'txt')}>
                “The best drone I’ve ever used—smooth flight and incredible footage! 3”
              </p>
            </div>

            <div className={s.testimonials_slider_info}>
              <div className={s.line} />
              <div className={s.info_inner}>
                <div className="grid-1-1">
                  <div className={s.info_avt} />
                  <div className={s.info_avt} />
                  <div className={s.info_avt} />
                </div>
                <div className="grid-1-1">
                  <div className={s.info_name}>David, Photographer</div>
                  <div className={s.info_name}>David, Photographer</div>
                  <div className={s.info_name}>David, Photographer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
