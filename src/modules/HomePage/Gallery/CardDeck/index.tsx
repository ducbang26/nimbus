import React, { useEffect, useRef, useState } from 'react';

import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

import s from './styles.module.scss';

gsap.registerPlugin(Draggable, ScrollTrigger);

interface ICardDeck {
  cards: string[];
  leftPressed: boolean | null;
  rightPressed: boolean | null;
}

const CardDeck = ({ cards, leftPressed, rightPressed }: ICardDeck): React.ReactElement => {
  const [deck, setDeck] = useState(cards);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lastActionRef = useRef<'left' | 'right' | null>(null);
  const isRevealedRef = useRef<boolean>(false);

  const animateToBackOfDeck = (
    target: HTMLDivElement | null,
    card: HTMLDivElement | null,
    index: number
  ): void => {
    gsap.to(target, {
      x: 0,
      y: 0,
      scale: 0.9,
      zIndex: 0,
      rotation: (cardRefs.current.length - 1) * 5,
      duration: 0.35,
      onComplete: function () {
        gsap.set(card, { scale: 1 });
        const newDeck = [...deck];
        const newDeckRef = [...cardRefs.current];
        const [removed] = newDeck.splice(index, 1);
        const [removedRef] = newDeckRef.splice(index, 1);
        newDeck.push(removed);
        newDeckRef.push(removedRef);
        cardRefs.current = newDeckRef;
        setDeck(newDeck);
      },
    });
  };

  const animateToFrontOfDeck = (
    target: HTMLDivElement | null,
    card: HTMLDivElement | null,
    index: number
  ): void => {
    gsap.set(target, { zIndex: cardRefs.current.length + 1 });

    gsap.fromTo(
      target,
      { x: 250, y: 0 },
      {
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        onComplete: function () {
          gsap.set(card, { scale: 1 });
          const newDeck = [...deck];
          const newDeckRef = [...cardRefs.current];
          const [removed] = newDeck.splice(index, 1);
          const [removedRef] = newDeckRef.splice(index, 1);
          newDeck.unshift(removed);
          newDeckRef.unshift(removedRef);
          cardRefs.current = newDeckRef;
          setDeck(newDeck);
        },
      }
    );
  };

  useEffect(() => {
    const validCards = cardRefs.current.filter((card) => card !== null);

    if (validCards.length > 0 && !isRevealedRef.current) {
      isRevealedRef.current = true;

      gsap.fromTo(
        validCards,
        {
          autoAlpha: 0,
          scale: 0.8,
          y: 150,
        },
        {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 50%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    if (leftPressed !== null) {
      lastActionRef.current = 'right';
      gsap.set(cardRefs.current[cardRefs.current.length - 1], { scale: 0.9 });
      gsap.to(cardRefs.current[cardRefs.current.length - 1], {
        x: 250,
        scale: 1.1,
        duration: 0.25,
        onComplete: function () {
          animateToFrontOfDeck(
            cardRefs.current[cardRefs.current.length - 1],
            cardRefs.current[cardRefs.current.length - 1],
            cardRefs.current.length - 1
          );
        },
      });
    }
  }, [leftPressed]);

  useEffect(() => {
    if (rightPressed !== null) {
      lastActionRef.current = 'left';
      gsap.to(cardRefs.current[0], {
        x: -250,
        scale: 1.1,
        duration: 0.25,
        onComplete: function () {
          animateToBackOfDeck(cardRefs.current[0], cardRefs.current[0], 0);
        },
      });
    }
  }, [rightPressed]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      gsap.set(card, { zIndex: deck.length - index });
      const prevPosition = `${(index + 1) * 5}`;

      if (lastActionRef.current === 'right') {
        gsap.to(card, { rotation: `${index * 5}deg`, duration: 0.25 });
      } else if (lastActionRef.current === 'left') {
        gsap.fromTo(
          card,
          { rotation: prevPosition },
          { rotation: `${index * 5}deg`, duration: 0.25 }
        );
      } else {
        gsap.set(card, { rotation: `${index * 5}deg` });
      }

      Draggable.create(card, {
        type: 'x,y',
        bounds: { minX: -200, maxX: 200, maxY: 200, minY: -200 },
        edgeResistance: 0.75,
        onDragEnd: function () {
          lastActionRef.current = 'left';
          if (Math.abs(this.x) >= 50 || Math.abs(this.y) >= 50) {
            gsap.set(this.target, { zIndex: 0 });
            animateToBackOfDeck(this.target, card, index);
          } else {
            gsap.to(this.target, { x: 0, y: 0 });
          }
        },
      });
    });
  }, [deck]);

  return (
    <div className={s.slider} ref={containerRef}>
      {deck.map((card, index) => (
        <div
          className={s.slider__item}
          key={card}
          ref={(el) => {
            cardRefs.current[index] = el;
          }}
          style={{ position: 'absolute', opacity: 0, zIndex: index }}
        >
          <Image src={card} alt="" height="700" width="488" priority />
        </div>
      ))}
    </div>
  );
};

export default CardDeck;
