'use client';

import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for trying out TravelOS.',
    features: [
      '3 trips per month',
      'Basic AI itinerary',
      'Weather alerts',
      'Community support',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$12',
    period: '/month',
    description: 'For serious travelers who want the full AI experience.',
    features: [
      'Unlimited trips',
      'Advanced AI itinerary engine',
      'Smart routing & optimization',
      'Budget IQ with predictions',
      'Group trip collaboration',
      'Voice assistant',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: '$49',
    period: '/month',
    description: 'For teams, agencies, and travel companies.',
    features: [
      'Everything in Pro',
      'Custom AI training',
      'API access',
      'Team management',
      'Analytics dashboard',
      'White-label options',
      'Dedicated account manager',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      <div className="pt-[140px] pb-32 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-[clamp(2.2rem,5vw,3.5rem)] font-bold tracking-tight">
            Simple, transparent <span className="gradient-text">pricing</span>
          </h1>
          <p className="text-white/40 text-lg mt-4 max-w-lg mx-auto">
            Start free. Upgrade when you need more power.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-[32px] p-8 flex flex-col relative overflow-hidden ${
                plan.highlighted
                  ? 'bg-white/[0.04] border-2 border-[#42C2FF]/30 shadow-[0_0_60px_rgba(66,194,255,0.08)]'
                  : 'bg-white/[0.02] border border-white/[0.06]'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#42C2FF] to-transparent" />
              )}

              {plan.highlighted && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#42C2FF]/10 border border-[#42C2FF]/20 text-[#42C2FF] text-[11px] font-semibold mb-6 self-start">
                  <Sparkles className="w-3 h-3" /> Most Popular
                </span>
              )}

              <h3 className="text-xl font-bold">{plan.name}</h3>
              <div className="mt-4 mb-2">
                <span className="text-[42px] font-light tracking-tight">{plan.price}</span>
                <span className="text-white/30 text-[15px] ml-1">{plan.period}</span>
              </div>
              <p className="text-white/40 text-[14px] mb-8">{plan.description}</p>

              <ul className="space-y-3 flex-1 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-[14px] text-white/60">
                    <Check className="w-4 h-4 text-[#42C2FF] shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full h-12 rounded-2xl text-[14px] font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] ${
                  plan.highlighted
                    ? 'bg-white text-[#050816] shadow-lg shadow-white/10'
                    : 'bg-white/[0.06] border border-white/[0.1] text-white hover:bg-white/[0.1]'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
