'use client';

import { motion } from 'framer-motion';
import { MapPin, Star, Search, SlidersHorizontal, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const destinations = [
  { id: '1', name: 'Tokyo',       country: 'Japan',       rating: 4.9, tags: ['Culture', 'Food', 'Tech'],      avgCost: '$150/day', bestSeason: 'Mar–May',     emoji: '🗼' },
  { id: '2', name: 'Santorini',   country: 'Greece',      rating: 4.8, tags: ['Romance', 'Beach', 'Luxury'],   avgCost: '$200/day', bestSeason: 'Jun–Sep',     emoji: '🏛️' },
  { id: '3', name: 'Bali',        country: 'Indonesia',   rating: 4.7, tags: ['Adventure', 'Nature', 'Budget'],avgCost: '$60/day',  bestSeason: 'Apr–Oct',     emoji: '🌴' },
  { id: '4', name: 'Paris',       country: 'France',      rating: 4.8, tags: ['Culture', 'Romance', 'Art'],    avgCost: '$180/day', bestSeason: 'Apr–Jun',     emoji: '🗼' },
  { id: '5', name: 'Swiss Alps',  country: 'Switzerland', rating: 4.9, tags: ['Mountains', 'Adventure', 'Luxury'], avgCost: '$250/day', bestSeason: 'Dec–Mar', emoji: '⛰️' },
  { id: '6', name: 'Maldives',    country: 'Maldives',    rating: 4.9, tags: ['Beach', 'Luxury', 'Diving'],    avgCost: '$350/day', bestSeason: 'Nov–Apr',     emoji: '🏝️' },
];

const filters = ['All', 'Beach', 'Mountains', 'Culture', 'Luxury', 'Adventure', 'Budget'];

export default function ExplorePage() {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = destinations.filter((d) => {
    const matchSearch = d.name.toLowerCase().includes(search.toLowerCase()) ||
                       d.country.toLowerCase().includes(search.toLowerCase());
    const matchFilter = activeFilter === 'All' || d.tags.some((t) => t.toLowerCase() === activeFilter.toLowerCase());
    return matchSearch && matchFilter;
  });

  return (
    <main className="relative min-h-screen">
      <Navbar />

      <div className="pt-[120px] pb-32 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-[clamp(2.2rem,5vw,3.5rem)] font-bold tracking-tight">
            Explore <span className="gradient-text">Destinations</span>
          </h1>
          <p className="text-white/40 text-lg mt-3 max-w-lg">Discover your next adventure. AI-curated places matched to your travel style.</p>
        </motion.div>

        {/* Search & Filters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col md:flex-row gap-4 mb-10"
        >
          <div className="relative flex-1">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search destinations..."
              className="w-full h-14 bg-white/[0.03] border border-white/[0.06] rounded-2xl pl-14 pr-6 text-[15px] text-white placeholder-white/25 outline-none focus:border-[#42C2FF]/30 transition-colors"
            />
          </div>
          <button className="h-14 px-6 bg-white/[0.03] border border-white/[0.06] rounded-2xl flex items-center gap-2 text-white/50 hover:text-white hover:border-white/[0.1] transition-colors">
            <SlidersHorizontal className="w-4 h-4" />
            <span className="text-[14px] font-medium">Filters</span>
          </button>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2.5 rounded-full text-[13px] font-medium transition-all ${
                activeFilter === f
                  ? 'bg-white text-[#050816]'
                  : 'bg-white/[0.04] text-white/50 border border-white/[0.06] hover:bg-white/[0.08] hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((dest, i) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i }}
              className="clay-card group overflow-hidden"
            >
              {/* Image Placeholder */}
              <div className="h-48 relative overflow-hidden rounded-t-[32px] bg-gradient-to-br from-[#42C2FF]/10 via-[#6E5BFF]/10 to-[#A855F7]/10">
                <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-60 group-hover:scale-110 transition-transform duration-500">
                  {dest.emoji}
                </div>
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/[0.1] flex items-center gap-1.5">
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  <span className="text-[12px] font-semibold text-white">{dest.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-white/35 text-[12px] font-medium mb-2">
                  <MapPin className="w-3 h-3" />
                  {dest.country}
                </div>
                <h3 className="text-xl font-bold tracking-tight mb-3">{dest.name}</h3>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {dest.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-[11px] text-white/50 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-5 border-t border-white/[0.06]">
                  <div>
                    <span className="text-[13px] font-semibold text-[#42C2FF]">{dest.avgCost}</span>
                    <span className="text-[11px] text-white/30 ml-2">· {dest.bestSeason}</span>
                  </div>
                  <button className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white/40 hover:bg-[#42C2FF] hover:text-white hover:border-transparent transition-all group-hover:scale-105">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-white/30">
            <p className="text-lg">No destinations found matching your search.</p>
          </div>
        )}
      </div>
    </main>
  );
}
