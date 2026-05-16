'use client';

import { useState } from 'react';
import {
  Users, MessageCircle, Vote, Receipt, UserPlus,
  Send, ThumbsUp, ThumbsDown, Crown, Copy, Check,
  LayoutDashboard, Settings, LogOut, Bell, Menu, Plane
} from 'lucide-react';

const mockMembers = [
  { id: '1', name: 'You', avatar: '😎', role: 'admin' },
  { id: '2', name: 'Rahul', avatar: '🧑‍💻', role: 'member' },
  { id: '3', name: 'Priya', avatar: '👩‍🎨', role: 'member' },
  { id: '4', name: 'Amit', avatar: '🏄‍♂️', role: 'member' },
];

const mockVotes = [
  { id: '1', title: 'Day 2: Casino or Beach Party?', options: [
    { label: 'Casino Night at Deltin Royale', votes: 3, voters: ['You', 'Rahul', 'Amit'] },
    { label: 'Beach Party at Curlies', votes: 1, voters: ['Priya'] },
  ], status: 'active' as const },
  { id: '2', title: 'Restaurant for Day 1 Dinner', options: [
    { label: 'Thalassa (Greek)', votes: 2, voters: ['You', 'Priya'] },
    { label: 'Fisherman\'s Wharf', votes: 2, voters: ['Rahul', 'Amit'] },
  ], status: 'active' as const },
];

const mockExpenses = [
  { id: '1', title: 'Hotel Booking', amount: 12000, paidBy: 'You', split: 4, emoji: '🏨' },
  { id: '2', title: 'Cab from Airport', amount: 1800, paidBy: 'Rahul', split: 4, emoji: '🚕' },
  { id: '3', title: 'Water Sports', amount: 6000, paidBy: 'Amit', split: 4, emoji: '🏄' },
  { id: '4', title: 'Dinner at Thalassa', amount: 4800, paidBy: 'Priya', split: 4, emoji: '🍽️' },
];

const mockMessages = [
  { id: '1', sender: 'Rahul', avatar: '🧑‍💻', text: 'Hey! Should we book the casino tickets in advance?', time: '10:30 AM' },
  { id: '2', sender: 'Priya', avatar: '👩‍🎨', text: 'I vote for the beach party instead 🏖️', time: '10:32 AM' },
  { id: '3', sender: 'Amit', avatar: '🏄‍♂️', text: 'Let\'s do both! Casino one night, beach party another 🎉', time: '10:35 AM' },
  { id: '4', sender: 'You', avatar: '😎', text: 'Great idea Amit! I\'ll add both to the itinerary', time: '10:38 AM' },
];

type Tab = 'chat' | 'votes' | 'expenses';

