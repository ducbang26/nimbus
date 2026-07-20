import React from 'react';
import { useDispatch, useSelector } from 'react-redux';



import { closeNav } from '@Store/slices/navSlice';
import { RootState } from '@Store/store';
import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import gsap from 'gsap';
import Link from 'next/link';



import s from '../styles.module.scss';

















type NavItemProps = {
  link: string;
  delay?: number;
  label: string;
};

const NavItem: React.FC<NavItemProps> = ({ link, delay, label }): React.ReactElement => {
  const linkRef = React.useRef<HTMLAnchorElement>(null);
  const isNavOpen = useSelector((state: RootState) => state.nav.isNavOpen);
  const dispatch = useDispatch();

  useGSAP(() => {
    if (isNavOpen) {
      gsap.to(linkRef.current, {
        opacity: 1,
        y: 0,
        ease: 'power4.out',
        delay: delay || 0,
      });
    } else {
      gsap.to(linkRef.current, {
        opacity: 0,
        y: -10,
        ease: 'power4.out',
        duration: 0.05,
      });
    }
  }, [linkRef, isNavOpen]);

  return (
    <Link
      className={clsx(s.hover_un, s.mobileNav_list_item)}
      href={link}
      onClick={() => dispatch(closeNav())}
      ref={linkRef}
    >
      {label}
    </Link>
  );
};

export default NavItem;
