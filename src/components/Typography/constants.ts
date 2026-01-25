export type TFontSize = 14 | 16 | 20 | 24 | 32 | 40 | 100;
export type TLineHeight = 'auto' | 20 | 24 | 28 | 48 | 60 | 100;
export type TTypographyTag = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export enum ETypography {
  TEXT_100_LIGHT = 'text_100_light',
  TEXT_52_LIGHT = 'text_52_light',
  TEXT_40_REGULAR = 'text_40_regular',
  TEXT_36_LIGHT = 'text_36_light',
  TEXT_32_REGULAR = 'text_32_regular',
  TEXT_32_LIGHT = 'text_32_light',
  TEXT_28_REGULAR = 'text_28_regular',
  TEXT_24_MEDIUM = 'text_24_medium',
  TEXT_24_REGULAR = 'text_24_regular',
  TEXT_24_LIGHT = 'text_24_light',
  TEXT_20_MEDIUM = 'text_20_medium',
  TEXT_20_REGULAR = 'text_20_regular',
  TEXT_20_LIGHT = 'text_20_light',
  TEXT_16_MEDIUM = 'text_16_medium',
  TEXT_16_LIGHT = 'text_16_light',
  TEXT_14_MEDIUM = 'text_14_medium',
  TEXT_14_LIGHT = 'text_14_light',
  TEXT_12_LIGHT = 'text_12_light',
}

export enum ETypographyColor {
  INHERIT = 'inherit',
  WHITE = 'white',
  NEUTRAL_300 = 'neutral_300',
  NEUTRAL_400 = 'neutral_400',
  NEUTRAL_500 = 'neutral_500',
  NEUTRAL_950 = 'neutral_950',
}

export enum EFontWeight {
  LIGHT = 'fw_light',
  REGULAR = 'fw_regular',
  MEDIUM = 'fw_medium',
  SEMIBOLD = 'fw_semibold',
  BOLD = 'fw_bold',
}

export enum EFontStyle {
  NORMAL = 'normal',
  ITALIC = 'italic',
}

export enum EFontLetterSpacing {
  NONE = 'ls_none',
  S = 'ls_s',
  M = 'ls_m',
  L = 'ls_l',
}
