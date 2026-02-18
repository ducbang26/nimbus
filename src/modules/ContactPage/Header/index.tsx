import React from 'react';

import UITypography from '@Components/Typography';
import { EFontLetterSpacing, ETypography } from '@Components/Typography/constants';

import s from './styles.module.scss';

const ContactPageHeader = (): React.ReactElement => {
  return (
    <div className={s.header}>
      <UITypography typography={ETypography.TEXT_100_LIGHT} className={s.header_title}>
        Contact us
      </UITypography>
      <UITypography typography={ETypography.TEXT_16_LIGHT} letterSpacing={EFontLetterSpacing.S}>
        We’re here to help! Please feel free to reach out with any questions, comments, or
        inquiries.
      </UITypography>
    </div>
  );
};

export default ContactPageHeader;
