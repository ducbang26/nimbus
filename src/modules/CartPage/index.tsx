import React from 'react';
import UIButton from '@Components/Button';
import UITypography from '@Components/Typography';
import {
  EFontLetterSpacing,
  ETypography,
  ETypographyColor,
} from '@Components/Typography/constants';
import Shield from '@Icons/Shield';
import Warning from '@Icons/Warning';
import CartItem from '@Modules/CartPage/Item';
import Link from 'next/link';

import s from './styles.module.scss';

const MOCK_CART_ITEMS = [
  {
    id: '1',
    name: 'Nimbus Air Premium Headphones',
    image: '/images/drone1.png',
    quantity: 1,
    price: 299.99,
  },
  {
    id: '2',
    name: 'Nimbus Air Wireless Earbuds',
    image: '/images/drone2.png',
    quantity: 1,
    price: 199.99,
  },
];

const CartPage = (): React.ReactElement => {
  return (
    <main className="container">
      <UITypography
        typography={ETypography.TEXT_100_LIGHT}
        letterSpacing={EFontLetterSpacing.M}
        lineHeight={100}
        className="mb_20"
      >
        Cart (2)
      </UITypography>
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <div className="col-span-9 grid grid-cols-9 mb_16">
            <div className="col-span-5">
              <UITypography
                typography={ETypography.TEXT_20_LIGHT}
                color={ETypographyColor.NEUTRAL_500}
              >
                Product
              </UITypography>
            </div>
            <div className="col-span-2">
              <UITypography
                typography={ETypography.TEXT_20_LIGHT}
                color={ETypographyColor.NEUTRAL_500}
              >
                Quantity
              </UITypography>
            </div>
            <div className="col-span-2">
              <UITypography
                typography={ETypography.TEXT_20_LIGHT}
                color={ETypographyColor.NEUTRAL_500}
                className="text_end"
              >
                Price
              </UITypography>
            </div>
          </div>
          {MOCK_CART_ITEMS.map((item) => (
            <CartItem key={item.id} name={''} image={''} quantity={0} price={0} />
          ))}
        </div>

        <div className="col-span-3">
          <div className={s.orderSummary}>
            <UITypography typography={ETypography.TEXT_20_LIGHT} className="mb_16">
              Order summary
            </UITypography>
            <div className={s.orderSummary_discountInput_wrapper}>
              <input
                type="text"
                placeholder="Discount voucher"
                className={s.orderSummary_discountInput}
              />
              <UIButton variant="text" className={s.orderSummary_discountInput_applyButton}>
                <UITypography
                  typography={ETypography.TEXT_14_LIGHT}
                  color={ETypographyColor.NEUTRAL_400}
                >
                  Apply
                </UITypography>
              </UIButton>
            </div>
            <div className={s.orderSummary_value}>
              <UITypography typography={ETypography.TEXT_16_LIGHT}>Subtotal</UITypography>
              <UITypography
                typography={ETypography.TEXT_20_LIGHT}
                className={s.orderSummary_value_amount}
              >
                1,677
                <UITypography
                  tag="span"
                  typography={ETypography.TEXT_12_LIGHT}
                  color={ETypographyColor.NEUTRAL_400}
                >
                  USD
                </UITypography>
              </UITypography>
            </div>
            <div className={s.orderSummary_value}>
              <UITypography typography={ETypography.TEXT_16_LIGHT}>Discount</UITypography>
              <UITypography
                typography={ETypography.TEXT_20_LIGHT}
                className={s.orderSummary_value_amount}
              >
                0
                <UITypography
                  tag="span"
                  typography={ETypography.TEXT_12_LIGHT}
                  color={ETypographyColor.NEUTRAL_400}
                >
                  USD
                </UITypography>
              </UITypography>
            </div>
            <div className={s.orderSummary_value}>
              <UITypography typography={ETypography.TEXT_16_LIGHT}>Delivery fee</UITypography>
              <UITypography
                typography={ETypography.TEXT_20_LIGHT}
                className={s.orderSummary_value_amount}
              >
                10
                <UITypography
                  tag="span"
                  typography={ETypography.TEXT_12_LIGHT}
                  color={ETypographyColor.NEUTRAL_400}
                >
                  USD
                </UITypography>
              </UITypography>
            </div>
            <div className={s.separator} />
            <div className={s.orderSummary_value}>
              <UITypography typography={ETypography.TEXT_20_MEDIUM}>Total</UITypography>
              <UITypography
                typography={ETypography.TEXT_24_MEDIUM}
                className={s.orderSummary_value_amount}
              >
                1,687 USD
              </UITypography>
            </div>
            <div className={s.orderSummary_warranty}>
              <div className={s.orderSummary_warranty_icon}>
                <Shield />
              </div>
              <UITypography
                typography={ETypography.TEXT_14_LIGHT}
                color={ETypographyColor.NEUTRAL_300}
                lineHeight={20}
                className={s.orderSummary_warranty_text}
              >
                <UITypography tag="span" typography={ETypography.TEXT_14_LIGHT}>
                  12-month limited warranty
                </UITypography>{' '}
                for all our drones and accessories, covering manufacturing defects and hardware
                malfunctions under normal use conditions.{' '}
                <Link href="#" className={s.orderSummary_warranty_learnMore}>
                  Learn more
                </Link>
              </UITypography>
            </div>
            <UIButton stretch>Check Out Now</UIButton>
          </div>
          <div className={s.orderInfo}>
            <UITypography color={ETypographyColor.NEUTRAL_500} className="mb_8">
              Estimated Delivery: 3-5 business days
            </UITypography>
            <UITypography color={ETypographyColor.NEUTRAL_500} className="mb_8">
              12-month standard warranty included
            </UITypography>
            <UITypography lineHeight={20} color={ETypographyColor.NEUTRAL_500} className="mb_8">
              Secure Payment Methods:{' '}
              <UITypography
                tag="span"
                typography={ETypography.TEXT_16_MEDIUM}
                color={ETypographyColor.NEUTRAL_950}
              >
                Visa, MasterCard, PayPal, COD.
              </UITypography>
            </UITypography>
            <UITypography lineHeight={20} color={ETypographyColor.NEUTRAL_500}>
              Need help? Contact our support at
            </UITypography>
            <UITypography
              lineHeight={20}
              typography={ETypography.TEXT_16_MEDIUM}
              color={ETypographyColor.NEUTRAL_950}
            >
              +1 (800) 555-DRONE
            </UITypography>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 mb_40">
        <div className="col-span-9 mt_16">
          <div className={s.importantNotes_header}>
            <div className={s.importantNotes_header_icon}>
              <Warning />
            </div>
            <UITypography typography={ETypography.TEXT_32_REGULAR}>Important Notes</UITypography>
          </div>
          <div className={s.importantNotes}>
            <UITypography
              typography={ETypography.TEXT_20_LIGHT}
              color={ETypographyColor.NEUTRAL_500}
              letterSpacing={EFontLetterSpacing.S}
              className="mb_20"
            >
              Warranty is valid only for the original purchaser and cannot be transferred.
            </UITypography>
            <UITypography
              typography={ETypography.TEXT_20_LIGHT}
              color={ETypographyColor.NEUTRAL_500}
              letterSpacing={EFontLetterSpacing.S}
              className="mb_20"
            >
              Warranty does not cover commercial or industrial use unless specified in the purchase
              agreement.
            </UITypography>
            <UITypography
              typography={ETypography.TEXT_20_LIGHT}
              color={ETypographyColor.NEUTRAL_500}
              letterSpacing={EFontLetterSpacing.S}
            >
              ustomers are responsible for shipping costs for out-of-warranty repairs.
            </UITypography>
          </div>
          <UITypography
            typography={ETypography.TEXT_14_LIGHT}
            lineHeight={20}
            color={ETypographyColor.NEUTRAL_300}
          >
            For full details, read our{' '}
            <Link href="#" className={s.importantNotes_warrantyLink}>
              Warranty Terms & Conditions.
            </Link>
          </UITypography>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
