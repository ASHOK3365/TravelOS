// ─── TravelOS Type Definitions ───

export interface User {
  _id: string;
  name: string;
  email: string;
  avatar?: string;
  plan: 'free' | 'pro' | 'enterprise';
  preferences: {
    travelStyle: string[];
    budget: 'budget' | 'moderate' | 'luxury';
    interests: string[];
  };
  createdAt: Date;
}

export interface Trip {
  _id: string;
  userId: string;
  title: string;
  destination: string;
  coverImage?: string;
  startDate: string;
  endDate: string;
  status: 'planning' | 'active' | 'completed';
  budget: Budget;
  days: DayPlan[];
  collaborators: string[];
  createdAt: Date;
}

export interface DayPlan {
  day: number;
  date: string;
  title: string;
  activities: Activity[];
}

export interface Activity {
  id: string;
  title: string;
  location: string;
  time: string;
  duration: string;
  cost: number;
  category: 'transport' | 'food' | 'activity' | 'stay' | 'shopping' | 'other';
  notes?: string;
  coordinates?: { lat: number; lng: number };
}

export interface Budget {
  total: number;
  spent: number;
  currency: string;
  categories: {
    transport: number;
    food: number;
    stay: number;
    activities: number;
    shopping: number;
    other: number;
  };
  expenses: Expense[];
}

export interface Expense {
  id: string;
  title: string;
  amount: number;
  category: Activity['category'];
  date: string;
  paidBy?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface WeatherData {
  city: string;
  temp: number;
  condition: string;
  humidity: number;
  wind: number;
  icon: string;
  forecast: {
    date: string;
    high: number;
    low: number;
    condition: string;
  }[];
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  rating: number;
  description: string;
  tags: string[];
  avgCost: string;
  bestSeason: string;
}
