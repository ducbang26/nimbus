import { ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import UIButton from '@Components/Button';
import UITypography from '@Components/Typography';
import {
  EFontLetterSpacing,
  ETypography,
  ETypographyColor,
} from '@Components/Typography/constants';
import Minus from '@Icons/Minus';
import Plus from '@Icons/Plus';
import TrashCan from '@Icons/TrashCan';
import { modifyquantityCartItem, removeFromCart } from '@Store/slices/cartSlice';
import { clsx } from 'clsx';
import Image from 'next/image';

import s from './styles.module.scss';

const CartItem = ({ cartItem }: any): ReactElement => {
  const { name, category, images, quantity, price } = cartItem;

  const dispatch = useDispatch();

  const handleIncreaseCart = (): void => {
    dispatch(
      modifyquantityCartItem({
        ...cartItem,
        quantity: quantity + 1,
      })
    );
  };

  const handleDecreaseCart = (): void => {
    if (quantity == 1) {
      dispatch(removeFromCart(cartItem));
    } else {
      dispatch(
        modifyquantityCartItem({
          ...cartItem,
          quantity: quantity - 1,
        })
      );
    }
  };

  return (
    <div className={clsx(s.cartItem, 'col-span-9 grid grid-cols-9')}>
      <div className="col-span-5">
        <div className={s.cartItem_product}>
          <UIButton variant="icon" iconSize="lg">
            <TrashCan />
          </UIButton>
          <div className={s.cartItem_product_image}>
            <Image src={images?.[0]?.url || ''} alt={name} width={80} height={80} />
          </div>
          <div className={s.cartItem_product_info}>
            <UITypography
              typography={ETypography.TEXT_24_LIGHT}
              letterSpacing={EFontLetterSpacing.M}
              className="mb_8"
            >
              {name}
            </UITypography>
            <UITypography
              typography={ETypography.TEXT_20_LIGHT}
              color={ETypographyColor.NEUTRAL_400}
              letterSpacing={EFontLetterSpacing.M}
            >
              {category?.name}
            </UITypography>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <div className={clsx(s.minusPlusInput_container, 'mb_24')}>
          <UIButton variant="icon" onClick={handleDecreaseCart}>
            <Minus />
          </UIButton>
          <input className={s.minusPlusInput_input} readOnly value={quantity} />
          <UIButton variant="icon" onClick={handleIncreaseCart}>
            <Plus />
          </UIButton>
        </div>
      </div>
      <div className="col-span-2 text_end">
        <UITypography typography={ETypography.TEXT_24_LIGHT} letterSpacing={EFontLetterSpacing.M}>
          ${quantity * price}
        </UITypography>
      </div>
    </div>
  );
};

export default CartItem;
