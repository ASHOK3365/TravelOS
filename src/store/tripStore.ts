import { create } from 'zustand';
import type { Trip } from '@/types/trip';

const sampleTrip: Trip = {
  id: '1',
  tripName: 'Goa Adventure',
  destination: 'Goa, India',
  startDate: '2026-06-15',
  endDate: '2026-06-19',
  travelers: 4,
  status: 'planning',
  budget: {
    total: 45000,
    spent: 18500,
    categories: { food: 5200, transport: 4800, activities: 3500, accommodation: 4000, shopping: 1000 },
  },
  weather: [
    { day: 1, temp: 32, condition: 'sunny', high: 34, low: 27, humidity: 72 },
    { day: 2, temp: 30, condition: 'partly-cloudy', high: 32, low: 26, humidity: 78 },
    { day: 3, temp: 28, condition: 'rainy', high: 30, low: 25, humidity: 88 },
    { day: 4, temp: 31, condition: 'sunny', high: 33, low: 27, humidity: 70 },
  ],
  days: [
    {
      day: 1, date: '2026-06-15',
      activities: [
        { id: 'a1', time: '08:00 AM', title: 'Breakfast at Artjuna', description: 'Garden café with organic menu', cost: 800, location: 'Anjuna', category: 'food', duration: '1h' },
        { id: 'a2', time: '10:00 AM', title: 'Chapora Fort Trek', description: 'Iconic Dil Chahta Hai fort with panoramic views', cost: 0, location: 'Chapora', category: 'sightseeing', duration: '2h' },
        { id: 'a3', time: '01:00 PM', title: 'Lunch at Gunpowder', description: 'South Indian cuisine by the river', cost: 1200, location: 'Assagao', category: 'food', duration: '1.5h' },
        { id: 'a4', time: '04:00 PM', title: 'Anjuna Beach & Water Sports', description: 'Parasailing and jet ski adventures', cost: 3500, location: 'Anjuna Beach', category: 'activity', duration: '3h' },
        { id: 'a5', time: '08:00 PM', title: 'Dinner at Thalassa', description: 'Greek restaurant with sunset views', cost: 2000, location: 'Vagator', category: 'food', duration: '2h' },
      ],
    },
    {
      day: 2, date: '2026-06-16',
      activities: [
        { id: 'b1', time: '09:00 AM', title: 'Old Goa Heritage Walk', description: 'Basilica of Bom Jesus & Se Cathedral', cost: 200, location: 'Old Goa', category: 'sightseeing', duration: '3h' },
        { id: 'b2', time: '12:30 PM', title: 'Lunch at Vinayak', description: 'Famous fish thali spot', cost: 600, location: 'Panjim', category: 'food', duration: '1h' },
        { id: 'b3', time: '02:00 PM', title: 'Fontainhas Latin Quarter', description: 'Colorful Portuguese colonial streets', cost: 0, location: 'Panjim', category: 'sightseeing', duration: '2h' },
        { id: 'b4', time: '05:00 PM', title: 'Dona Paula Jetty', description: 'Scenic viewpoint', cost: 100, location: 'Dona Paula', category: 'sightseeing', duration: '1h' },
        { id: 'b5', time: '08:00 PM', title: 'Casino Night', description: 'Deltin Royale floating casino', cost: 3000, location: 'Panjim', category: 'activity', duration: '4h' },
      ],
    },
    {
      day: 3, date: '2026-06-17',
      activities: [
        { id: 'c1', time: '07:00 AM', title: 'Dudhsagar Falls Trip', description: 'Jeep safari to the majestic waterfall', cost: 2500, location: 'Mollem', category: 'activity', duration: '6h' },
        { id: 'c2', time: '02:00 PM', title: 'Spice Plantation Visit', description: 'Guided tour with traditional lunch', cost: 800, location: 'Ponda', category: 'activity', duration: '2h' },
        { id: 'c3', time: '06:00 PM', title: 'Sunset at Palolem Beach', description: 'Crescent shaped beach in South Goa', cost: 0, location: 'Palolem', category: 'sightseeing', duration: '2h' },
      ],
    },
    {
      day: 4, date: '2026-06-18',
      activities: [
        { id: 'd1', time: '09:00 AM', title: 'Flea Market Shopping', description: 'Saturday Night Market for souvenirs', cost: 2000, location: 'Arpora', category: 'shopping', duration: '2h' },
        { id: 'd2', time: '12:00 PM', title: 'Brunch at Cafe Bodega', description: 'Art gallery café in heritage house', cost: 900, location: 'Assagao', category: 'food', duration: '1.5h' },
        { id: 'd3', time: '03:00 PM', title: 'Scuba Diving', description: 'Explore underwater marine life', cost: 4500, location: 'Grande Island', category: 'activity', duration: '3h' },
      ],
    },
  ],
};

interface TripState {
  trips: Trip[];
  activeTrip: Trip | null;
  activeDayIndex: number;
  isLoading: boolean;
  setActiveTrip: (trip: Trip) => void;
  setActiveDayIndex: (index: number) => void;
  setLoading: (v: boolean) => void;
}

export const useTripStore = create<TripState>((set) => ({
  trips: [sampleTrip],
  activeTrip: sampleTrip,
  activeDayIndex: 0,
  isLoading: false,
  setActiveTrip: (trip) => set({ activeTrip: trip, activeDayIndex: 0 }),
  setActiveDayIndex: (index) => set({ activeDayIndex: index }),
  setLoading: (v) => set({ isLoading: v }),
}));
