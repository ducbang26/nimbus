import { ReactElement } from 'react';
import UIButton from '@Components/Button';
import Minus from '@Icons/Minus';
import Plus from '@Icons/Plus';
import clsx from 'clsx';

import s from './styles.module.scss';

const MinusPlusInput = (): ReactElement => {
  return (
    <div className={clsx(s.minusPlusInput_container, 'mb_24')}>
      <UIButton variant="icon">
        <Minus />
      </UIButton>
      <input className={s.minusPlusInput_input} value={1} />
      <UIButton variant="icon">
        <Plus />
      </UIButton>
    </div>
  );
};

export default MinusPlusInput;
