import React from 'react';
import ContactPageForm from '@Modules/ContactPage/Form';
import ContactPageHeader from '@Modules/ContactPage/Header';
import Image from 'next/image';

import s from './styles.module.scss';

const CartPage = () : React.ReactElement => {
  return (
    <main>
      <div className="container">
        <ContactPageHeader />
        <ContactPageForm />
      </div>
      <Image
        className={s.contact_footerImage}
        src="/images/hero-bg.webp"
        alt=""
        height="160"
        width="296"
      />
    </main>
  );
};

export default CartPage;
