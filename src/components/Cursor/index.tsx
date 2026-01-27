'use client';

import { ReactElement, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import s from './styles.module.scss';

interface ICursor {
  isEnter: boolean;
}

const Cursor = ({ isEnter }: ICursor): ReactElement => {
  const cursorTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    if (!cursor) return;

    if (isEnter) gsap.to(cursor, { opacity: 1 });
  }, [isEnter]);

  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    if (!cursor) return;

    const isTouchDevice = 'ontouchstart' in window;
    if (isTouchDevice) return;

    const pos = { x: 0, y: 0 };
    const vel = { x: 0, y: 0 };
    let targetPos = { x: 0, y: 0 };
    let isHoveringClickable = false;

    const setX = gsap.quickSetter(cursor, 'x', 'px');
    const setY = gsap.quickSetter(cursor, 'y', 'px');
    const setRotation = gsap.quickSetter(cursor, 'rotate', 'deg');
    const setScaleX = gsap.quickSetter(cursor, 'scaleX');
    const setScaleY = gsap.quickSetter(cursor, 'scaleY');

    const getScale = (diffX: number, diffY: number): number => {
      const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
      return Math.min(distance / 100, 0.25);
    };

    const getAngle = (diffX: number, diffY: number): number => {
      return (Math.atan2(diffY, diffX) * 180) / Math.PI;
    };

    const update = (): void => {
      const rotation = getAngle(vel.x, vel.y);
      const scale = getScale(vel.x, vel.y);

      setX(pos.x);
      setY(pos.y);
      setRotation(rotation);

      if (!isHoveringClickable) {
        setScaleX(1 + scale);
        setScaleY(1 - scale);
      }
    };

    const animate = (): void => {
      const speed = 0.35;
      pos.x += (targetPos.x - pos.x) * speed;
      pos.y += (targetPos.y - pos.y) * speed;
      vel.x = targetPos.x - pos.x;
      vel.y = targetPos.y - pos.y;
      update();
      requestAnimationFrame(animate);
    };

    const onMouseMove = (e: MouseEvent): void => {
      targetPos.x = e.clientX;
      targetPos.y = e.clientY;
      update();
    };

    const handleCursorHover = (isHovering: boolean): void => {
      isHoveringClickable = isHovering;
      gsap.to(cursor, {
        scale: isHovering ? 0.5 : 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const hideCursor = (): void => {
      gsap.to(cursor, { opacity: 0, duration: 0.7, ease: 'power2.out' });
    };

    const showCursor = (): void => {
      gsap.to(cursor, { opacity: 1, duration: 0.7, ease: 'power2.out' });
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', hideCursor);
    document.addEventListener('mouseenter', showCursor);

    document.querySelectorAll('a, button, .js-external-link').forEach((element) => {
      element.addEventListener('mouseenter', () => handleCursorHover(true));
      element.addEventListener('mouseleave', () => handleCursorHover(false));
    });

    animate();

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', hideCursor);
      document.removeEventListener('mouseenter', showCursor);
    };
  }, []);

  return (
    <div id="custom-cursor" className={s.cursor}>
      <span className={s.cursor_text} ref={cursorTextRef}>
        View
      </span>
    </div>
  );
};

export default Cursor;
