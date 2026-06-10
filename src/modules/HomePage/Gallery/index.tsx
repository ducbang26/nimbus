'use client';
import React, { useState } from 'react';

import CardDeck from './CardDeck';
import s from './styles.module.scss';

const Gallery = (): React.ReactElement => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [leftPressed, setLeftPressed] = useState<boolean | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [rightPressed, setRightPressed] = useState<boolean | null>(null);

  const cardImage = ['/images/gallery1.png', '/images/gallery2.png', '/images/gallery3.png'];


  return (
    <section className={`${s.gallery} container`}>
      {/* <div className={`${s.btn}`} onClick={onLeftPressed}>
        <ArrowLeft />
      </div> */}
      <CardDeck leftPressed={leftPressed} rightPressed={rightPressed} cards={cardImage} />
      {/* <div className={`${s.btn}`} onClick={onRightPressed}>
        <ArrowRight />
      </div> */}
    </section>
  );
};

export default Gallery;
