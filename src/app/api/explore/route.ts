import { NextResponse } from 'next/server';
import type { Destination } from '@/types';

// Mock destination data — replace with MongoDB when connected
const destinations: Destination[] = [
  {
    id: '1',
    name: 'Tokyo',
    country: 'Japan',
    image: '/destinations/tokyo.jpg',
    rating: 4.9,
    description: 'A dazzling blend of ultramodern and traditional, from neon-lit skyscrapers to serene temples.',
    tags: ['Culture', 'Food', 'Technology', 'Shopping'],
    avgCost: '$150/day',
    bestSeason: 'Mar–May, Oct–Nov',
  },
  {
    id: '2',
    name: 'Santorini',
    country: 'Greece',
    image: '/destinations/santorini.jpg',
    rating: 4.8,
    description: 'Iconic white-washed buildings overlooking the Aegean Sea with breathtaking sunsets.',
    tags: ['Romance', 'Beach', 'Luxury', 'Photography'],
    avgCost: '$200/day',
    bestSeason: 'Jun–Sep',
  },
  {
    id: '3',
    name: 'Bali',
    country: 'Indonesia',
    image: '/destinations/bali.jpg',
    rating: 4.7,
    description: 'Lush rice terraces, ancient temples, and vibrant nightlife on the Island of Gods.',
    tags: ['Adventure', 'Nature', 'Wellness', 'Budget'],
    avgCost: '$60/day',
    bestSeason: 'Apr–Oct',
  },
  {
    id: '4',
    name: 'Paris',
    country: 'France',
    image: '/destinations/paris.jpg',
    rating: 4.8,
    description: 'The City of Light — world-class art, cuisine, architecture, and timeless romance.',
    tags: ['Culture', 'Romance', 'Food', 'Art'],
    avgCost: '$180/day',
    bestSeason: 'Apr–Jun, Sep–Oct',
  },
  {
    id: '5',
    name: 'Swiss Alps',
    country: 'Switzerland',
    image: '/destinations/swiss.jpg',
    rating: 4.9,
    description: 'Majestic mountain landscapes, world-class skiing, and charming alpine villages.',
    tags: ['Mountains', 'Adventure', 'Luxury', 'Nature'],
    avgCost: '$250/day',
    bestSeason: 'Dec–Mar, Jun–Sep',
  },
  {
    id: '6',
    name: 'Maldives',
    country: 'Maldives',
    image: '/destinations/maldives.jpg',
    rating: 4.9,
    description: 'Crystal-clear waters, overwater villas, and unparalleled tropical luxury.',
    tags: ['Beach', 'Luxury', 'Romance', 'Diving'],
    avgCost: '$350/day',
    bestSeason: 'Nov–Apr',
  },
];

export async function GET() {
  return NextResponse.json({ destinations });
}
