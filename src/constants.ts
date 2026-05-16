import { Property, Review, Feature } from './types';

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Modern 1 BHK Apartment',
    description: 'Beautifully designed 1 BHK with modern amenities in the heart of Mukundapur.',
    price: '₹12,000 / month',
    location: 'Mukundapur, Kolkata',
    bedrooms: 1,
    furnished: false,
    type: 'Rental',
    category: '1 BHK',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Spacious 2 BHK Family Flat',
    description: 'Perfect for families, this 2 BHK offers plenty of space and natural light.',
    price: '₹18,000 / month',
    location: 'Mukundapur, Kolkata',
    bedrooms: 2,
    furnished: false,
    type: 'Rental',
    category: '2 BHK',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Fully Furnished Luxury Room',
    description: 'Move-in ready room with premium furniture and high-speed internet.',
    price: '₹15,000 / month',
    location: 'Mukundapur, Kolkata',
    bedrooms: 1,
    furnished: true,
    type: 'Rental',
    category: 'Fully Furnished',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'Premium 3 BHK for Sale',
    description: 'A great investment opportunity. Luxurious 3 BHK apartment with parking.',
    price: '₹75,00,000',
    location: 'Mukundapur, Kolkata',
    bedrooms: 3,
    furnished: false,
    type: 'Sale',
    category: 'Flat',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: '5',
    title: 'Family Apartment with Balcony',
    description: 'Beautiful apartment with a spacious balcony overlooking the city.',
    price: '₹22,000 / month',
    location: 'Mukundapur, Kolkata',
    bedrooms: 2,
    furnished: true,
    type: 'Rental',
    category: 'Family Apartment',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: '6',
    title: 'Cozy Studio Room',
    description: 'Economical and semi-furnished room, ideal for students or young professionals.',
    price: '₹8,000 / month',
    location: 'Mukundapur, Kolkata',
    bedrooms: 1,
    furnished: false,
    type: 'Rental',
    category: 'Flat',
    image: 'https://images.unsplash.com/photo-1536376074432-bf12585b057c?q=80&w=2070&auto=format&fit=crop',
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Abhishek Roy',
    comment: 'Excellent service and professional behavior. Found my perfect home within a week!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=abhishek',
  },
  {
    id: '2',
    name: 'Priya Sharma',
    comment: 'Very smooth property booking experience. The team is very helpful and transparent.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=priya',
  },
  {
    id: '3',
    name: 'Rahul Das',
    comment: 'Affordable rooms with authentic service. Highly recommend for students in Mukundapur.',
    rating: 4,
    avatar: 'https://i.pravatar.cc/150?u=rahul',
  }
];

export const FEATURES: Feature[] = [
  {
    id: '1',
    title: 'Verified Properties',
    description: 'All our listings go through a strict verification process.',
    iconName: 'ShieldCheck',
  },
  {
    id: '2',
    title: 'Affordable Pricing',
    description: 'Best rates for rent and sale in the Mukundapur area.',
    iconName: 'Tag',
  },
  {
    id: '3',
    title: '24/7 Support',
    description: 'Our team is always available to assist you with your queries.',
    iconName: 'Headset',
  },
  {
    id: '4',
    title: 'Professional Guidance',
    description: 'Expert advice to help you make the right property decision.',
    iconName: 'UserCheck',
  }
];
