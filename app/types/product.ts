export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  longDescription?: string;
  images: string[];
  mainImage: string;
  category: 'men' | 'women' | 'unisex';
  type: 'shoes' | 'backpacks' | 'clothes';
  colors: string[];
  sizes: string[];
  features: string[];
  specs: {
    material: string;
    waterproof: boolean;
    weight: string;
    care: string[];
  };
  stock: number;
  rating: number;
  reviews: number;
} 