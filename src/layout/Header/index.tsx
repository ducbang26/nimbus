import { useMemo } from 'react';
import Container from '@Components/Container';
import { BLACK_HEADER_PAGES, EPagePaths, NAVIGATION_PAGES } from '@Constants/index';
import Cart from '@Icons/Cart';
import Search from '@Icons/Search';
import User from '@Icons/User';
import { clsx } from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import s from './styles.module.scss';
import Fade from '@Components/FadeAnim';

const Header = (): React.ReactElement => {
  const pathname = usePathname();

  const isBlackHeader = useMemo(
    () => BLACK_HEADER_PAGES.includes(('/' + pathname.split('/')[1]) as EPagePaths),
    [pathname]
  );

  return (
    <header className={clsx(s.header, isBlackHeader && s.header__black)}>
      <div className={clsx(s.header__line, isBlackHeader && s.header__line__black)}></div>
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
                    <Link href={page.href}>{page.label}</Link>
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
