'use client';

import { motion } from 'framer-motion';
import { Home, Briefcase, Calendar, BarChart2, Heart, Settings, Send } from 'lucide-react';

const sidebarIcons = [Home, Briefcase, Calendar, BarChart2, Heart, Settings];

const itinerary = [
  { day: 1, loc: 'Rome', detail: 'Colosseum & Vatican City' },
  { day: 2, loc: 'Florence', detail: 'Uffizi Gallery' },
  { day: 3, loc: 'Venice', detail: 'Gondola Ride' },
  { day: 4, loc: 'Milan', detail: 'Duomo di Milano' },
  { day: 5, loc: 'Lake Como', detail: 'Relax & Scenic Views' },
  { day: 6, loc: 'Amalfi Coast', detail: 'Explore & Unwind' },
  { day: 7, loc: 'Rome', detail: 'Shopping & Departure' },
];

const trips = [
  { name: 'Italy Trip', date: 'May 12 - May 19, 2025', img: 'https://images.unsplash.com/photo-1515542622106-78b28af78158?w=100&q=80' },
  { name: 'Switzerland Trip', date: 'Jun 10 - Jun 17, 2025', img: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=100&q=80' },
  { name: 'Bali Trip', date: 'Jul 5 - Jul 12, 2025', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=100&q=80' },
];

const forecast = [
  { day: 'Mon', temp: '24°', icon: '☀️' },
  { day: 'Tue', temp: '23°', icon: '🌤️' },
  { day: 'Wed', temp: '22°', icon: '☀️' },
  { day: 'Thu', temp: '21°', icon: '⛅' },
];

export default function DashboardPreview() {
  return (
    <section className="py-20 relative z-10 bg-slate-50/50">
      <div className="max-w-[1000px] mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="dashboard-card flex flex-col md:flex-row overflow-hidden border border-slate-100"
        >
          {/* Sidebar */}
          <div className="w-[80px] bg-slate-50 border-r border-slate-100 py-8 flex flex-col items-center gap-8 shrink-0 hidden md:flex">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
              <Home className="w-5 h-5 fill-blue-600" />
            </div>
            {sidebarIcons.slice(1).map((Icon, i) => (
              <button key={i} className="text-slate-400 hover:text-blue-500 transition-colors">
                <Icon className="w-5 h-5" />
              </button>
            ))}
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8 bg-white">
            <h2 className="text-[20px] font-bold text-slate-900 tracking-tight mb-6">Your Travel Dashboard</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column: AI Itinerary */}
              <div className="lg:col-span-5 flex flex-col">
                <div className="dashboard-widget flex-1 flex flex-col border border-slate-100">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xl">🤖</div>
                      <span className="font-bold text-slate-900 text-[15px]">AI Itinerary</span>
                    </div>
                    <button className="px-3 py-1.5 bg-blue-500 text-white rounded-full text-[11px] font-semibold hover:bg-blue-600 transition-colors">
                      Plan a 7-day trip to Italy
                    </button>
                  </div>

                  <div className="space-y-3 flex-1 mb-6">
                    {itinerary.map((item) => (
                      <div key={item.day} className="flex items-start gap-3">
                        <span className="text-[12px] font-bold text-blue-500 bg-blue-50 px-2 py-0.5 rounded-md shrink-0">Day {item.day}</span>
                        <div className="text-[13px]">
                          <span className="font-bold text-slate-800">{item.loc}</span> <span className="text-slate-400">— {item.detail}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Input area */}
                  <div className="relative mt-auto">
                    <input 
                      type="text" 
                      placeholder="Ask anything about your trip..." 
                      className="w-full h-11 bg-white border border-slate-200 rounded-full pl-5 pr-12 text-[13px] text-slate-700 outline-none focus:border-blue-300"
                    />
                    <button className="absolute right-1 top-1 w-9 h-9 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                      <Send className="w-4 h-4 ml-[-2px]" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Columns */}
              <div className="lg:col-span-7 grid grid-cols-2 gap-6">
                
                {/* Budget Overview */}
                <div className="dashboard-widget border border-slate-100">
                  <h3 className="text-[13px] font-semibold text-slate-800 mb-4">Budget Overview</h3>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <p className="text-[11px] text-slate-400 font-medium">Total Budget</p>
                      <p className="text-[28px] font-bold text-slate-900 leading-none mt-1">$2,450</p>
                      <p className="text-[12px] text-slate-400 mt-1">of $3,500</p>
                    </div>
                    {/* Circle Progress */}
                    <div className="relative w-14 h-14 rounded-full border-4 border-slate-100 flex items-center justify-center">
                      <svg className="absolute inset-0 w-full h-full -rotate-90">
                        <circle cx="28" cy="28" r="26" fill="none" stroke="#3B82F6" strokeWidth="4" strokeDasharray="163" strokeDashoffset="49" className="drop-shadow-md" />
                      </svg>
                      <span className="text-[12px] font-bold text-slate-800">70%</span>
                    </div>
                  </div>
                  {/* Wave chart */}
                  <svg viewBox="0 0 200 40" className="w-full h-10 overflow-visible">
                    <path d="M0,20 Q20,5 40,20 T80,20 T120,10 T160,25 T200,5" fill="none" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
                    <path d="M0,20 Q20,5 40,20 T80,20 T120,10 T160,25 T200,5 L200,40 L0,40 Z" fill="url(#waveGrad)" />
                    <defs>
                      <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Weather */}
                <div className="dashboard-widget border border-slate-100">
                  <h3 className="text-[13px] font-semibold text-slate-800 mb-4">Weather in Rome</h3>
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <p className="text-[28px] font-bold text-slate-900 leading-none">24°C</p>
                      <p className="text-[12px] text-slate-400 mt-1 font-medium">Partly Cloudy</p>
                    </div>
                    <div className="text-4xl drop-shadow-md">⛅</div>
                  </div>
                  <div className="flex justify-between mt-auto">
                    {forecast.map(f => (
                      <div key={f.day} className="flex flex-col items-center gap-1 text-[11px] font-medium">
                        <span className="text-slate-400">{f.day}</span>
                        <span className="text-base">{f.icon}</span>
                        <span className="text-slate-800">{f.temp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trips */}
                <div className="dashboard-widget border border-slate-100">
                  <h3 className="text-[13px] font-semibold text-slate-800 mb-4">Trips</h3>
                  <div className="space-y-3">
                    {trips.map(trip => (
                      <div key={trip.name} className="flex items-center gap-3 cursor-pointer group">
                        <img src={trip.img} alt={trip.name} className="w-10 h-10 rounded-lg object-cover" />
                        <div className="flex-1">
                          <h4 className="text-[13px] font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{trip.name}</h4>
                          <p className="text-[10px] text-slate-400 font-medium">{trip.date}</p>
                        </div>
                        <span className="text-slate-300 group-hover:text-blue-500 transition-colors">›</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expenses */}
                <div className="dashboard-widget border border-slate-100 flex flex-col">
                  <h3 className="text-[13px] font-semibold text-slate-800 mb-4">Expenses</h3>
                  <div>
                    <p className="text-[24px] font-bold text-slate-900 leading-none">$1,850</p>
                    <p className="text-[11px] text-slate-400 font-medium mt-1">Total spent</p>
                  </div>
                  <div className="flex-1 flex items-end justify-between gap-1 mt-6 h-[60px]">
                    {[30, 50, 40, 20, 60, 45, 80, 55, 90, 70].map((h, i) => (
                      <div key={i} className="w-full bg-blue-400/20 rounded-t-sm" style={{ height: `${h}%` }}>
                        <div className="w-full bg-blue-500 rounded-t-sm" style={{ height: '100%', opacity: h > 60 ? 1 : 0.4 }} />
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
