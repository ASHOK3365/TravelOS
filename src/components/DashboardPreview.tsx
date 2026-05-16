'use client';

import { DollarSign, Cloud, Map, BarChart } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <section className="py-20 bg-[#F7FAFC]">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <h2 className="text-[28px] font-extrabold text-[#1A202C]">Travel Dashboard</h2>
        </div>

        <div className="clay-card p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Budget Widget */}
            <div className="bg-white/60 border border-white rounded-[24px] p-6 shadow-sm flex flex-col justify-between">
              <div className="w-10 h-10 rounded-full bg-[#56CCF2]/20 flex items-center justify-center text-[#56CCF2] mb-4">
                <DollarSign className="w-5 h-5" />
              </div>
              <p className="text-[13px] text-[#4A5568] font-semibold">Budget Used</p>
              <p className="text-[24px] font-bold text-[#1A202C]">$2,450 <span className="text-[14px] text-[#4A5568] font-medium">/ $3000</span></p>
            </div>

            {/* Weather Widget */}
            <div className="bg-white/60 border border-white rounded-[24px] p-6 shadow-sm flex flex-col justify-between">
              <div className="w-10 h-10 rounded-full bg-[#F9A826]/20 flex items-center justify-center text-[#F9A826] mb-4">
                <Cloud className="w-5 h-5" />
              </div>
              <p className="text-[13px] text-[#4A5568] font-semibold">Weather in Rome</p>
              <p className="text-[24px] font-bold text-[#1A202C]">24°C <span className="text-[14px] text-[#4A5568] font-medium">Sunny</span></p>
            </div>

            {/* Route Map */}
            <div className="bg-white/60 border border-white rounded-[24px] p-6 shadow-sm flex flex-col justify-between">
              <div className="w-10 h-10 rounded-full bg-[#6FCF97]/20 flex items-center justify-center text-[#6FCF97] mb-4">
                <Map className="w-5 h-5" />
              </div>
              <p className="text-[13px] text-[#4A5568] font-semibold">Route Optimization</p>
              <p className="text-[16px] font-bold text-[#1A202C]">12 mins saved</p>
            </div>

            {/* Expense Chart */}
            <div className="bg-white/60 border border-white rounded-[24px] p-6 shadow-sm flex flex-col justify-between">
              <div className="w-10 h-10 rounded-full bg-[#2F80ED]/20 flex items-center justify-center text-[#2F80ED] mb-4">
                <BarChart className="w-5 h-5" />
              </div>
              <p className="text-[13px] text-[#4A5568] font-semibold">Expenses</p>
              <div className="flex items-end gap-1.5 h-6 mt-1">
                {[40, 70, 30, 90, 50].map((h, i) => (
                  <div key={i} className="flex-1 bg-[#2F80ED] rounded-t-sm" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
