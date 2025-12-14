import UITypography from '@Components/Typography';
import { EFontLetterSpacing, ETypography } from '@Components/Typography/constants';

const ContactPage = () => {
  return (
    <main className="container grid grid-cols-12 gap-5">
      <div className="col-span-12">
        <UITypography typography={ETypography.TEXT_100_LIGHT}>Contact us</UITypography>
        <UITypography typography={ETypography.TEXT_16_LIGHT} letterSpacing={EFontLetterSpacing.S}>
          We’re here to help! Please feel free to reach out with any questions, comments, or
          inquiries.
        </UITypography>
      </div>
      <div className="col-span-3">
        <UITypography typography={ETypography.TEXT_16_MEDIUM}>Phone</UITypography>
        <UITypography typography={ETypography.TEXT_16_LIGHT}>(+84) 774 764 910</UITypography>
      </div>
    </main>
  );
};

export default ContactPage;
