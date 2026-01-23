'use client';
import React, { useState } from 'react';
import ArrowLeft from '@Icons/ArrowLeft';
import ArrowRight from '@Icons/ArrowRight';

import CardDeck from './CardDeck';

import s from './styles.module.scss';

const Gallery = (): React.ReactElement => {
  const [leftPressed, setLeftPressed] = useState<boolean | null>(null);
  const [rightPressed, setRightPressed] = useState<boolean | null>(null);

  const cardImage = [
    '/images/gallery1.png',
    '/images/gallery2.png',
    '/images/gallery3.png',
  ];

  const onLeftPressed = (): void => {
    setLeftPressed((prev) => !prev);
  };

  const onRightPressed = (): void => {
    setRightPressed((prev) => !prev);
  };

  return (
    <section className={`${s.gallery} container`}>
      <div className={`${s.btn}`} onClick={onLeftPressed}>
        <ArrowLeft />
      </div>
      <CardDeck leftPressed={leftPressed} rightPressed={rightPressed} cards={cardImage} />
      <div className={`${s.btn}`} onClick={onRightPressed}>
        <ArrowRight />
      </div>
    </section>
  );
};

export default Gallery;
