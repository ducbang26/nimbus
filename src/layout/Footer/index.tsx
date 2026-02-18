import React from 'react';

import Arrow from '@Icons/Arrow';
import BrandLogo from '@Icons/BrandLogo';

import s from './styles.module.scss';

const Footer = (): React.ReactElement => {
  return (
    <footer className={s.footer}>
      <div className={`${s.footer__main} grid grid-cols-12`}>
        <div className={s.footer__contact_info}>
          <h3 className={`${s.footer__heading} txt-light`}>NIMBUS AIR</h3>
          <p className={`${s.footer__address} txt-light`}>
            000 Park Avenue. <br /> New York, NY10022
            <br />
            (+84) 774 764 910
          </p>
        </div>
        <nav className={`${s.footer__nav} ${s.footer__nav__pages}`}>
          <ul className={s.footer__list}>
            <li className={`${s.footer__item} txt-light`}>
              <a href="#" className={s.footer__link}>
                Shop
              </a>
            </li>
            <li className={`${s.footer__item} txt-light`}>
              <a href="#" className={s.footer__link}>
                Model
              </a>
            </li>
            <li className={`${s.footer__item} txt-light`}>
              <a href="#" className={s.footer__link}>
                About
              </a>
            </li>
            <li className={`${s.footer__item} txt-light`}>
              <a href="#" className={s.footer__link}>
                Contact
              </a>
            </li>
            <li className={`${s.footer__item} txt-light`}>
              <a href="#" className={s.footer__link}>
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <nav className={`${s.footer__nav} ${s.footer__nav__social}`}>
          <ul className={s.footer__list}>
            <li className={`${s.footer__item} txt-light`}>
              <a href="#" className={s.footer__link}>
                Facebook
              </a>
            </li>
            <li className={`${s.footer__item} txt-light`}>
              <a href="#" className={s.footer__link}>
                Instagram
              </a>
            </li>
            <li className={`${s.footer__item} txt-light`}>
              <a href="#" className={s.footer__link}>
                Youtube
              </a>
            </li>
          </ul>
        </nav>
        <nav className={`${s.footer__nav} ${s.footer__nav__external}`}>
          <ul className={s.footer__list}>
            <li className={s.footer__item}>
              <a href="#" className={`${s.footer__link} ${s.footer__link__external}`}>
                <div className={`txt-regular ${s.link__external_text}`}>Google Play</div>
                <span className={s.footer__link_icon}>
                  <Arrow />
                </span>
              </a>
            </li>
            <li className={s.footer__item}>
              <a href="#" className={`${s.footer__link} ${s.footer__link__external}`}>
                <div className={`txt-regular ${s.link__external_text}`}>App Store</div>
                <span className={s.footer__link_icon}>
                  <Arrow />
                </span>
              </a>
            </li>
            <li className={s.footer__item}>
              <a href="#" className={`${s.footer__link} ${s.footer__link__external}`}>
                <div className={`txt-regular ${s.link__external_text}`}>Help Center</div>
                <span className={s.footer__link_icon}>
                  <Arrow />
                </span>
              </a>
            </li>
          </ul>
        </nav>

        <div className={s.footer__newsletter}>
          <h3 className={`${s.footer__newsletter_heading} txt-regular`}>
            Get the latest drone news and updates
          </h3>
          <form className={s.footer__form}>
            <input type="email" className={s.footer__input} placeholder="Email" />
            <button type="submit" className={s.footer__submit_button}>
              <Arrow />
            </button>
          </form>
        </div>
      </div>

      <div className={s.footer__brand_logo}>
        <BrandLogo />
      </div>

      <div className={s.footer__bottom}>
        <div className={s.footer__legal}>
          <a href="#" className={`${s.footer__link} ${s.footer__link__legal}`}>
            Privacy Policy
          </a>
          <span className={s.footer__separator}>|</span>
          <a href="#" className={`${s.footer__link} ${s.footer__link__legal}`}>
            Terms of Service
          </a>
        </div>
        <div className={s.footer__credits}>
          <span className={s.footer__design}>Design by Wyn and Mason</span>
          <span className={s.footer__copyright}>NimbusAir2025</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
