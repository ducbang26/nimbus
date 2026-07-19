import { useEffect, useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';

import Container from '@Components/Container';
import Fade from '@Components/FadeAnim';
import { BLACK_HEADER_PAGES, EPagePaths, NAVIGATION_PAGES } from '@Constants/index';
import Cart from '@Icons/Cart';
import Search from '@Icons/Search';
import User from '@Icons/User';
import { clsx } from 'clsx';
import { gsap } from 'gsap';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import s from './styles.module.scss';

const Header = (): React.ReactElement => {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const cart = useSelector((state: any) => state.cart);

  const isBlackHeader = useMemo(
    () => BLACK_HEADER_PAGES.includes(('/' + pathname.split('/')[1]) as EPagePaths),
    [pathname]
  );

  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;

    lastScrollY.current = window.scrollY;
    gsap.set(line, { height: window.scrollY < 20 ? '2.4rem' : '0px' });

    let rafId: number;

    const handleScroll = (): void => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const isAtTop = window.scrollY < 20;

        if (isAtTop) {
          gsap.to(line, {
            height: '2.4rem',
            duration: 0.3,
            ease: 'power2.out',
            overwrite: true,
          });
        } else {
          gsap.killTweensOf(line);
          gsap.set(line, { height: '0px' });
        }

        lastScrollY.current = window.scrollY;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return (): void => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
      gsap.killTweensOf(line);
    };
  }, [pathname, isBlackHeader]);

  return (
    <header ref={headerRef} className={clsx(s.header, isBlackHeader && s.header__black)}>
      <div
        ref={lineRef}
        className={clsx(s.header__line, isBlackHeader && s.header__line__black)}
      ></div>
      <Container>
        <Fade direction="top" from="0px" delayTrigger={1.5}>
          <div style={{ opacity: 0 }} className={s.header__main}>
            <div className={`${s.header__logo} ${s.txt_med}`}>
              <Link href="/">NIMBUS AIR</Link>
            </div>
            <nav className={s.main_nav}>
              <ul className={s.main__nav_list}>
                {NAVIGATION_PAGES.map((page) => (
                  <li key={page.href} className={s.main__nav_item}>
                    <Link className={clsx(s.hover_un)} href={page.href}>
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={s.header__icons}>
              <Link className={s.header__icons_item} href="#" aria-label="Search">
                <Search />
              </Link>
              <Link className={s.header__icons_item} href="#" aria-label="User">
                <User />
              </Link>
              <Link className={s.header__icons_item} href={EPagePaths.CART} aria-label="Cart">
                <Cart />
                {cart.totalItems > 0 ? <span className={s.cart_total}>{cart.totalItems}</span> : ''}
              </Link>
            </div>
          </div>
        </Fade>
      </Container>
    </header>
  );
};

export default Header;
