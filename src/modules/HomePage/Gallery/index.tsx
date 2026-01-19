'use client';
import React, { useLayoutEffect, useRef, useState } from 'react';
import ArrowLeft from '@Icons/ArrowLeft';
import ArrowRight from '@Icons/ArrowRight';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

import s from './styles.module.scss';

gsap.registerPlugin(Draggable);

const CARD_COLORS = ['#266678', '#cb7c7a', '#36a18b'];
const SCALE_FACTOR = -5;

const Gallery = (): React.ReactElement => {
  const [cards, setCards] = useState(CARD_COLORS);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.to(card, {
          rotate: index%2 == 0 ? - index * SCALE_FACTOR : index * SCALE_FACTOR,
          duration: 0.5,
          ease: 'power3.inOut',
        });
      }
    });

    const topCard = cardRefs.current[0];
    let draggableInstance: Draggable[] | undefined;
    if (topCard) {
      draggableInstance = Draggable.create(topCard, {
        type: 'x',
        bounds: { minX: -100, maxX: 100 },
        onDragEnd: function () {
          gsap.to(this.target, {
            x: 0,
            duration: 0.5,
            ease: 'power3.inOut',
            onComplete: () => {
              setCards(prevCards => {
                const newOrder = [...prevCards];
                const firstCard = newOrder.shift();
                if (firstCard) {
                  newOrder.push(firstCard);
                }
                return newOrder;
              });
            },
          });
        },
      });
    }

    return () : void => {
      if (draggableInstance && draggableInstance[0]) {
        draggableInstance[0].kill();
      }
    };
  }, [cards]);

  return (
    <section className={`${s.gallery} container`}>
      <div className={`${s.btn}`}>
        <ArrowLeft />
      </div>
      <div className={s.slider}>
        {cards.map((color, index) => {
          const isDraggable = index === 0;
          return (
            <div
              key={color}
              ref={el => {
                cardRefs.current[index] = el;
              }}
              className={s.slider__item}
              style={{
                backgroundColor: color,
                cursor: isDraggable ? 'grab' : 'auto',
                zIndex: CARD_COLORS.length - index,
              }}
            />
          );
        })}
      </div>
      <div className={`${s.btn}`}>
        <ArrowRight />
      </div>
    </section>
  );
};

export default Gallery;
