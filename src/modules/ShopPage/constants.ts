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
    image: '/images/model1.png',
    title: 'AeroVision Pro',
    description: 'For professional filmmakers & photographers',
    price: '$1,000',
  },
  {
    image: '/images/model2.png',
    title: 'SkyRacer X',
    description: 'High-speed drone for racing enthusiasts',
    price: '$1,000',
  },
  {
    image: '/images/model3.png',
    title: 'Explorer Mini',
    description: 'Compact and easy-to-use for beginners',
    price: '$1,000',
  },
  {
    image: '/images/model4.png',
    title: 'IndustrialX Pro',
    description: 'Ideal for industrial, security, and rescue operations',
    price: '$2,499',
  },
  {
    image: '/images/model5.png',
    title: 'Smart Controller Pro',
    description: 'Compact and easy-to-use for beginners',
    price: '$1,000',
  },
];

export const COLLECTION_ITEMS = [
  {
    image: '/images/drone1.png',
    title: 'AeroGlide',
    subtitle: 'Limited Edition',
  },
  {
    image: '/images/drone2.png',
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