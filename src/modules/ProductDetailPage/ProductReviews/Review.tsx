import { ReactElement } from 'react';
import UITypography from '@Components/Typography';
import { ETypography } from '@Components/Typography/constants';
import ThumbUp from '@Icons/ThumbUp';
import Image from 'next/image';

import s from './styles.module.scss';

const Review = (): ReactElement => {
  return (
    <div className={s.review}>
      <div className={s.review_header}>
        <div className={s.review_icon}>
          <ThumbUp />
        </div>
        <UITypography typography={ETypography.TEXT_14_LIGHT} className={s.review_point}>
          4.8
        </UITypography>
        <UITypography typography={ETypography.TEXT_14_MEDIUM} className={s.review_title}>
          Awesome
        </UITypography>
      </div>
      <div className={s.review_content}>
        <UITypography typography={ETypography.TEXT_16_LIGHT} lineHeight={24}>
          {`"The best drone for cinematic shots! Smooth footage and incredible range sds dsada sdsa d asd sdsds d." – David`}
        </UITypography>
      </div>
      <div className={s.separator} />
      <div className={s.review_author}>
        <div className={s.review_avatar}>
          <Image src="/images/drone1.png" alt="avatar" width={40} height={40} />
        </div>
        <UITypography
          typography={ETypography.TEXT_16_LIGHT}
          className={s.review_date}
        >David, Photographer</UITypography>
      </div>
    </div>
  );
};

export default Review;
