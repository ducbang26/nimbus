import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { NAVIGATION_PAGES } from '@Constants/index';
import { closeNav, setDisableBtn } from '@Store/slices/navSlice';
import { RootState } from '@Store/store';
import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import gsap from 'gsap';
import Link from 'next/link';

import s from './styles.module.scss';

const MobileNav = (): React.ReactElement => {
  const [eventTrue, setEventTrue] = React.useState(false);
  const dispatch = useDispatch();
  const isNavOpen = useSelector((state: RootState) => state.nav.isNavOpen);

  const navRef = React.useRef<HTMLDivElement>(null);
  const linkRef = React.useRef<(HTMLAnchorElement | null)[]>([]);

  useGSAP(() => {
    const tl = gsap.timeline({
      ease: 'power4.out',
    });
    if (isNavOpen) {
      tl.to(navRef.current, {
        duration: 0.5,
        ease: 'power4.out',
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      }).to(linkRef.current, {
        y: '0%',
        opacity: 1,
        filter: 'blur(0px)',
        ease: 'power3.out',
        stagger: 0.05,
      }, '-=0.6');
    } else {
      tl.to(linkRef.current, {
        y: '40%',
        opacity: 0,
        filter: 'blur(20px)',
        ease: 'power3.out',
        stagger: 0.05,
      })
      .to(navRef.current, {
        duration: 0.3,
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        onComplete: () => {
          setEventTrue(false);
          isNavOpen && dispatch(setDisableBtn());
        },
      }, '-=0.6');
    }
  }, [isNavOpen, navRef]);

  return (
    <div className={`${s.mobileNav} ${eventTrue ? s.eventTrue : ''}`} ref={navRef}>
      <ul className={`${s.mobileNav_list}`}>
        {NAVIGATION_PAGES.map((item, index) => (
          <li key={item.href}>
            <Link
              className={clsx(s.hover_un, s.mobileNav_list_item)}
              href={item.href}
              onClick={() => dispatch(closeNav())}
              ref={(el) => {
                linkRef.current[index] = el;
              }}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNav;
