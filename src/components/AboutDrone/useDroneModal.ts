import { RefObject } from 'react';

import { useLenisControl } from '@Layouts/Lenis';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import * as THREE from 'three';

import { useDroneGUI } from './useDroneGUI';

type Props = {
  modalRef: RefObject<THREE.Group | null>;
  width: { value: number };
};

gsap.registerPlugin(ScrollTrigger);

export const useDroneModal = ({ modalRef, width }: Props): void => {
  const rpsNode = width.value / 550;
  // useDroneGUI({ modalRef });
  const lenis = useLenisControl();

  useGSAP(
    () => {
      if (!modalRef.current) return;

      gsap.set(modalRef.current.rotation, { x: -0.36, y: 1, z: 0 });
      gsap.set(modalRef.current.position, {
        x: 0,
        y: -7,
        z: 0,
      });

      const tl = gsap.timeline();

      tl.to(modalRef.current.position, {
        x: 0.23,
        y: -2.21,
        z: 0.42,
        duration: 2,
        ease: 'power3.inOut',
      }).to(
        modalRef.current.rotation,
        {
          x: -0.36,
          y: -0.3,
          z: 0.1,
          duration: 2,
          ease: 'power3.inOut',
        },
        '-=1.85'
      );
      tl.add(() => {
        lenis?.start();
      }, '+=0.1');
    },
    { dependencies: [modalRef.current] }
  );

  useGSAP(
    () => {
      if (!modalRef.current) return;

      const tl = gsap.timeline({
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '.home-hero',
          start: 'top top',
          end: '70% 30%',
          scrub: true,
        },
      });

      tl.to(modalRef.current.rotation, {
        x: -0.35,
        y: 0,
        z: 0,
      });
      tl.to(
        modalRef.current.position,
        {
          x: 0,
          y: -1.6,
          z: 0,
        },
        '<'
      );
    },
    { dependencies: [modalRef.current] }
  );
};
