import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 'tech-runner-pro',
    name: 'TechRunner Pro X',
    price: 4999,
    description: 'Advanced running shoes with responsive cushioning',
    longDescription: 'The TechRunner Pro X combines cutting-edge technology with urban style. Featuring our most responsive cushioning system and breathable tech-mesh upper, these shoes are perfect for both athletic performance and street-ready style.',
    mainImage: '/images/products/shoes/tech-runner-pro.jpg',
    images: [
      '/images/products/shoes/tech-runner-pro-1.jpg',
      '/images/products/shoes/tech-runner-pro-2.jpg',
      '/images/products/shoes/tech-runner-pro-3.jpg',
    ],
    category: 'men',
    type: 'shoes',
    colors: ['#000000', '#FFFFFF', '#808080'],
    sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11'],
    features: [
      'Responsive cushioning',
      'Breathable tech-mesh',
      'Water-resistant coating',
      'Anti-slip sole'
    ],
    specs: {
      material: 'Tech-mesh, Synthetic',
      waterproof: true,
      weight: '280g',
      care: [
        'Spot clean with mild detergent',
        'Air dry only',
        'Brush to maintain appearance'
      ]
    },
    stock: 45,
    rating: 4.8,
    reviews: 128
  },
  {
    id: 'urban-force-1',
    name: 'Urban Force One',
    price: 5499,
    description: 'Military-inspired urban tactical boots',
    longDescription: 'Dominate the urban landscape with these tactical-inspired boots...',
    mainImage: '/images/products/shoes/urban-force.jpg',
    images: [
      '/images/products/shoes/urban-force-1.jpg',
      '/images/products/shoes/urban-force-2.jpg',
      '/images/products/shoes/urban-force-3.jpg',
    ],
    category: 'men',
    type: 'shoes',
    colors: ['#000000', '#3A3A3A', '#5A5A5A'],
    sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11', 'US 12'],
    features: [
      'Water-resistant tactical mesh',
      'Reinforced toe cap',
      'Anti-slip combat sole',
      'Quick-lace system'
    ],
    specs: {
      material: 'Tactical mesh, Reinforced leather',
      waterproof: true,
      weight: '320g',
      care: [
        'Clean with soft brush',
        'Water-resistant treatment recommended',
        'Store in dry place'
      ]
    },
    stock: 35,
    rating: 4.9,
    reviews: 89
  },
  {
    id: 'stealth-runner-w',
    name: 'Stealth Runner',
    price: 4499,
    description: 'Sleek and lightweight women\'s running shoes',
    longDescription: 'Engineered for the modern urban woman, the Stealth Runner combines...',
    mainImage: '/images/products/women/shoe1.jpg',
    images: [
      '/images/products/women/shoe1.jpg',
      '/images/products/women/shoe1-2.jpg',
      '/images/products/women/shoe1-3.jpg',
    ],
    category: 'women',
    type: 'shoes',
    colors: ['#FF0000', '#000000', '#FFFFFF'],
    sizes: ['US 5', 'US 6', 'US 7', 'US 8', 'US 9'],
    features: [
      'Ultra-lightweight design',
      'Breathable mesh upper',
      'Cushioned midsole',
      'Reflective details'
    ],
    specs: {
      material: 'Performance mesh, Synthetic',
      waterproof: false,
      weight: '240g',
      care: [
        'Machine washable',
        'Air dry',
        'Avoid direct sunlight'
      ]
    },
    stock: 42,
    rating: 4.7,
    reviews: 156
  },
  {
    id: 'future-step',
    name: 'FutureStep',
    price: 4999,
    description: 'Next-generation urban performance shoes',
    longDescription: 'The FutureStep represents the pinnacle of urban footwear technology, combining cutting-edge materials with futuristic design elements for unparalleled style and comfort.',
    mainImage: '/images/products/shoe1.jpg',
    images: [
      '/images/products/shoe1.jpg',
      '/images/products/shoe1-2.jpg',
      '/images/products/shoe1-3.jpg',
    ],
    category: 'unisex',
    type: 'shoes',
    colors: ['#000000', '#FFFFFF', '#808080'],
    sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11'],
    features: [
      'Advanced cushioning system',
      'Breathable knit upper',
      'Reflective details',
      'Adaptive fit technology'
    ],
    specs: {
      material: 'Knit textile, Synthetic',
      waterproof: true,
      weight: '260g',
      care: [
        'Gentle machine wash',
        'Air dry only',
        'Regular cleaning recommended'
      ]
    },
    stock: 55,
    rating: 4.9,
    reviews: 234
  },
  {
    id: 'urban-grip',
    name: 'UrbanGrip',
    price: 5999,
    description: 'Premium urban tactical footwear',
    longDescription: 'The UrbanGrip combines military-grade durability with street-ready style, featuring advanced grip technology and weather-resistant materials.',
    mainImage: '/images/products/shoe2.jpg',
    images: [
      '/images/products/shoe2.jpg',
      '/images/products/shoe2-2.jpg',
      '/images/products/shoe2-3.jpg',
    ],
    category: 'unisex',
    type: 'shoes',
    colors: ['#000000', '#3A3A3A', '#5A5A5A'],
    sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11', 'US 12'],
    features: [
      'Military-grade materials',
      'All-terrain grip',
      'Waterproof construction',
      'Reinforced support system'
    ],
    specs: {
      material: 'Ballistic nylon, Rubber',
      waterproof: true,
      weight: '340g',
      care: [
        'Brush clean only',
        'Water-resistant spray recommended',
        'Store in dry place'
      ]
    },
    stock: 40,
    rating: 4.8,
    reviews: 186
  },
  {
    id: 'stealth-max',
    name: 'StealthMax',
    price: 6499,
    description: 'Minimalist high-performance sneakers',
    longDescription: 'The StealthMax delivers uncompromising performance in a sleek package, featuring our most advanced lightweight materials and stealth-inspired design.',
    mainImage: '/images/products/shoe3.jpg',
    images: [
      '/images/products/shoe3.jpg',
      '/images/products/shoe3-2.jpg',
      '/images/products/shoe3-3.jpg',
    ],
    category: 'unisex',
    type: 'shoes',
    colors: ['#000000', '#1A1A1A', '#333333'],
    sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11'],
    features: [
      'Ultra-lightweight construction',
      'Stealth profile design',
      'Enhanced breathability',
      'Precision fit system'
    ],
    specs: {
      material: 'Advanced mesh, Carbon fiber',
      waterproof: false,
      weight: '220g',
      care: [
        'Hand wash only',
        'Air dry',
        'Regular maintenance required'
      ]
    },
    stock: 30,
    rating: 4.9,
    reviews: 158
  },
  {
    id: 'night-runner',
    name: 'NightRunner',
    price: 4999,
    description: 'Visibility-enhanced urban runners',
    longDescription: 'The NightRunner excels in low-light conditions with its advanced reflective technology while maintaining a stylish profile for daytime use.',
    mainImage: '/images/products/shoe4.jpg',
    images: [
      '/images/products/shoe4.jpg',
      '/images/products/shoe4-2.jpg',
      '/images/products/shoe4-3.jpg',
    ],
    category: 'unisex',
    type: 'shoes',
    colors: ['#000000', '#333333', '#666666'],
    sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11'],
    features: [
      '360° reflective elements',
      'Night-vision optimized',
      'Cushioned support',
      'Weather-resistant coating'
    ],
    specs: {
      material: 'Reflective mesh, Rubber',
      waterproof: true,
      weight: '290g',
      care: [
        'Wipe clean',
        'Avoid harsh detergents',
        'Store away from direct light'
      ]
    },
    stock: 45,
    rating: 4.7,
    reviews: 142
  },
  // Backpacks
  {
    id: 'tech-pack-pro',
    name: 'TechPack Pro',
    price: 3999,
    description: 'Smart urban backpack with tech organization',
    longDescription: 'The TechPack Pro is designed for the modern digital nomad, featuring dedicated compartments for all your devices, water-resistant materials, and smart organization.',
    mainImage: '/images/products/backpacks/techpack-pro.jpg',
    images: [
      '/images/products/backpacks/techpack-pro.jpg',
      '/images/products/backpacks/techpack-pro-2.jpg',
      '/images/products/backpacks/techpack-pro-3.jpg',
    ],
    category: 'unisex',
    type: 'backpacks',
    colors: ['#000000', '#505050', '#000080'],
    sizes: ['20L', '25L', '30L'],
    features: [
      'Laptop compartment (up to 17")',
      'USB charging port',
      'Anti-theft design',
      'Waterproof zippers'
    ],
    specs: {
      material: 'Ballistic Nylon, YKK zippers',
      waterproof: true,
      weight: '1.2kg',
      care: [
        'Spot clean with mild soap',
        'Air dry only',
        'Do not machine wash'
      ]
    },
    stock: 25,
    rating: 4.8,
    reviews: 95
  },
  {
    id: 'urban-explorer',
    name: 'Urban Explorer',
    price: 4499,
    description: 'Versatile backpack for city adventures',
    longDescription: 'Perfect for urban explorers, this backpack combines style with functionality, featuring expandable storage and weather-resistant construction.',
    mainImage: '/images/products/backpacks/urban-explorer.jpg',
    images: [
      '/images/products/backpacks/urban-explorer.jpg',
      '/images/products/backpacks/urban-explorer-2.jpg',
      '/images/products/backpacks/urban-explorer-3.jpg',
    ],
    category: 'unisex',
    type: 'backpacks',
    colors: ['#1A1A1A', '#383838', '#585858'],
    sizes: ['25L', '30L', '35L'],
    features: [
      'Expandable design',
      'Hidden pockets',
      'Breathable back panel',
      'Luggage strap'
    ],
    specs: {
      material: 'Cordura fabric, Metal hardware',
      waterproof: true,
      weight: '1.4kg',
      care: [
        'Hand wash only',
        'Hang dry',
        'Regular maintenance recommended'
      ]
    },
    stock: 30,
    rating: 4.9,
    reviews: 78
  },
  // Clothes
  {
    id: 'tech-jacket',
    name: 'TechWear Jacket',
    price: 7999,
    description: 'Advanced urban protection jacket',
    longDescription: 'Combining cutting-edge materials with urban styling, this jacket offers supreme weather protection and adaptable functionality.',
    mainImage: '/images/products/clothes/tech-jacket.jpg',
    images: [
      '/images/products/clothes/tech-jacket.jpg',
      '/images/products/clothes/tech-jacket-2.jpg',
      '/images/products/clothes/tech-jacket-3.jpg',
    ],
    category: 'men',
    type: 'clothes',
    colors: ['#000000', '#1A1A1A', '#333333'],
    sizes: ['S', 'M', 'L', 'XL'],
    features: [
      'Waterproof membrane',
      'Articulated sleeves',
      'Magnetic closures',
      'Multiple storage solutions'
    ],
    specs: {
      material: 'Gore-Tex Pro, YKK zippers',
      waterproof: true,
      weight: '650g',
      care: [
        'Machine wash cold',
        'Tumble dry low',
        'Do not iron'
      ]
    },
    stock: 20,
    rating: 4.9,
    reviews: 45
  },
  {
    id: 'cargo-pants',
    name: 'Urban Cargo Pants',
    price: 3499,
    description: 'Technical urban cargo pants',
    longDescription: 'Engineered for urban mobility, these cargo pants feature multiple secure pockets and articulated construction for unrestricted movement.',
    mainImage: '/images/products/clothes/cargo-pants.jpg',
    images: [
      '/images/products/clothes/cargo-pants.jpg',
      '/images/products/clothes/cargo-pants-2.jpg',
      '/images/products/clothes/cargo-pants-3.jpg',
    ],
    category: 'unisex',
    type: 'clothes',
    colors: ['#000000', '#343434', '#666666'],
    sizes: ['28', '30', '32', '34', '36'],
    features: [
      'Articulated knees',
      'Water-repellent finish',
      'YKK zippers',
      'Multiple cargo pockets'
    ],
    specs: {
      material: 'Ripstop cotton blend',
      waterproof: false,
      weight: '450g',
      care: [
        'Machine wash cold',
        'Hang dry',
        'Iron on low'
      ]
    },
    stock: 35,
    rating: 4.7,
    reviews: 62
  },
  {
    id: 'tech-hoodie',
    name: 'TechFleece Hoodie',
    price: 2999,
    description: 'Advanced thermal regulation hoodie',
    longDescription: 'Featuring our innovative TechFleece material, this hoodie provides superior warmth without bulk and includes smart storage solutions.',
    mainImage: '/images/products/clothes/tech-hoodie.jpg',
    images: [
      '/images/products/clothes/tech-hoodie.jpg',
      '/images/products/clothes/tech-hoodie-2.jpg',
      '/images/products/clothes/tech-hoodie-3.jpg',
    ],
    category: 'unisex',
    type: 'clothes',
    colors: ['#000000', '#2C2C2C', '#4A4A4A'],
    sizes: ['S', 'M', 'L', 'XL'],
    features: [
      'TechFleece material',
      'Hidden media pocket',
      'Thumbhole cuffs',
      'Adjustable hood'
    ],
    specs: {
      material: 'TechFleece cotton blend',
      waterproof: false,
      weight: '400g',
      care: [
        'Machine wash cold',
        'Tumble dry low',
        'Do not iron hood'
      ]
    },
    stock: 40,
    rating: 4.8,
    reviews: 83
  },
  // Add more products...
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (currentProduct: Product): Product[] => {
  return products
    .filter(product => 
      product.id !== currentProduct.id && 
      (product.category === currentProduct.category || 
       product.type === currentProduct.type)
    )
    .slice(0, 4);
};

export const getProductsByCategory = (category: 'men' | 'women' | 'unisex'): Product[] => {
  return products.filter(product => product.category === category);
};

export const getBestSellers = (): Product[] => {
  return products.filter(product => 
    ['future-step', 'urban-grip', 'stealth-max', 'night-runner'].includes(product.id)
  );
};

export const getProductsByType = (type: 'shoes' | 'backpacks' | 'clothes'): Product[] => {
  return products.filter(product => product.type === type);
}; 