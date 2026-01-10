import UIButton from '@Components/Button';
import UITypography from '@Components/Typography';
import {
  EFontLetterSpacing,
  ETypography,
  ETypographyColor,
} from '@Components/Typography/constants';
import { clsx } from 'clsx';

import s from './styles.module.scss';

const ModelsPageTechnicalSupport = (): React.ReactElement => {
  return (
    <div className={clsx('container', s.technicalSupport)}>
      <div className={s.technicalSupport_title}>
        <UITypography
          typography={ETypography.TEXT_40_REGULAR}
          className={s.technicalSupport_title_heading}
        >
          Technical Support & Assistance
        </UITypography>
        <UITypography typography={ETypography.TEXT_24_LIGHT}>
          Need help choosing the right drone or troubleshooting your device? Our expert team is here
          for you!
        </UITypography>
      </div>
      <div className={clsx('grid grid-cols-12', s.technicalSupport_content)}>
        <div className={clsx('col-span-4', s.technicalSupport_content)}>
          <UITypography typography={ETypography.TEXT_36_LIGHT}>
            Expert Assistance for Every Customer
          </UITypography>
        </div>
        <div className={clsx('col-span-4', s.technicalSupport_content_item)}>
          <UITypography
            typography={ETypography.TEXT_28_REGULAR}
            letterSpacing={EFontLetterSpacing.M}
            className={s.technicalSupport_content_item_heading}
          >
            Live Chat Support
          </UITypography>
          <UITypography typography={ETypography.TEXT_20_LIGHT} color={ETypographyColor.NEUTRAL_300}>
            Get real-time help from our drone specialists.
          </UITypography>
        </div>
        <div className={clsx('col-span-4', s.technicalSupport_content_item)}>
          <UITypography
            typography={ETypography.TEXT_28_REGULAR}
            letterSpacing={EFontLetterSpacing.M}
            className={s.technicalSupport_content_item_heading}
          >
            1-on-1 Consultation
          </UITypography>
          <UITypography typography={ETypography.TEXT_20_LIGHT} color={ETypographyColor.NEUTRAL_300}>
            Book a video call with a technician.
          </UITypography>
        </div>

        <div
          className={clsx(
            'col-start-5 col-span-4',
            s.technicalSupport_content_item,
            s.technicalSupport_content_item_bottom
          )}
        >
          <UITypography
            typography={ETypography.TEXT_28_REGULAR}
            letterSpacing={EFontLetterSpacing.M}
            className={s.technicalSupport_content_item_heading}
          >
            Comprehensive User Guides
          </UITypography>
          <UITypography typography={ETypography.TEXT_20_LIGHT} color={ETypographyColor.NEUTRAL_300}>
            Step-by-step tutorials for each model.
          </UITypography>
        </div>
        <div
          className={clsx(
            'col-span-4',
            s.technicalSupport_content_item,
            s.technicalSupport_content_item_bottom
          )}
        >
          <UITypography
            typography={ETypography.TEXT_28_REGULAR}
            letterSpacing={EFontLetterSpacing.M}
            className={s.technicalSupport_content_item_heading}
          >
            Troubleshooting Help
          </UITypography>
          <UITypography typography={ETypography.TEXT_20_LIGHT} color={ETypographyColor.NEUTRAL_300}>
            Quick fixes and firmware update assistance.
          </UITypography>
        </div>
      </div>
      <div className={s.technicalSupport_divider} />
      <div className={clsx('grid grid-cols-12', s.technicalSupport_content_bottom)}>
        <div className={clsx('col-span-4', s.technicalSupport_content)}>
          <UITypography typography={ETypography.TEXT_36_LIGHT}>Hotline</UITypography>
        </div>
        <div className={clsx('col-span-4', s.technicalSupport_content_item)}>
          <UITypography
            typography={ETypography.TEXT_28_REGULAR}
            letterSpacing={EFontLetterSpacing.M}
            className={s.technicalSupport_content_item_heading}
          >
            Hotline
          </UITypography>
          <UITypography typography={ETypography.TEXT_20_LIGHT} color={ETypographyColor.NEUTRAL_300}>
            +1 (800) 555-DRONE
          </UITypography>
        </div>
        <div className={clsx('col-span-4', s.technicalSupport_content_item)}>
          <UITypography
            typography={ETypography.TEXT_28_REGULAR}
            letterSpacing={EFontLetterSpacing.M}
            className={s.technicalSupport_content_item_heading}
          >
            Email
          </UITypography>
          <UITypography typography={ETypography.TEXT_20_LIGHT} color={ETypographyColor.NEUTRAL_300}>
            support@dronewebsite.com
          </UITypography>
        </div>
      </div>
      <div>
        <div className={s.technicalSupport_title}>
          <UITypography
            typography={ETypography.TEXT_40_REGULAR}
            className={s.technicalSupport_title_heading}
          >
            Why Choose Our Drones?
          </UITypography>
        </div>
        <div className={clsx('grid grid-cols-12', s.technicalSupport_content)}>
          <div className={clsx('col-span-3', s.technicalSupport_content_item)}>
            <UITypography
              typography={ETypography.TEXT_28_REGULAR}
              letterSpacing={EFontLetterSpacing.M}
              className={s.technicalSupport_content_item_heading}
            >
              Advanced Technology
            </UITypography>
            <UITypography
              typography={ETypography.TEXT_20_LIGHT}
              color={ETypographyColor.NEUTRAL_300}
            >
              AI-powered features for effortless flying
            </UITypography>
          </div>
          <div className={clsx('col-span-3', s.technicalSupport_content_item)}>
            <UITypography
              typography={ETypography.TEXT_28_REGULAR}
              letterSpacing={EFontLetterSpacing.M}
              className={s.technicalSupport_content_item_heading}
            >
              Extended Battery Life
            </UITypography>
            <UITypography
              typography={ETypography.TEXT_20_LIGHT}
              color={ETypographyColor.NEUTRAL_300}
            >
              Up to 75 minutes of flight time
            </UITypography>
          </div>
          <div className={clsx('col-span-3', s.technicalSupport_content_item)}>
            <UITypography
              typography={ETypography.TEXT_28_REGULAR}
              letterSpacing={EFontLetterSpacing.M}
              className={s.technicalSupport_content_item_heading}
            >
              Durable & Reliable
            </UITypography>
            <UITypography
              typography={ETypography.TEXT_20_LIGHT}
              color={ETypographyColor.NEUTRAL_300}
            >
              Built for stability in any environment
            </UITypography>
          </div>
          <div className={clsx('col-span-3', s.technicalSupport_content_item)}>
            <UITypography
              typography={ETypography.TEXT_28_REGULAR}
              letterSpacing={EFontLetterSpacing.M}
              className={s.technicalSupport_content_item_heading}
            >
              Trusted by Professionals
            </UITypography>
            <UITypography
              typography={ETypography.TEXT_20_LIGHT}
              color={ETypographyColor.NEUTRAL_300}
            >
              Used in industries worldwide
            </UITypography>
          </div>
        </div>
        <div className={s.technicalSupport_button_container}>
          <UIButton className={s.technicalSupport_button}>Find Your Drone Today</UIButton>
        </div>
      </div>
    </div>
  );
};

export default ModelsPageTechnicalSupport;
