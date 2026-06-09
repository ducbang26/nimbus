import { ReactElement } from 'react';

import UITypography from '@Components/Typography';
import { ETypography } from '@Components/Typography/constants';
import { clsx } from 'clsx';
import Image from 'next/image';

import s from './styles.module.scss';

const ProductComparison = (): ReactElement => {
  return (
    <div className={clsx('col-span-7 mb_20', s.productComparison)}>
      <UITypography typography={ETypography.TEXT_24_MEDIUM} className="mb_8">
        Compare with Other Models
      </UITypography>
      <table className={s.productComparison_table}>
        <tbody>
          <tr>
            <th></th>
            <td>
              <Image src="/images/drone1.png" alt="AeroVision Pro" width={100} height={100} />
            </td>
            <td>
              <Image src="/images/drone2.png" alt="AeroVision Pro" width={100} height={100} />
            </td>
            <td>
              <Image src="/images/drone3.png" alt="AeroVision Pro" width={100} height={100} />
            </td>
          </tr>
          <tr>
            <th>Features</th>
            <td>AeroVision Pro</td>
            <td>SkyRacer X</td>
            <td>Explorer Mini</td>
          </tr>
          <tr>
            <th>Camera</th>
            <td>8K UHD</td>
            <td>FPV HD</td>
            <td>4K HD</td>
          </tr>
          <tr>
            <th>Flight Time</th>
            <td>60 min</td>
            <td>30 min</td>
            <td>40 min</td>
          </tr>
          <tr>
            <th>Speed</th>
            <td>70 km/h</td>
            <td>120 km/h</td>
            <td>50 km/h</td>
          </tr>
          <tr>
            <th>AI Tracking</th>
            <td>Yes</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <th>Obstacle Avoidance</th>
            <td>No</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductComparison;
