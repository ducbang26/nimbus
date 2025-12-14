import { clsx } from 'clsx';
import { PropsWithChildren, Ref } from 'react';

import s from './styles.module.scss';
import {
  EFontLetterSpacing,
  ETypography,
  ETypographyColor,
  TFontSize,
  TTypographyTag,
} from '@Components/Typography/constants';

export interface IUITypographyProps extends PropsWithChildren {
  className?: string;
  typography?: ETypography;
  color?: ETypographyColor;
  size?: TFontSize;
  letterSpacing?: EFontLetterSpacing;
  tag?: TTypographyTag;
  ref?: Ref<HTMLParagraphElement>;
}

const UITypography = ({ ref, ...props }: IUITypographyProps) => {
  const {
    color = ETypographyColor.NEUTRAL_950,
    size = 16,
    tag: Tag = 'p',
    letterSpacing,
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
