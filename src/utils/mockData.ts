// Mock data for development and preview
import type { User, Place, Event } from '@/types';

export const mockUser: User = {
  id: '1',
  email: 'alex@example.com',
  username: 'alexexplores',
  displayName: 'Alex Thompson',
  avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  bio: '✨ Discovering the best spots in the city\n🍕 Food lover | 🎵 Music enthusiast\n📍 New York City',
  followersCount: 14200,
  followingCount: 892,
  savedCount: 156,
  createdAt: '2024-01-15T00:00:00Z',
  updatedAt: '2024-11-28T00:00:00Z',
};

export const mockPosts = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=400&fit=crop',
    likes: 234,
    comments: 12,
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=400&fit=crop',
    likes: 567,
    comments: 34,
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=400&fit=crop',
    likes: 892,
    comments: 56,
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=400&fit=crop',
    likes: 123,
    comments: 8,
  },
  {
    id: '5',
    imageUrl: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=400&h=400&fit=crop',
    likes: 445,
    comments: 23,
  },
  {
    id: '6',
    imageUrl: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&h=400&fit=crop',
    likes: 678,
    comments: 45,
  },
  {
    id: '7',
    imageUrl: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&h=400&fit=crop',
    likes: 234,
    comments: 11,
  },
  {
    id: '8',
    imageUrl: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=400&fit=crop',
    likes: 890,
    comments: 67,
  },
  {
    id: '9',
    imageUrl: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400&h=400&fit=crop',
    likes: 345,
    comments: 19,
  },
];

export const mockHighlights = [
  { id: '1', title: 'Food', imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=100&h=100&fit=crop' },
  { id: '2', title: 'Travel', imageUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=100&h=100&fit=crop' },
  { id: '3', title: 'Music', imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=100&h=100&fit=crop' },
  { id: '4', title: 'Art', imageUrl: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=100&h=100&fit=crop' },
  { id: '5', title: 'Nightlife', imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=100&h=100&fit=crop' },
];

export const mockPlaces: Place[] = [
  {
    id: '1',
    name: 'The Golden Fork',
    description: 'Upscale Italian dining with a modern twist. Known for handmade pasta and extensive wine selection.',
    category: 'restaurant',
    location: {
      latitude: 40.7128,
      longitude: -74.006,
      address: '123 Main St',
      city: 'New York',
      state: 'NY',
    },
    imageUrls: ['https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800'],
    rating: 4.8,
    reviewCount: 324,
    priceLevel: 3,
    aiScore: 95,
    tags: ['Italian', 'Fine Dining', 'Date Night', 'Wine Bar'],
    isSaved: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-11-28T00:00:00Z',
  },
  {
    id: '2',
    name: 'Rooftop Sessions',
    description: 'Trendy rooftop bar with panoramic city views. Live DJ sets on weekends.',
    category: 'bar',
    location: {
      latitude: 40.7580,
      longitude: -73.9855,
      address: '456 Sky Ave',
      city: 'New York',
      state: 'NY',
    },
    imageUrls: ['https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800'],
    rating: 4.6,
    reviewCount: 189,
    priceLevel: 2,
    aiScore: 88,
    tags: ['Rooftop', 'Cocktails', 'Live Music', 'Views'],
    isSaved: false,
    createdAt: '2024-02-15T00:00:00Z',
    updatedAt: '2024-11-28T00:00:00Z',
  },
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Jazz Night at Blue Note',
    description: 'An evening of smooth jazz featuring local and international artists.',
    category: 'music',
    location: {
      latitude: 40.7308,
      longitude: -74.0012,
      address: '131 W 3rd St',
      city: 'New York',
      state: 'NY',
    },
    imageUrls: ['https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800'],
    startDate: '2024-12-15T20:00:00Z',
    isAllDay: false,
    isFree: false,
    price: 35,
    attendeeCount: 156,
    maxAttendees: 200,
    aiScore: 92,
    tags: ['Jazz', 'Live Music', 'Night Out'],
    isSaved: true,
    createdAt: '2024-11-01T00:00:00Z',
    updatedAt: '2024-11-28T00:00:00Z',
  },
];

export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return num.toString();
};

