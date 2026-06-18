import React from 'react';

import { ETypographyColor } from '@Components/Typography/constants';
import { clsx } from 'clsx';

import { TButtonColor, TButtonSize, TButtonType, TButtonVariant } from './constants';
import s from './styles.module.scss';

export interface ButtonProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'size' | 'color'
> {
  type?: TButtonType;
  size?: TButtonSize;
  iconSize?: TButtonSize;
  variant?: TButtonVariant;
  color?: TButtonColor | ETypographyColor;
  loading?: boolean;
  stretch?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
}

const UIButton = (props: ButtonProps): React.ReactElement => {
  const {
    children,
    type = 'button',
    disabled,
    variant = 'solid',
    className,
    size = 'md',
    iconSize = 'md',
    loading,
    stretch,
    color = 'primary',
    ...restProps
  } = props;

  return (
    <button
      {...restProps}
      disabled={loading || disabled}
      type={type || 'button'}
      className={clsx(
        s.button,
        s[variant],
        s[size],
        variant === 'icon' && s[`iconSize_${iconSize}`],
        loading ? s.loading : null,
        color ? s[color] : null,
        disabled || loading ? s.disabled : null,
        stretch ? s.stretch : null,
        className,
        !disabled && 'js-button'
      )}
    >
      {loading && (
        <span className={s.loader}>
          <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
            <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" />
          </svg>
        </span>
      )}
      {children}
    </button>
  );
};

export default UIButton;
