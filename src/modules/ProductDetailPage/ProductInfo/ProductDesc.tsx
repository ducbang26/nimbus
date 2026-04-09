import { ReactElement } from 'react';

import UIAccordion from '@Components/Accordion';
import UITypography from '@Components/Typography';
import { ETypography, ETypographyColor } from '@Components/Typography/constants';

import s from './styles.module.scss';

const ProductDesc = (): ReactElement => {
  return (
    <div>
      <UIAccordion
        title="Description"
        content={
          <UITypography
            typography={ETypography.TEXT_16_LIGHT}
            lineHeight={24}
            color={ETypographyColor.NEUTRAL_500}
          >
            {`The Ultimate Drone for Filmmakers & Professionals The AeroVision Pro is designed for creators who demand cinematic precision and exceptional flight performance. Capture breathtaking 8K UHD footage, enjoy an extended 60-minute flight time, and experience intelligent AI-powered object tracking.
              Best for: Filmmakers, photographers, real estate, nature enthusiasts
              User Level: Professional / Advanced`}
          </UITypography>
        }
      />
      <div className={s.seperator} />
      <UIAccordion
        title="What’s in the Box?"
        content={
          <UITypography
            typography={ETypography.TEXT_16_LIGHT}
            lineHeight={24}
            color={ETypographyColor.NEUTRAL_500}
          >
            {`AeroVision Pro Drone
              Smart Controller Pro (with HD screen)
              High-Capacity Battery (x1)
              Charging Hub & Cables
              Spare Propellers (x4)
              Premium Carrying Case`}
          </UITypography>
        }
      />
      <div className={s.seperator} />
      <UIAccordion
        title="Key Features"
        content={
          <UITypography
            typography={ETypography.TEXT_16_LIGHT}
            lineHeight={24}
            color={ETypographyColor.NEUTRAL_500}
          >
            {`AeroVision Pro Drone
              Smart Controller Pro (with HD screen)
              High-Capacity Battery (x1)
              Charging Hub & Cables
              Spare Propellers (x4)
              Premium Carrying Case`}
          </UITypography>
        }
      />
      <div className={s.seperator} />
      <UIAccordion
        title="Specifications"
        content={
          <table className={s.productDesc_specifications_table}>
            <tr>
              <th>Feature</th>
              <th>Details</th>
            </tr>
            <tr>
              <td>Camera</td>
              <td>8K Ultra HD, 48MP Photos</td>
            </tr>
            <tr>
              <td>Gimbal</td>
              <td>3-Axis Mechanical</td>
            </tr>
            <tr>
              <td>Flight Time</td>
              <td>Up to 60 minutes</td>
            </tr>
            <tr>
              <td>Max Speed</td>
              <td>70 km/h</td>
            </tr>
            <tr>
              <td>Transmission</td>
              <td>5km HD Live Feed</td>
            </tr>
            <tr>
              <td>Obstacle Avoidance</td>
              <td>360° Smart Sensors</td>
            </tr>
            <tr>
              <td>AI Features</td>
              <td>Object Tracking, Auto-Follow</td>
            </tr>
            <tr>
              <td>Battery</td>
              <td>6000mAh Fast-Charge</td>
            </tr>
          </table>
        }
      />
      <div className={s.seperator} />
      <UIAccordion
        title="Warranty Coverage/not Coverage"
        content={
          <UITypography
            typography={ETypography.TEXT_16_LIGHT}
            lineHeight={24}
            color={ETypographyColor.NEUTRAL_500}
          >
            {`AeroVision Pro Drone
              Smart Controller Pro (with HD screen)
              High-Capacity Battery (x1)
              Charging Hub & Cables
              Spare Propellers (x4)
              Premium Carrying Case`}
          </UITypography>
        }
      />
    </div>
  );
};

export default ProductDesc;
