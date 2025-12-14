import { JSX } from 'react';

export type TButtonVariant = 'solid' | 'outline' | 'ghost' | 'text' | 'icon';
export type TButtonSize = 'sm' | 'md' | 'lg';
export type TButtonColor = 'inherit' | 'primary' | 'secondary';
export type TButtonType = JSX.IntrinsicElements['button']['type'];
