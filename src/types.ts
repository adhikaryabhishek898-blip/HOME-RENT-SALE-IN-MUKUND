export interface Property {
  id: string;
  title: string;
  description: string;
  price: string;
  location: string;
  bedrooms: number;
  furnished: boolean;
  type: 'Rental' | 'Sale';
  category: '1 BHK' | '2 BHK' | 'Fully Furnished' | 'Family Apartment' | 'Flat';
  image: string;
}

export interface Review {
  id: string;
  name: string;
  comment: string;
  rating: number;
  avatar: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
