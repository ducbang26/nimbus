import { RefObject, useEffect, useMemo } from 'react';

import { useGSAP } from '@gsap/react';
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLenis } from 'lenis/react';
import * as THREE from 'three';

import usePageEffectContext from '../../contexts/pageEffectContext';

type Props = {
  modalRef: RefObject<THREE.Group | null>;
};

gsap.registerPlugin(ScrollTrigger);

export const useDroneModal = ({ modalRef }: Props): void => {
  const lenis = useLenis();
  const { size } = useThree();
  const { isReadyInteractive } = usePageEffectContext();
  // useDroneGUI({ modalRef });

  /* ---------------- Device breakpoint (PIXEL) ---------------- */
  const isMobile = size.width < 768;
  const isTablet = size.width >= 768 && size.width < 1024;

  /* ---------------- Responsive config ---------------- */
  const config = useMemo(() => {
    if (isMobile) {
      return {
        scale: 0.35,
        introPos: { x: 0, y: -5, z: 0 },
        endPos: { x: 0.1, y: -1.5, z: 0 },
      };
    }

    if (isTablet) {
      return {
        scale: 0.5,
        introPos: { x: 0, y: -6, z: 0 },
        endPos: { x: 0.1, y: -1.5, z: 0.3 },
      };
    }

    // Desktop
    return {
      scale: 0.7,
      introPos: { x: 0, y: -7, z: 0 },
      endPos: { x: 0.23, y: -2.21, z: 0.42 },
    };
  }, [isMobile, isTablet]);

  /* ---------------- Intro animation ---------------- */
  useEffect(() => {
    const group = modalRef.current;
    if (!group || !isReadyInteractive) {
      return;
    }
    lenis?.stop();

    gsap.set(group.scale, {
      x: config.scale,
      y: config.scale,
      z: config.scale,
    });

    gsap.set(group.rotation, { x: -0.36, y: 1, z: 0 });
    gsap.set(group.position, config.introPos);

    const tl = gsap.timeline();

    tl.to(group.position, {
      ...config.endPos,
      duration: 2,
      ease: 'power3.inOut',
    }).to(
      group.rotation,
      {
        x: -0.36,
        y: -0.3,
        z: 0.1,
        duration: 2,
        ease: 'power3.inOut',
      },
      '-=1.8'
    );

    tl.add(() => lenis?.start(), '+=0.1');
  }, [config, isReadyInteractive, lenis, modalRef]);

  /* ---------------- Scroll animation ---------------- */
  useGSAP(() => {
    const group = modalRef.current;
    if (!group) return;

    const mm = gsap.matchMedia();

    /* ---------- MOBILE ---------- */
    mm.add('(max-width: 767px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.home-hero',
          start: () => 'top top',
          end: () => `+=${size.height * 0.6}`,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      tl.to(group.rotation, {
        x: -0.3,
        y: 0,
        z: 0,
      }).to(
        group.position,
        {
          x: 0,
          y: -1.1,
          z: 0,
        },
        '<'
      );

      return (): gsap.core.Timeline => tl.kill();
    });

    /* ---------- TABLET ---------- */
    mm.add('(min-width: 768px) and (max-width: 1023px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.home-hero',
          start: () => 'top top',
          end: () => `+=${size.height * 0.7}`,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      tl.to(group.rotation, {
        x: -0.33,
        y: 0,
        z: 0,
      }).to(
        group.position,
        {
          x: 0,
          y: -1.2,
          z: 0,
        },
        '<'
      );

      return (): gsap.core.Timeline => tl.kill();
    });

    /* ---------- DESKTOP ---------- */
    mm.add('(min-width: 1024px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.home-hero',
          start: () => 'top top',
          end: () => `+=${size.height * 0.8}`,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      tl.to(group.rotation, {
        x: -0.35,
        y: 0,
        z: 0,
      }).to(
        group.position,
        {
          x: 0,
          y: -1.6,
          z: 0,
        },
        '<'
      );

      return (): gsap.core.Timeline => tl.kill();
    });

    return (): void => {
      mm.revert();
    };
  }, [isMobile, size.height]);

  /* ---------------- Refresh on resize ---------------- */
  useEffect(() => {
    ScrollTrigger.refresh();
  }, [size.width, size.height]);
};
