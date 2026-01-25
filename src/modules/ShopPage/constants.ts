export enum EModelFilter {
  ALL = 'all',
  GARGET = 'garget',
  FANS = 'fans',
  CAMERA = 'camera',
  OTHER = 'other',
}

export const MODEL_FILTERS = [
  {
    label: 'All',
    value: EModelFilter.ALL,
  },
  {
    label: 'Garget',
    value: EModelFilter.GARGET,
  },
  {
    label: 'Fans',
    value: EModelFilter.FANS,
  },
  {
    label: 'Camera',
    value: EModelFilter.CAMERA,
  },
  {
    label: 'Other Items',
    value: EModelFilter.OTHER,
  },
];

export const MOCK_ITEMS = [
  {
    id: 1,
    image: '/images/drone1.png',
    title: 'AeroVision Pro',
    description: 'For professional filmmakers & photographers',
    price: '$1,000',
  },
  {
    id: 2,
    image: '/images/drone2.png',
    title: 'SkyRacer X',
    description: 'High-speed drone for racing enthusiasts',
    price: '$1,000',
  },
  {
    id: 3,
    image: '/images/drone3.png',
    title: 'Explorer Mini',
    description: 'Compact and easy-to-use for beginners',
    price: '$1,000',
  },
  {
    id: 4,
    image: '/images/drone4.png',
    title: 'IndustrialX Pro',
    description: 'Ideal for industrial, security, and rescue operations',
    price: '$2,499',
  },
  {
    id: 5,
    image: '/images/drone5.png',
    title: 'Smart Controller Pro',
    description: 'Compact and easy-to-use for beginners',
    price: '$1,000',
  },
  {
    id: 6,
    image: '/images/drone6.png',
    title: 'FalconEye Ultra 8K',
    description: 'Compact and easy-to-use for beginners',
    price: '$1,000',
  },
  {
    id: 7,
    image: '/images/drone7.png',
    title: 'SkyMaster X9',
    description: 'Compact and easy-to-use for beginners',
    price: '$1,000',
  },
  {
    id: 8,
    image: '/images/drone8.png',
    title: 'Carrying Case',
    description: 'Compact and easy-to-use for beginners',
    price: '$1,000',
  },
  {
    id: 9,
    image: '/images/drone9.png',
    title: 'HawkX Stealth',
    description: 'Compact and easy-to-use for beginners',
    price: '$1,000',
  },
  {
    id: 10,
    image: '/images/drone10.png',
    title: 'TitanX Explorer',
    description: 'Compact and easy-to-use for beginners',
    price: '$1,000',
  },
];

export const COLLECTION_ITEMS = [
  {
    image: '/images/shop-collection1.png',
    title: 'AeroGlide',
    subtitle: 'Limited Edition',
  },
  {
    image: '/images/shop-collection2.png',
    title: 'SkyBotics X',
    subtitle: '2025',
  },
  {
    image: '/images/drone3.png',
    title: 'AeroVision Pro',
    subtitle: 'Professional',
  },
  {
    image: '/images/drone4.png',
    title: 'SkyRacer X',
    subtitle: 'Racing Edition',
  },
];