export default function GroupPage() {
  const [activeTab, setActiveTab] = useState<Tab>('chat');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const sidebarLinks = [
    { icon: LayoutDashboard, label: 'Overview', href: '/dashboard' },
    { icon: MessageCircle, label: 'Group Chat', active: activeTab === 'chat', onClick: () => setActiveTab('chat') },
    { icon: Vote, label: 'Polls', active: activeTab === 'votes', onClick: () => setActiveTab('votes') },
    { icon: Receipt, label: 'Expenses', active: activeTab === 'expenses', onClick: () => setActiveTab('expenses') },
  ];

  const totalExpenses = mockExpenses.reduce((s, e) => s + e.amount, 0);
  const perPerson = Math.round(totalExpenses / 4);

  const handleCopyCode = () => {
    navigator.clipboard.writeText('GOA-2026-XKCD');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex min-h-screen bg-[#06070d]">
      {/* Sidebar */}
      <aside className="w-64 border-r border-[var(--border-subtle)] hidden lg:flex flex-col pt-6">
        <div className="px-6 mb-8 flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[var(--gradient-accent)] flex items-center justify-center">
            <Plane className="text-[var(--bg-primary)]" size={18} />
          </div>
          <span className="font-bold text-lg tracking-tight">AI Travel<span className="text-[var(--accent-rose)]">OS</span></span>
        </div>

        <nav className="flex-1 space-y-1 px-3 pt-2">
          {sidebarLinks.map((link) => (
            <button
              key={link.label}
              onClick={link.onClick}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                link.active
                  ? 'bg-[var(--accent-rose)]/10 text-[var(--accent-rose)] border border-[var(--accent-rose)]/20'
                  : 'text-[var(--text-secondary)] hover:bg-white/5 hover:text-white'
              }`}
            >
              <link.icon size={18} />
              {link.label}
            </button>
          ))}
          <a
            href="/"
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-[var(--text-secondary)] hover:bg-white/5 hover:text-white transition-all"
          >
            <LayoutDashboard size={18} />
            Back to Home
          </a>
        </nav>

        <div className="p-4 border-t border-[var(--border-subtle)]">
          <div className="glass-card p-4 mb-4">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] mb-3">Members</h4>
            <div className="flex -space-x-2">
              {mockMembers.map(m => (
                <div key={m.id} className="w-8 h-8 rounded-full border-2 border-[var(--bg-primary)] bg-[var(--bg-glass-strong)] flex items-center justify-center text-xs" title={m.name}>
                  {m.avatar}
                </div>
              ))}
              <button className="w-8 h-8 rounded-full border-2 border-[var(--bg-primary)] bg-[var(--bg-glass-strong)] flex items-center justify-center text-xs text-[var(--accent-rose)] hover:bg-[var(--accent-rose)]/20 transition-colors">
                +
              </button>
            </div>
          </div>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-[var(--text-secondary)] hover:bg-white/5 transition-all">
            <LogOut size={18} />
            Exit Group
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pt-8 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-fade-in-up">
            <div>
              <h1 className="text-2xl font-bold flex items-center gap-3">
                <span className="p-2 rounded-xl bg-[var(--accent-rose)]/10 text-[var(--accent-rose)]">
                  <Users size={24} />
                </span>
                Goa Adventure — Group
              </h1>
              <p className="text-sm text-[var(--text-muted)] mt-1 ml-11">
                4 travelers · Live collaboration
              </p>
            </div>
            <div className="flex items-center gap-3 ml-auto sm:ml-0">
              <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-[var(--bg-glass)] border border-[var(--border-subtle)]">
                <span className="text-[10px] font-mono text-[var(--text-muted)]">CODE: GOA-2026</span>
                <button onClick={handleCopyCode} className="p-1 hover:bg-white/10 rounded-md transition-colors">
                  {copied ? <Check size={12} className="text-[var(--accent-emerald)]" /> : <Copy size={12} className="text-[var(--text-muted)]" />}
                </button>
              </div>
              <button className="btn-primary text-xs py-2 px-4">
                <UserPlus size={14} /> Invite
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Content Area */}
            <div className="lg:col-span-3 space-y-6 animate-fade-in-up delay-100">
              {/* Chat Content */}
              {activeTab === 'chat' && (
                <div className="glass-card flex flex-col overflow-hidden" style={{ height: '600px' }}>
                  <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {mockMessages.map((msg) => {
                      const isYou = msg.sender === 'You';
                      return (
                        <div key={msg.id} className={`flex gap-4 ${isYou ? 'flex-row-reverse' : ''}`}>
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg bg-[var(--bg-glass-strong)] shadow-lg shrink-0">
                            {msg.avatar}
                          </div>
                          <div className={`max-w-[80%] ${isYou ? 'text-right' : ''}`}>
                            <div className="text-xs mb-1.5 font-bold text-[var(--text-muted)] flex items-center gap-2 justify-end">
                              {isYou ? null : msg.sender}
                              <span>{msg.time}</span>
                              {isYou ? msg.sender : null}
                            </div>
                            <div className={`px-5 py-3 rounded-2xl text-sm shadow-sm ${
                              isYou 
                                ? 'bg-[var(--accent-cyan)]/15 border border-[var(--accent-cyan)]/20 text-white rounded-tr-none' 
                                : 'bg-[var(--bg-glass-strong)] border border-[var(--border-subtle)] text-[var(--text-primary)] rounded-tl-none'
                            }`}>
                              {msg.text}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="p-4 bg-white/5 border-t border-[var(--border-subtle)]">
                    <div className="flex gap-3">
                      <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type a message..."
                        className="input-glow py-3 px-5 text-sm"
                      />
                      <button className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--gradient-accent)] text-[var(--bg-primary)] shadow-lg hover:scale-105 active:scale-95 transition-all">
                        <Send size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Votes Content */}
              {activeTab === 'votes' && (
                <div className="space-y-4">
                  {mockVotes.map((vote) => (
                    <div key={vote.id} className="glass-card p-6">
                      <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                        <Vote size={20} className="text-[var(--accent-rose)]" />
                        {vote.title}
                      </h3>
                      <div className="space-y-4">
                        {vote.options.map((opt, i) => {
                          const total = vote.options.reduce((s, o) => s + o.votes, 0);
                          const pct = total > 0 ? (opt.votes / total) * 100 : 0;
                          return (
                            <div key={i} className="relative p-4 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-glass)] overflow-hidden cursor-pointer hover:bg-white/[0.03] transition-all">
                              <div className="absolute inset-0 bg-[var(--accent-cyan)]/10 transition-all" style={{ width: `${pct}%` }} />
                              <div className="relative flex justify-between items-center">
                                <span className="font-medium">{opt.label}</span>
                                <div className="flex items-center gap-3">
                                  <div className="flex -space-x-1.5">
                                    {opt.voters.map((v, vi) => (
                                      <div key={vi} className="w-5 h-5 rounded-full bg-[var(--bg-glass-strong)] border border-[var(--bg-primary)] text-[8px] flex items-center justify-center">
                                        {v[0]}
                                      </div>
                                    ))}
                                  </div>
                                  <span className="text-sm font-bold text-[var(--accent-cyan)]">{Math.round(pct)}%</span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Expenses Content */}
              {activeTab === 'expenses' && (
                <div className="glass-card overflow-hidden">
                  <div className="p-6 border-b border-[var(--border-subtle)] flex justify-between items-center bg-white/5">
                    <h3 className="font-bold flex items-center gap-2">
                      <Receipt size={18} className="text-[var(--accent-emerald)]" />
                      Shared Expenses
                    </h3>
                    <button className="text-xs font-bold text-[var(--accent-cyan)] hover:underline">Add New</button>
                  </div>
                  <div className="divide-y border-[var(--border-subtle)]">
                    {mockExpenses.map(exp => (
                      <div key={exp.id} className="p-5 flex justify-between items-center hover:bg-white/[0.02] transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-[var(--bg-glass-strong)] flex items-center justify-center text-xl">
                            {exp.emoji}
                          </div>
                          <div>
                            <div className="font-bold text-sm">{exp.title}</div>
                            <div className="text-[10px] text-[var(--text-muted)] mt-0.5">Paid by {exp.paidBy} · Split 4 ways</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-[var(--accent-cyan)]">₹{exp.amount.toLocaleString('en-IN')}</div>
                          <div className="text-[10px] text-[var(--text-muted)]">₹{(exp.amount/4).toLocaleString('en-IN')} each</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Side Stats */}
            <div className="space-y-6 animate-fade-in-up delay-200">
              <div className="glass-card p-6">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] mb-4">Expense Summary</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-xs text-[var(--text-secondary)]">Total Group</span>
                    <span className="text-xl font-bold">₹{mockExpenses.reduce((s,e) => s+e.amount, 0).toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between items-end pb-4 border-b border-[var(--border-subtle)]">
                    <span className="text-xs text-[var(--text-secondary)]">Your Share</span>
                    <span className="text-lg font-bold text-[var(--accent-cyan)]">₹{(mockExpenses.reduce((s,e) => s+e.amount, 0)/4).toLocaleString('en-IN')}</span>
                  </div>
                  <button className="w-full btn-primary py-2.5 text-xs">Settle Up</button>
                </div>
              </div>

              <div className="glass-card p-6">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] mb-4">Pending Votes</h4>
                <div className="space-y-3">
                  {mockVotes.map(v => (
                    <div key={v.id} className="flex items-center gap-3 p-2 rounded-xl bg-white/5 border border-white/5">
                      <div className="w-8 h-8 rounded-lg bg-[var(--accent-rose)]/10 flex items-center justify-center text-[var(--accent-rose)]">
                        <Vote size={14} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] font-bold truncate">{v.title}</div>
                        <div className="text-[8px] text-[var(--text-muted)]">Ends in 4h</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
