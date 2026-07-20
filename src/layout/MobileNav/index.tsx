import React from 'react';
import { useSelector } from 'react-redux';

import { NAVIGATION_PAGES } from '@Constants/index';
import { RootState } from '@Store/store';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import NavItem from './NavItem';
import s from './styles.module.scss';

const MobileNav = (): React.ReactElement => {
  const [eventTrue, setEventTrue] = React.useState(false);
  const isNavOpen = useSelector((state: RootState) => state.nav.isNavOpen);

  const navRef = React.useRef<HTMLDivElement>(null);
  const btnRef = React.useRef<HTMLButtonElement>(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      ease: 'power4.out',
    });
    if (isNavOpen) {
      tl.to(navRef.current, {
        duration: 0.5,
        ease: 'power4.out',
        backdropFilter: 'blur(80px)',
      }).to(btnRef.current, {
        duration: 0.2,
        y: 0,
        delay: 0.3,
        opacity: 1,
        onComplete: () => {
          setTimeout(() => {
            setEventTrue(true);
          }, 200);
        },
      });
    } else {
      tl.to(btnRef.current, {
        duration: 0.1,
        y: -10,
        opacity: 0,
      }).to(navRef.current, {
        duration: 0.3,
        backdropFilter: 'blur(0px)',
        onComplete: () => {
          setEventTrue(false);
        },
      });
    }
  }, [isNavOpen, navRef, btnRef]);

  return (
    <div className={`${s.mobileNav} ${eventTrue ? s.eventTrue : ''}`} ref={navRef}>
      <div className={`${s.mobileNav_list}`}>
        {NAVIGATION_PAGES.map((item, index) => (
          <NavItem key={item.href} delay={index / 10} link={item.href} label={item.label} />
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
