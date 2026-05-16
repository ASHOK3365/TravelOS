export interface Activity {
  id: string;
  time: string;
  title: string;
  description?: string;
  cost: number;
  location: string;
  category: 'food' | 'transport' | 'activity' | 'accommodation' | 'shopping' | 'sightseeing';
  duration?: string;
}

export interface DayPlan {
  day: number;
  date?: string;
  activities: Activity[];
}

export interface Budget {
  total: number;
  spent: number;
  categories: {
    food: number;
    transport: number;
    activities: number;
    accommodation: number;
    shopping: number;
  };
}

export interface WeatherInfo {
  day: number;
  temp: number;
  condition: 'sunny' | 'cloudy' | 'rainy' | 'stormy' | 'snowy' | 'partly-cloudy';
  high: number;
  low: number;
  humidity: number;
}

export interface Trip {
  id: string;
  tripName: string;
  destination: string;
  startDate: string;
  endDate: string;
  days: DayPlan[];
  budget: Budget;
  weather: WeatherInfo[];
  travelers: number;
  status: 'planning' | 'active' | 'completed';
}
