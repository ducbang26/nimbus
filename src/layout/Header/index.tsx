import { useEffect, useMemo, useRef } from 'react';

import Container from '@Components/Container';
import { BLACK_HEADER_PAGES, EPagePaths, NAVIGATION_PAGES } from '@Constants/index';
import Cart from '@Icons/Cart';
import Search from '@Icons/Search';
import User from '@Icons/User';
import { rem } from '@Utils/rem';
import { clsx } from 'clsx';
import { gsap } from 'gsap';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Fade from '@Components/FadeAnim';

import s from './styles.module.scss';

const Header = (): React.ReactElement => {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  const isBlackHeader = useMemo(
    () => BLACK_HEADER_PAGES.includes(('/' + pathname.split('/')[1]) as EPagePaths),
    [pathname]
  );

  useEffect(() => {
    let ticking = false;
    const line = lineRef.current;
    const main = mainRef.current;

    const handleScroll = (): void => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
            // scrolling up
            gsap.to(headerRef.current, {
              mixBlendMode: 'normal',
              color: isBlackHeader ? 'var(--neutral-950)' : 'var(--white)',
              duration: 0.3,
              ease: 'power2.out',
            });
            gsap.to(line, {
              height: rem(4.8),
              duration: 0.3,
              ease: 'power2.out',
            });
            gsap.to(main, {
              y: rem(-5.8),
              duration: 0.3,
              ease: 'power2.out',
            });
          } else if (currentScrollY < lastScrollY.current) {
            // scrolling down
            gsap.to(headerRef.current, {
              mixBlendMode: 'difference',
              color: 'var(--white)',
              duration: 0.3,
              ease: 'power2.out',
            });
            gsap.to(line, {
              height: rem(2.4),
              duration: 0.3,
              ease: 'power2.out',
            });
            gsap.to(main, {
              y: 0,
              duration: 0.3,
              ease: 'power2.out',
            });
          }

          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname, isBlackHeader]);

  return (
    <header ref={headerRef} className={clsx(s.header, isBlackHeader && s.header__black)}>
      <div
        ref={lineRef}
        className={clsx(s.header__line, isBlackHeader && s.header__line__black)}
      ></div>
      <Container>
        <div className={s.header__main}>
          <Fade direction="top" from="10px" delayTrigger={3.3}>
            <div style={{ opacity: 0 }} className={`${s.header__logo} ${s.txt_med}`}>
              <Link href="/">NIMBUS AIR</Link>
            </div>
          </Fade>
          <nav className={s.main_nav}>
            <ul className={s.main__nav_list}>
              {NAVIGATION_PAGES.map((page, index) => (
                <Fade key={page.href} direction="top" from="10px" delayTrigger={3.4 + index * 0.1}>
                  <li style={{ opacity: 0 }} className={s.main__nav_item}>
                    <Link className={clsx(s.hover_un)} href={page.href}>{page.label}</Link>
                  </li>
                </Fade>
              ))}
            </ul>
          </nav>
          <div className={s.header__icons}>
            <Fade direction="top" from="10px" delayTrigger={3.3}>
              <Link
                style={{ opacity: 0 }}
                className={s.header__icons_item}
                href="#"
                aria-label="Search"
              >
                <Search />
              </Link>
            </Fade>
            <Fade direction="top" from="10px" delayTrigger={3.3}>
              <Link
                style={{ opacity: 0 }}
                className={s.header__icons_item}
                href="#"
                aria-label="User"
              >
                <User />
              </Link>
            </Fade>
            <Fade direction="top" from="10px" delayTrigger={3.3}>
              <Link
                style={{ opacity: 0 }}
                className={s.header__icons_item}
                href={EPagePaths.CART}
                aria-label="Cart"
              >
                <Cart />
              </Link>
            </Fade>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
