import UITypography from '@Components/Typography';
import { ETypography } from '@Components/Typography/constants';
import s from './styles.module.scss';
import Image from 'next/image';

const AboutUsPage = () => {
  return (
    <main className={s.about}>
      <Image
        className={s.about_bg}
        src="/images/hero-bg.webp"
        alt="about-us-bg"
        width={1920}
        height={1080}
      />

      <div className="container">
        <div className={s.about_header}>
          <UITypography
            tag="h2"
            typography={ETypography.TEXT_40_REGULAR}
            className={s.about_header_title}
          >
            About Us
          </UITypography>
          <UITypography typography={ETypography.TEXT_24_LIGHT} className={s.about_header_subtitle}>
            Elevating the Future of Flight
          </UITypography>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-2">
            <UITypography typography={ETypography.TEXT_24_LIGHT}>Information</UITypography>
          </div>
          <div className="col-span-10">
            <UITypography typography={ETypography.TEXT_20_LIGHT} className={s.about_info_title}>
              1. Who we are
            </UITypography>
            <UITypography typography={ETypography.TEXT_16_LIGHT} lineHeight={24}>
              At Nimbus Air, we are passionate about innovation, precision, and pushing the
              boundaries of aerial technology. Founded by a team of drone enthusiasts, engineers,
              and visionaries, our mission is to create cutting-edge drones that empower both
              professionals and hobbyists to capture the world from new perspectives.
            </UITypography>

            <div className={s.divider} />

            <UITypography typography={ETypography.TEXT_20_LIGHT} className={s.about_info_title}>
              2. Our Mission
            </UITypography>
            <UITypography typography={ETypography.TEXT_16_LIGHT} lineHeight={24}>
              We believe in making drone technology more accessible, reliable, and intelligent.
              Whether you’re a filmmaker seeking cinematic shots, a surveyor mapping landscapes, or
              an adventurer capturing breathtaking moments, our drones are designed to deliver
              unparalleled performance, stability, and ease of use.
            </UITypography>

            <div className={s.divider} />

            <UITypography typography={ETypography.TEXT_20_LIGHT} className={s.about_info_title}>
              3. What we offer
            </UITypography>
            <ul className={s.about_info_list}>
              <li>
                <UITypography typography={ETypography.TEXT_16_LIGHT}>
                  Advanced Drone Technology – Equipped with AI-powered stabilization,
                  high-resolution cameras, and intelligent flight modes.
                </UITypography>
              </li>
              <li>
                <UITypography typography={ETypography.TEXT_16_LIGHT} lineHeight={24}>
                  Cinematic & Professional Use – Elevate your content with stunning 4K/8K aerial
                  footage.
                </UITypography>
              </li>
              <li>
                <UITypography typography={ETypography.TEXT_16_LIGHT} lineHeight={24}>
                  Reliable & Durable – Built with high-quality materials to withstand extreme
                  conditions.
                </UITypography>
              </li>
              <li>
                <UITypography typography={ETypography.TEXT_16_LIGHT} lineHeight={24}>
                  Eco-Friendly & Efficient – Energy-efficient batteries and sustainable design
                  principles.
                </UITypography>
              </li>
            </ul>

            <div className={s.divider} />

            <UITypography typography={ETypography.TEXT_20_LIGHT} className={s.about_info_title}>
              4. Why Choose Us?
            </UITypography>
            <ul className={s.about_info_list}>
              <li>
                <UITypography typography={ETypography.TEXT_16_LIGHT} lineHeight={24}>
                  Innovative Engineering – We integrate state-of-the-art flight systems with AI to
                  ensure seamless operation.
                </UITypography>
              </li>
              <li>
                <UITypography typography={ETypography.TEXT_16_LIGHT} lineHeight={24}>
                  User-Friendly Experience – Intuitive controls and smart automation make flying
                  easy for everyone.
                </UITypography>
              </li>
              <li>
                <UITypography typography={ETypography.TEXT_16_LIGHT} lineHeight={24}>
                  Exceptional Customer Support – Our team is dedicated to providing expert guidance
                  and after-sales service.
                </UITypography>
              </li>
              <li>
                <UITypography typography={ETypography.TEXT_16_LIGHT} lineHeight={24}>
                  Global Community – Join a network of drone pilots, creators, and professionals
                  worldwide.
                </UITypography>
              </li>
            </ul>

            <div className={s.divider} />

            <UITypography typography={ETypography.TEXT_20_LIGHT} className={s.about_info_title}>
              5. Join the Revolution
            </UITypography>
            <UITypography typography={ETypography.TEXT_16_LIGHT} lineHeight={24}>
              We are more than just a drone company – we are pioneers in aerial exploration and
              smart technology. Whether you’re a beginner or a seasoned pilot, [Your Drone Brand
              Name] is here to take your flight experience to the next level.
            </UITypography>
          </div>
        </div>

        <UITypography
          typography={ETypography.TEXT_40_REGULAR}
          lineHeight={60}
          className={s.about_footer_title}
        >
          Fly Beyond Limits. Capture the Unseen.
        </UITypography>
      </div>
    </main>
  );
};

export default AboutUsPage;
