import React, { PropsWithChildren, Ref } from 'react';
import {
  EFontLetterSpacing,
  ETypography,
  ETypographyColor,
  TFontSize,
  TLineHeight,
  TTypographyTag,
} from '@Components/Typography/constants';
import { clsx } from 'clsx';

import s from './styles.module.scss';

export interface IUITypographyProps extends PropsWithChildren {
  className?: string;
  typography?: ETypography;
  color?: ETypographyColor;
  size?: TFontSize;
  letterSpacing?: EFontLetterSpacing;
  lineHeight?: TLineHeight;
  tag?: TTypographyTag;
  ref?: Ref<HTMLParagraphElement>;
}

const UITypography = ({ ref, ...props }: IUITypographyProps) : React.ReactElement => {
  const {
    color = ETypographyColor.NEUTRAL_950,
    size = 16,
    tag: Tag = 'p',
    letterSpacing,
    lineHeight,
    typography = ETypography.TEXT_16_LIGHT,
    className,
    children,
    ...restProps
  } = props;
  const paragraphClassNames = clsx(
    s.paragraph,
    size && s[`paragraph__${size}`],
    color && s[`paragraph__${color}`],
    letterSpacing && s[`paragraph__${letterSpacing}`],
    lineHeight && s[`paragraph__lh_${lineHeight}`],
    typography && s[`paragraph__${typography}`],
    className
  );
  return (
    <Tag ref={ref} className={paragraphClassNames} {...restProps}>
      {children}
    </Tag>
  );
};

export default UITypography;
