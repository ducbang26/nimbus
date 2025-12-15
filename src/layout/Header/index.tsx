import Cart from '@Icons/Cart';
import Search from '@Icons/Search';
import User from '@Icons/User';
import s from './styles.module.scss';
import Container from '@Components/Container';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header__line}></div>
      <Container>
        <div className={s.header__main}>
          <div className={`${s.header__logo} ${s.txt_med}`}>
            <Link href="/">NIMBUS AIR</Link>
          </div>
          <nav className={s.main_nav}>
            <ul className={s.main__nav_list}>
              <li className={s.main__nav_item}>
                <a href="/collections/all">Shop</a>
              </li>
              <li className={s.main__nav_item}>
                <a href="#">Models</a>
              </li>
              <li className={s.main__nav_item}>
                <a href="/pages/about">About us</a>
              </li>
              <li className={s.main__nav_item}>
                <a href="#">Blogs</a>
              </li>
              <li className={s.main__nav_item}>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className={s.header__icons}>
            <a className={s.header__icons_item} href="#" aria-label="Search">
              <Search />
            </a>
            <a className={s.header__icons_item} href="#" aria-label="User">
              <User />
            </a>
            <a className={s.header__icons_item} href="#" aria-label="Cart">
              <Cart />
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
