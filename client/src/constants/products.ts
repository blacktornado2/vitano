import type { Product } from '@types';
import hingFront from '@assets/hingfront.jpeg';
import hingBack from '@assets/hingback.jpg';

// Product data - replace with API call later
export const PRODUCT: Product = {
  id: '1',
  name: 'Vitano Pure Hing (Asafoetida)',
  description:
    'Handcrafted, 100% pure and unadulterated Hing made fresh in-house. Our premium asafoetida delivers an authentic, robust aroma and flavour to elevate your everyday cooking.',
  price: 105,
  image: hingFront,
  images: [hingFront, hingBack],
  category: 'Spices',
  stock: 50,
  rating: 4.8,
  reviews: 64,
};
