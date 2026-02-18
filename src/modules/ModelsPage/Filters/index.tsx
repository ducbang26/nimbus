import UITypography from '@Components/Typography';
import { EFontLetterSpacing, ETypography } from '@Components/Typography/constants';
import { MODEL_FILTERS } from '@Modules/ModelsPage/constants';
import { clsx } from 'clsx';
import Image from 'next/image';

import s from './styles.module.scss';

const ModelsPageFilters = (): React.ReactElement => {
  return (
    <div className={clsx('container grid grid-cols-12', s.modelFilters)}>
      <div className={clsx('col-start-3 col-span-8 grid grid-cols-8', s.modelFilters_filters)}>
        {MODEL_FILTERS.map((filter) => (
          <div
            className={clsx('col-span-1', s.modelFilters_filter, s.modelFilters_filter__active)}
            key={filter.label}
          >
            <Image src={filter.image} alt={filter.label} width={100} height={100} />
            <UITypography
              className={s.modelFilters_filter_label}
              typography={ETypography.TEXT_16_LIGHT}
              letterSpacing={EFontLetterSpacing.M}
            >
              {filter.label}
            </UITypography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelsPageFilters;
