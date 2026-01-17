import TrashCan from '@Icons/TrashCan';
import { ReactElement } from 'react';
import s from './styles.module.scss';
import UIButton from '@Components/Button';
import Image from 'next/image';
import UITypography from '@Components/Typography';
import {
  EFontLetterSpacing,
  ETypography,
  ETypographyColor,
} from '@Components/Typography/constants';
import { clsx } from 'clsx';
import MinusPlusInput from '@Components/MinusPlusInput';

interface ICartItemProps {
  name: string;
  image: string;
  quantity: number;
  price: number;
}

const CartItem = (props: ICartItemProps): ReactElement => {
  const { name, image, quantity, price } = props;
  return (
    <div className={clsx(s.cartItem, 'col-span-9 grid grid-cols-9')}>
      <div className="col-span-5">
        <div className={s.cartItem_product}>
          <UIButton variant="icon" iconSize="lg">
            <TrashCan />
          </UIButton>
          <div className={s.cartItem_product_image}>
            <Image src={'/images/drone1.png'} alt={name} width={80} height={80} />
          </div>
          <div className={s.cartItem_product_info}>
            <UITypography
              typography={ETypography.TEXT_24_LIGHT}
              letterSpacing={EFontLetterSpacing.M}
              className="mb_8"
            >
              AeroVison Pro
            </UITypography>
            <UITypography
              typography={ETypography.TEXT_20_LIGHT}
              color={ETypographyColor.NEUTRAL_400}
              letterSpacing={EFontLetterSpacing.M}
            >
              Drone
            </UITypography>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <MinusPlusInput />
      </div>
      <div className="col-span-2 text_end">
        <UITypography typography={ETypography.TEXT_24_LIGHT} letterSpacing={EFontLetterSpacing.M}>
          $299
        </UITypography>
      </div>
    </div>
  );
};

export default CartItem;
