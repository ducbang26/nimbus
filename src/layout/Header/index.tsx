import Cart from '@Icons/Cart';
import Search from '@Icons/Search';
import User from '@Icons/User';
import s from './styles.module.scss';
import Container from '@Components/Container';
import Link from 'next/link';
import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';
import { BLACK_HEADER_PAGES, EPagePaths, NAVIGATION_PAGES } from '@Constants/index';
import { useMemo } from 'react';

const Header = () => {
  const pathname = usePathname();

  const isBlackHeader = useMemo(
    () => BLACK_HEADER_PAGES.includes(pathname as EPagePaths),
    [pathname]
  );

  return (
    <header className={clsx(s.header, isBlackHeader && s.header__black)}>
      <div className={clsx(s.header__line, isBlackHeader && s.header__line__black)}></div>
      <Container>
        <div className={s.header__main}>
          <div className={`${s.header__logo} ${s.txt_med}`}>
            <Link href="/">NIMBUS AIR</Link>
          </div>
          <nav className={s.main_nav}>
            <ul className={s.main__nav_list}>
              {NAVIGATION_PAGES.map((page) => (
                <li className={s.main__nav_item} key={page.href}>
                  <Link href={page.href}>{page.label}</Link>
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
            <Link className={s.header__icons_item} href="#" aria-label="Cart">
              <Cart />
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
