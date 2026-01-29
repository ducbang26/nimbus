import React from 'react';
import UIButton from '@Components/Button';
import Container from '@Components/Container';
import Image from 'next/image';

import s from './styles.module.scss';

const News = (): React.ReactElement => {
  return (
    <section className={s.news}>
      <Container className={s.news_wrap}>
        <div className={s.news_title}>news</div>
        <div className={s.news_content_list}>
          <div className={s.news_content_item}>
            <div className={s.news_item_image_wrap}>
              <Image
                className={s.news_item_image}
                src="/images/news1.png"
                alt=""
                height="250"
                width="427"
              />
            </div>
            <div>
              <div className={s.news_item_title}>Eco Bike changed my daily commute—fast, smooth, and eco-friendly!</div>
              <div className={s.news_item_date}>March 1st, 2025</div>
            </div>
          </div>
          <div className={s.news_content_item}>
            <div className={s.news_item_image_wrap}>
              <Image
                className={s.news_item_image}
                src="/images/news2.png"
                alt=""
                height="250"
                width="427"
              />
            </div>
            <div>
              <div className={s.news_item_title}>Eco Bike changed my daily commute—fast, smooth, and eco-friendly!</div>
              <div className={s.news_item_date}>March 1st, 2025</div>
            </div>
          </div>
          <div className={s.news_content_item}>
            <div className={s.news_item_image_wrap}>
              <Image
                className={s.news_item_image}
                src="/images/news3.png"
                alt=""
                height="250"
                width="427"
              />
            </div>
            <div>
              <div className={s.news_item_title}>Eco Bike changed my daily commute—fast, smooth, and eco-friendly!</div>
              <div className={s.news_item_date}>March 1st, 2025</div>
            </div>
          </div>
        </div>
        <div className={s.news_button_wrap}>
          <UIButton>View All Models</UIButton>
        </div>
      </Container>
    </section>
  );
};

export default News;
