import React from 'react';

import ContactPageForm from '@Modules/ContactPage/Form';
import ContactPageHeader from '@Modules/ContactPage/Header';
import Image from 'next/image';

import s from './styles.module.scss';

const ContactPage = (): React.ReactElement => {
  return (
    <main>
      <div className="container">
        <ContactPageHeader />
        <ContactPageForm />
      </div>
      <Image
        className={s.contact_footerImage}
        src="/images/contact.png"
        alt=""
        height="1800"
        width="1800"
      />
    </main>
  );
};

export default ContactPage;
