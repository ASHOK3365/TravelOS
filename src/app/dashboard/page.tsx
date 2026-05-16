'use client';

import { motion } from 'framer-motion';
import { Wallet, CloudSun, MapPin, TrendingUp, Calendar, Clock, Sparkles, Send, Plus, ArrowRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';

const tripData = {
  title: 'Japan Adventure',
  destination: 'Tokyo → Kyoto → Osaka',
  dates: 'Dec 15–22, 2026',
  daysLeft: 7,
  budget: { total: 4000, spent: 2840 },
};

const activities = [
  { time: '8:00 AM',  title: 'Fushimi Inari Shrine',  category: 'activity', cost: 0,    icon: '⛩️' },
  { time: '11:00 AM', title: 'Bamboo Grove Walk',      category: 'activity', cost: 0,    icon: '🎋' },
  { time: '1:00 PM',  title: 'Lunch at Nishiki Market',category: 'food',     cost: 25,   icon: '🍜' },
  { time: '3:00 PM',  title: 'Kinkaku-ji Temple',      category: 'activity', cost: 5,    icon: '🏯' },
  { time: '5:30 PM',  title: 'Tea Ceremony Experience', category: 'activity', cost: 40,   icon: '🍵' },
  { time: '7:30 PM',  title: 'Dinner in Gion',         category: 'food',     cost: 60,   icon: '🍱' },
];

type Message = { role: 'user' | 'assistant'; content: string };

const chatMessages: Message[] = [
  { role: 'assistant', content: "Good morning! Day 3 in Kyoto looks perfect. Clear skies at 22°C. I've optimized your route to minimize walking between sites." },
];

export default function DashboardPage() {
  const [messages, setMessages] = useState(chatMessages);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || sending) return;
    const userMsg = { role: 'user' as const, content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setSending(true);

    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: 'assistant', content: data.content }]);
    } catch {
      setMessages((prev) => [...prev, { role: 'assistant', content: "I'm having trouble connecting. Please try again." }]);
    }
    setSending(false);
  };

  const budgetPct = Math.round((tripData.budget.spent / tripData.budget.total) * 100);

  return (
    <main className="relative min-h-screen">
      <Navbar />

      <div className="pt-[96px] pb-24 max-w-7xl mx-auto px-6">
        {/* Trip Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-[13px] font-medium text-[#42C2FF] mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Active Trip
              </p>
              <h1 className="text-3xl font-bold tracking-tight">{tripData.title}</h1>
              <p className="text-white/40 text-[14px] mt-1 flex items-center gap-3">
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {tripData.destination}</span>
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {tripData.dates}</span>
              </p>
            </div>
            <button className="h-11 px-6 rounded-full bg-white text-[#050816] text-[13px] font-semibold flex items-center gap-2 hover:scale-[1.03] transition-transform">
              <Plus className="w-4 h-4" /> Add Activity
            </button>
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {[
            { label: 'Budget Used', value: `${budgetPct}%`, icon: Wallet, color: '#42C2FF' },
            { label: 'Day', value: '3 of 7', icon: Calendar, color: '#6E5BFF' },
            { label: 'Activities', value: activities.length.toString(), icon: Clock, color: '#A855F7' },
            { label: 'Weather', value: '22°C Clear', icon: CloudSun, color: '#42C2FF' },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-5 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: `${stat.color}12` }}>
                <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
              </div>
              <div>
                <span className="text-[18px] font-bold">{stat.value}</span>
                <span className="block text-[11px] text-white/35 font-medium">{stat.label}</span>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left: Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 glass rounded-[32px] p-8"
          >
            <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1.5 h-6 rounded-full bg-gradient-to-b from-[#42C2FF] to-[#6E5BFF]" />
              Day 3 — Kyoto
            </h2>
            <div className="space-y-1">
              {activities.map((act, i) => (
                <div key={i} className="flex gap-5 group">
                  {/* Timeline line */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-lg group-hover:bg-[#42C2FF]/10 group-hover:border-[#42C2FF]/20 transition-colors">
                      {act.icon}
                    </div>
                    {i < activities.length - 1 && <div className="w-px flex-1 bg-white/[0.06] my-1" />}
                  </div>
                  {/* Content */}
                  <div className="flex-1 pb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[11px] text-white/30 font-medium">{act.time}</span>
                        <h4 className="text-[15px] font-semibold mt-0.5">{act.title}</h4>
                      </div>
                      {act.cost > 0 && (
                        <span className="text-[13px] font-medium text-[#42C2FF]">${act.cost}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Sidebar */}
          <div className="space-y-6">
            {/* Budget Widget */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="glass rounded-[24px] p-6"
            >
              <div className="flex items-center gap-2 text-[13px] text-white/40 font-medium mb-4">
                <TrendingUp className="w-4 h-4" /> Budget
              </div>
              <div className="text-[32px] font-light tracking-tight">
                ${tripData.budget.spent.toLocaleString()}
                <span className="text-[14px] text-white/25"> / ${tripData.budget.total.toLocaleString()}</span>
              </div>
              <div className="h-2 w-full bg-white/[0.04] rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-[#42C2FF] to-[#6E5BFF] rounded-full" style={{ width: `${budgetPct}%` }} />
              </div>
              <div className="flex justify-between mt-2 text-[10px] text-white/20">
                <span>Spent</span>
                <span>${(tripData.budget.total - tripData.budget.spent).toLocaleString()} remaining</span>
              </div>
            </motion.div>

            {/* AI Chat Widget */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass rounded-[24px] overflow-hidden flex flex-col"
              style={{ height: 360 }}
            >
              <div className="px-5 py-4 border-b border-white/[0.06] flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#42C2FF] to-[#6E5BFF] flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
                <span className="text-[13px] font-semibold text-white/70">AI Assistant</span>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-[13px] leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-white/[0.08] border border-white/[0.1] rounded-tr-sm'
                        : 'bg-[#42C2FF]/[0.06] border border-[#42C2FF]/[0.1] rounded-tl-sm'
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                ))}
                {sending && (
                  <div className="flex gap-1.5 px-4 py-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#42C2FF] animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#42C2FF] animate-bounce [animation-delay:150ms]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#42C2FF] animate-bounce [animation-delay:300ms]" />
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>
              <div className="p-3 border-t border-white/[0.06]">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask anything..."
                    className="flex-1 h-10 bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 text-[13px] text-white placeholder-white/25 outline-none focus:border-[#42C2FF]/30 transition-colors"
                  />
                  <button onClick={handleSend} className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#42C2FF] to-[#6E5BFF] flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-transform">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
