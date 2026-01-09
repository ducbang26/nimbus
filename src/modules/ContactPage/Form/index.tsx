import React from 'react';
import UIButton from '@Components/Button';
import UITypography from '@Components/Typography';
import { ETypography } from '@Components/Typography/constants';
import Behance from '@Icons/Behance';
import Dribbble from '@Icons/Dribbble';
import Facebook from '@Icons/Facebook';
import Youtube from '@Icons/Youtube';
import { clsx } from 'clsx';

import s from './styles.module.scss';

const ContactPageForm = () : React.ReactElement => {
  const infoItems = [
    {
      label: 'Phone',
      value: '(+84) 774 764 910',
    },
    {
      label: 'Email',
      value: 'info@nimbusair.com',
    },
    {
      label: 'Address',
      value: '123 Main St, Anytown, USA',
    },
  ];

  const socialMediaItems = [
    {
      label: 'Facebook',
      value: 'https://www.facebook.com/nimbusair',
      icon: <Facebook />,
    },
    {
      label: 'Behance',
      value: 'https://www.behance.net/nimbusair',
      icon: <Behance />,
    },
    {
      label: 'youtube',
      value: 'https://www.youtube.com/nimbusair',
      icon: <Youtube />,
    },
    {
      label: 'Dribbble',
      value: 'https://www.dribbble.com/nimbusair',
      icon: <Dribbble />,
    },
  ];

  return (
    <div className={clsx(s.form, 'grid grid-cols-12 gap-5')}>
      <div className="col-span-3">
        {infoItems.map((item) => (
          <div className={s.form_info_item} key={item.label}>
            <UITypography
              typography={ETypography.TEXT_16_MEDIUM}
              lineHeight={24}
              className={s.form_info_label}
            >
              {item.label}
            </UITypography>
            <UITypography
              typography={ETypography.TEXT_16_LIGHT}
              lineHeight={24}
              className={s.form_info_value}
            >
              {item.value}
            </UITypography>
          </div>
        ))}
      </div>
      <div className="col-span-3">
        <UITypography
          typography={ETypography.TEXT_16_MEDIUM}
          lineHeight={24}
          className={s.form_info_label}
        >
          Social Media
        </UITypography>
        {socialMediaItems.map((item) => (
          <UIButton className={s.form_info_social_item} variant="icon" key={item.label}>
            {item.icon}
          </UIButton>
        ))}
      </div>
      <form className={clsx(s.form_contact, 'col-span-6')}>
        <UITypography typography={ETypography.TEXT_32_REGULAR} className={s.form_contact_title}>
          SEND US A MESSAGE
        </UITypography>
        <div className={s.form_contact_field}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full name"
            className={s.form_contact_input}
          />
        </div>
        <div className={s.form_contact_field}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className={s.form_contact_input}
          />
        </div>
        <div className={s.form_contact_field}>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            className={s.form_contact_input}
          />
        </div>
        <div className={s.form_contact_field}>
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            className={s.form_contact_input}
            rows={4}
          />
        </div>
        <UITypography typography={ETypography.TEXT_14_LIGHT} className={s.form_contact_helper}>
          We typically reply to inquiries within 24 hours.
        </UITypography>
        <UIButton className={s.form_contact_button}>Place Order</UIButton>
      </form>
    </div>
  );
};

export default ContactPageForm;
