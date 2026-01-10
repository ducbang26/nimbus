import UIButton from '@Components/Button';
import UITypography from '@Components/Typography';
import { ETypography } from '@Components/Typography/constants';
import Image from 'next/image';

import s from './styles.module.scss';

const ModelsPageThreeDModels = (): React.ReactElement => {
  return (
    <div className={s.threeDModels}>
      <div className={s.threeDModels_title}>
        <UITypography typography={ETypography.TEXT_40_REGULAR}>View 3D model</UITypography>
        <UITypography typography={ETypography.TEXT_24_LIGHT}>
          Find the right drone to match your passion.
        </UITypography>
      </div>
      <div className={s.threeDModels_filter}>
        <UIButton size="sm">AeroVision Pro</UIButton>
        <UIButton size="sm" disabled>
          SkyRacer X
        </UIButton>
        <UIButton size="sm" disabled>
          IndustrialX Pro
        </UIButton>
        <UIButton size="sm" disabled>
          Smart Controller Pro
        </UIButton>
      </div>
      <div className={s.threeDModels_models}>
        <Image src="/images/drone1.png" alt="3d-model" width={1000} height={1000} />
      </div>
    </div>
  );
};

export default ModelsPageThreeDModels;
