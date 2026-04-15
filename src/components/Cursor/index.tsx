'use client';

import { ReactElement, useEffect, useRef } from 'react';

import UITypography from '@Components/Typography';
import { ETypography } from '@Components/Typography/constants';
import { rem } from '@Utils/rem';
import { gsap } from 'gsap';

import s from './styles.module.scss';

interface ICursor {
  isEnter: boolean;
}

const Cursor = ({ isEnter }: ICursor): ReactElement => {
  const cursorTextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    if (!cursor) return;

    if (isEnter) gsap.to(cursor, { opacity: 1, yPercent: -50, xPercent: -50 });
  }, [isEnter]);

  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    if (!cursor) return;

    const isTouchDevice = 'ontouchstart' in window;
    if (isTouchDevice) return;

    const pos = { x: 0, y: 0 };
    const vel = { x: 0, y: 0 };
    const targetPos = { x: 0, y: 0 };
    let _isHoveringClickable = false;
    let _hoveringButton: Element | null = null;

    const setX = gsap.quickSetter(cursor, 'x', 'px');
    const setY = gsap.quickSetter(cursor, 'y', 'px');

    const update = (): void => {
      setX(pos.x);
      setY(pos.y);
    };

    const animate = (): void => {
      if (_hoveringButton?.classList.contains('js-button')) {
        const rect = _hoveringButton.getBoundingClientRect();
        targetPos.x = rect.left + rem(1.2);
        targetPos.y = rect.top + rem(1.2);
      }

      const speed = 0.35;
      pos.x += (targetPos.x - pos.x) * speed;
      pos.y += (targetPos.y - pos.y) * speed;
      vel.x = targetPos.x - pos.x;
      vel.y = targetPos.y - pos.y;
      update();
      requestAnimationFrame(animate);
    };

    const onMouseMove = (e: MouseEvent): void => {
      if (!_hoveringButton || !_hoveringButton.classList.contains('js-button')) {
        targetPos.x = e.clientX;
        targetPos.y = e.clientY;
      }
      update();
    };

    const handleCursorHover = (
      isHovering: boolean,
      element?: Element,
      event?: MouseEvent
    ): void => {
      _isHoveringClickable = isHovering;
      _hoveringButton = isHovering ? element || null : null;

      if (!isHovering && event) {
        targetPos.x = event.clientX;
        targetPos.y = event.clientY;
      }

      if (isHovering && element?.classList.contains('js-product-item')) {
        gsap.to(cursor, {
          width: rem(12),
          height: rem(12),
          backgroundColor: '#B0B0B0',
          border: 'none',
          mixBlendMode: 'normal',
          xPercent: -50,
          yPercent: -50,
          left: 0,
          top: 0,
          duration: 0.3,
          ease: 'power2.inOut',
        });
        gsap.to(cursorTextRef.current, { opacity: 1, duration: 0.4 });
      } else {
        gsap.to(cursor, {
          width: rem(0),
          height: rem(0),
          border: 'none',
          duration: 0.3,
          ease: 'power2.inOut',
          xPercent: -50,
          yPercent: -50,
          left: 0,
          top: 0,
        });
        gsap.to(cursorTextRef.current, {
          opacity: 0,
          duration: 0.4,
        });
      }
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

    const attachListeners = (): void => {
      document.querySelectorAll('a, button, .js-external-link').forEach((element) => {
        element.addEventListener('mouseenter', () => handleCursorHover(true, element));
        element.addEventListener('mouseleave', (e) =>
          handleCursorHover(false, undefined, e as MouseEvent)
        );
      });
    };

    attachListeners();

    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    animate();

    return (): void => {
      observer.disconnect();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', hideCursor);
      document.removeEventListener('mouseenter', showCursor);
    };
  }, []);

  return (
    <div id="custom-cursor" className={s.cursor}>
      <UITypography
        tag="span"
        typography={ETypography.TEXT_20_LIGHT}
        ref={cursorTextRef}
        className={s.cursor_text}
      >
        View
      </UITypography>
    </div>
  );
};

export default Cursor;
