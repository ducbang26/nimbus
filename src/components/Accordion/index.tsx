import { ReactElement, useEffect, useRef, useState } from 'react';

import UIButton from '@Components/Button';
import UITypography from '@Components/Typography';
import { ETypography } from '@Components/Typography/constants';
import { clsx } from 'clsx';

import s from './styles.module.scss';

interface IUIAccordionProps {
  title: string;
  content: ReactElement;
}

const UIAccordion = ({ title, content }: IUIAccordionProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.height = isOpen ? `${contentRef.current.scrollHeight}px` : '0px';
    }
  }, [isOpen]);

  return (
    <>
      <UIButton variant="text" onClick={() => setIsOpen(!isOpen)} className={s.accordion_button}>
        <UITypography typography={ETypography.TEXT_24_MEDIUM}>{title}</UITypography>
        <div className={s.accordion_icon_container}>
          <span className={clsx(s.accordion_icon_line)} />
          <span className={clsx(s.accordion_icon_line, isOpen && s.accordion_icon_line__open)} />
        </div>
      </UIButton>
      <div ref={contentRef} className={s.accordion_content}>
        <div className="mb_8" />
        {content}
      </div>
    </>
  );
};

export default UIAccordion;
