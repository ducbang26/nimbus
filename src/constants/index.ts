export enum EPagePaths {
  SHOP = '/shop',
  MODELS = '/models',
  ABOUT_US = '/about-us',
  BLOGS = '/blogs',
  CONTACT = '/contact',
}

export const NAVIGATION_PAGES = [
  {
    label: 'Shop',
    href: EPagePaths.SHOP,
  },
  {
    label: 'Models',
    href: EPagePaths.MODELS,
  },
  {
    label: 'About us',
    href: EPagePaths.ABOUT_US,
  },
  {
    label: 'Blogs',
    href: EPagePaths.BLOGS,
  },
  {
    label: 'Contact',
    href: EPagePaths.CONTACT,
  },
];

export const BLACK_HEADER_PAGES = [
  EPagePaths.ABOUT_US,
  EPagePaths.CONTACT,
];