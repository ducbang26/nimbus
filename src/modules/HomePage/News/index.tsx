import React from 'react'
import UIButton from '@Components/Button';
import Container from '@Components/Container';

import s from './styles.module.scss';

const News = () : React.ReactElement => {
  return (
    <section className={s.news}>
      <Container className={s.news_wrap}>
        <div>news</div>
        <div></div>
        <div><UIButton color='gray'>View All Models</UIButton></div>
      </Container>
    </section>
  )
}

export default News