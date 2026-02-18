import UIButton from '@Components/Button';
import UITypography from '@Components/Typography';
import { ETypography } from '@Components/Typography/constants';
import ModelsLineUpItem from '@Modules/ModelsPage/Item';

import { MOCK_ITEMS } from './constants';
import s from './styles.module.scss';

const ModelsPageLineup = (): React.ReactElement => {
  return (
    <div className={s.lineup}>
      <div className={s.lineup_title}>
        <UITypography typography={ETypography.TEXT_40_REGULAR}>Our Drone Lineup</UITypography>
        <UITypography typography={ETypography.TEXT_24_LIGHT}>
          Find the right drone to match your passion.
        </UITypography>
      </div>
      <div className={s.lineup_items}>
        {MOCK_ITEMS.map((item) => (
          <ModelsLineUpItem key={item.title} {...item} />
        ))}
      </div>
      <div className={s.lineup_button}>
        <UIButton size="sm">View More</UIButton>
      </div>
    </div>
  );
};

export default ModelsPageLineup;
