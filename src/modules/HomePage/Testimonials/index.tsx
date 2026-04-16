import React from 'react';
import { useLayoutEffect, useRef } from 'react';

import Container from '@Components/Container';
import { IAnimationElement } from '@Types/common';
import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import s from './styles.module.scss';

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Blind = {
  left: SVGRectElement;
  right: SVGRectElement;
  x: number;
  w: number;
};

type BlindsSet = Blind[];

const BLIND_COUNT = 6;
const SVG_NS = 'http://www.w3.org/2000/svg';

const Testimonials = (): React.ReactElement => {
  const containerRef = useRef<IAnimationElement>(null);
  const scrollBarTrackRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const blindsSetsRef = useRef<BlindsSet[]>([]);
  const masterRef = useRef<gsap.core.Timeline | null>(null);
  const mediaRef = useRef<gsap.MatchMedia | null>(null);

  const createBlinds = (group: SVGGElement, isFirstLayer: boolean, vbWidth: number): BlindsSet => {
    group.innerHTML = '';

    const blindWidth = vbWidth / BLIND_COUNT;
    let currentX = 0;

    const blinds: BlindsSet = [];

    for (let i = 0; i < BLIND_COUNT; i++) {
      const centerX = currentX + blindWidth / 2;

      const left = document.createElementNS(SVG_NS, 'rect');
      const right = document.createElementNS(SVG_NS, 'rect');

      const initWidth = isFirstLayer ? blindWidth / 2 + 0.1 : 0;

      [left, right].forEach((r) => {
        r.setAttribute('y', '0');
        r.setAttribute('height', '100');
        r.setAttribute('width', initWidth.toString());
        r.setAttribute('fill', 'white');
        r.setAttribute('shape-rendering', 'crispEdges');
      });

      if (isFirstLayer) {
        left.setAttribute('x', (centerX - blindWidth / 2).toString());
        right.setAttribute('x', centerX.toString());
      } else {
        left.setAttribute('x', centerX.toString());
        right.setAttribute('x', centerX.toString());
      }

      group.appendChild(left);
      group.appendChild(right);

      blinds.push({
        left,
        right,
        x: centerX,
        w: blindWidth / 2,
      });

      currentX += blindWidth;
    }

    return blinds;
  };

  /* =========================
     Animate blinds
  ========================= */
  const openBlinds = (blinds: BlindsSet): gsap.core.Tween => {
    const rects = blinds.flatMap((b) => [b.left, b.right]);

    return gsap.to(rects, {
      attr: {
        x: (index: number) => {
          const blind = blinds[Math.floor(index / 2)];
          return index % 2 === 0 ? blind.x - blind.w : blind.x;
        },
        width: (index: number) => {
          const blind = blinds[Math.floor(index / 2)];
          return blind.w + 0.05;
        },
      },
      ease: 'none',
      stagger: { each: 0.3, from: 'start' },
    });
  };

  /* =========================
     Build master timeline
  ========================= */
  const buildTimeline = (): void => {
    masterRef.current?.kill();

    const texts = gsap.utils.toArray<HTMLElement>('.txt');
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 2,
        invalidateOnRefresh: true,
      },
    });

    gsap.set(texts, {
      clipPath: 'inset(0% 0% 100% 0%)',
      y: 40,
      opacity: 0,
    });

    if (texts[0]) {
      gsap.set(texts[0], {
        clipPath: 'inset(0% 0% 0% 0%)',
        y: 0,
        opacity: 1,
      });
    }

    blindsSetsRef.current.forEach((blinds, i) => {
      if (i === 0) return;

      if (texts[i - 1]) {
        timeline.to(texts[i - 1], {
          clipPath: 'inset(0% 0% 100% 0%)',
          y: -40,
          opacity: 0,
          duration: 0.8,
        });
      }

      timeline.add(openBlinds(blinds), '-=0.3');

      if (texts[i]) {
        timeline.to(
          texts[i],
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            y: 0,
            opacity: 1,
            duration: 0.8,
          },
          '-=0.5'
        );
      }

      timeline.to({}, { duration: 1 });
    });

    masterRef.current = timeline;
  };

  /* =========================
     Layout / Resize
  ========================= */
  const updateLayout = (): void => {
    if (!containerRef.current) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const vbWidth = (width / height) * 100;
    const vbHeight = 100;

    const layers = containerRef.current.querySelectorAll<SVGSVGElement>('.layer');

    blindsSetsRef.current = [];

    layers.forEach((svg, index) => {
      svg.setAttribute('viewBox', `0 0 ${vbWidth} ${vbHeight}`);

      const maskRect = svg.querySelector<SVGRectElement>('mask rect');
      maskRect?.setAttribute('width', vbWidth.toString());
      maskRect?.setAttribute('height', vbHeight.toString());

      const img = svg.querySelector<SVGImageElement>('image');
      if (img) {
        img.setAttribute('width', vbWidth.toString());
        img.setAttribute('height', vbHeight.toString());
        img.setAttribute('preserveAspectRatio', 'xMidYMid slice');
      }

      const blindGroup = svg.querySelector<SVGGElement>('g[id^="blinds"]');
      if (blindGroup) {
        blindsSetsRef.current.push(createBlinds(blindGroup, index === 0, vbWidth));
      }
    });

    buildTimeline();
  };

  /* =========================
     Init
  ========================= */
  useLayoutEffect(() => {
    updateLayout();

    let resizeId: number | null = null;

    const onResize = (): void => {
      if (resizeId) window.clearTimeout(resizeId);
      resizeId = window.setTimeout(() => {
        updateLayout();
        ScrollTrigger.refresh();
      }, 250);
    };

    window.addEventListener('resize', onResize);

    return (): void => {
      window.removeEventListener('resize', onResize);
      masterRef.current?.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      mediaRef.current?.revert();
    };
  }, []);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      });

      tl.to(scrollBarTrackRef.current, {
        width: '100%',
      });
    },
    { scope: containerRef }
  );

  return (
    <section className={`${s.testimonials} testimonials`} ref={containerRef}>
      <Container className={s.testimonials_wrap}>
        <div className={s.testimonials_header}>
          <h5 className={`${s.testimonials_title} txt-light`}>Trusted by Pilots Worldwide</h5>
          <p className={s.testimonials_desc}>See what our users say about their experience.</p>
        </div>

        <div className="grid">
          <div className={s.bar}>
            <div className={s.bar_thumb}></div>
            <div className={s.bar_track} ref={scrollBarTrackRef}></div>
          </div>
        </div>

        <div className={`${s.testimonials_slider} grid`}>
          <div className={s.testimonials_thumbnail}>
            <div className={`${s.testimonials_thumbnail_list} grid-1-1`}>
              <svg
                className={clsx(s.thumbnail_img, 'layer')}
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <defs>
                  <mask id="mask1" maskUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="100" height="100" fill="black" />
                    <g id="blinds1"></g>
                  </mask>
                </defs>
                <image
                  href="/images/testi-1.png"
                  x="0"
                  y="0"
                  width="762"
                  height="550"
                  preserveAspectRatio="xMidYMid slice"
                  mask="url(#mask1)"
                />
              </svg>
              <svg
                className={clsx(s.thumbnail_img, 'layer')}
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <defs>
                  <mask id="mask2" maskUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="100" height="100" fill="black" />
                    <g id="blinds2"></g>
                  </mask>
                </defs>
                <image
                  href="/images/testi-2.png"
                  x="0"
                  y="0"
                  width="762"
                  height="550"
                  preserveAspectRatio="xMidYMid slice"
                  mask="url(#mask2)"
                />
              </svg>
              <svg
                className={clsx(s.thumbnail_img, 'layer')}
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <defs>
                  <mask id="mask3" maskUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="100" height="100" fill="black" />
                    <g id="blinds3"></g>
                  </mask>
                </defs>
                <image
                  href="/images/testi-3.png"
                  x="0"
                  y="0"
                  width="762"
                  height="550"
                  preserveAspectRatio="xMidYMid slice"
                  mask="url(#mask3)"
                />
              </svg>
              {/* <div className={s.thumbnail_img}>
                <Image
                  width={762}
                  height={550}
                  sizes=""
                  src="/images/testi-1.png"
                  alt="connection-image"
                />
              </div>
              <div className={s.thumbnail_img}>
                <Image
                  width={762}
                  height={550}
                  sizes=""
                  src="/images/testi-1.png"
                  alt="connection-image"
                />
              </div>
              <div className={s.thumbnail_img}>
                <Image
                  width={762}
                  height={550}
                  sizes=""
                  src="/images/testi-1.png"
                  alt="connection-image"
                />
              </div> */}
            </div>
          </div>
          <div className={s.testimonials_slider_content}>
            <div ref={textRef} className={`grid-1-1`}>
              <p className={clsx(s.testimonials_slider_text, 'txt')}>
                &quot;The best drone I’ve ever used—smooth flight and incredible footage!&quot;
              </p>
              <p className={clsx(s.testimonials_slider_text, 'txt')}>
                &quot;The best drone I’ve ever used—smooth flight and incredible footage!&quot;
              </p>
              <p className={clsx(s.testimonials_slider_text, 'txt')}>
                &quot;The best drone I’ve ever used—smooth flight and incredible footage!&quot;
              </p>
            </div>
            <div className={s.testimonials_slider_info}>
              <div className={s.line}></div>
              <div className={s.info_inner}>
                <div className={`grid-1-1`}>
                  <div className={s.info_avt}> </div>
                  <div className={s.info_avt}> </div>
                  <div className={s.info_avt}> </div>
                </div>
                <div className={`grid-1-1`}>
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
