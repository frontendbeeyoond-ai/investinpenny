'use client'
import { useState, useEffect } from 'react';
import Icons from '../hooks/icons';
import useCounter from '../hooks/useCounter';
export const  StatsSection = () => {


    const Icons = {
 

  Users: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  Eye: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  AlertCircle: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Chat: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),


};
  const stats = [
    { label: 'Risk Signals Detected', value: 847, icon: <Icons.AlertCircle /> },
    { label: 'Community Reports', value: 5247, icon: <Icons.Chat /> },
    { label: 'Analysts Tracking', value: 156, icon: <Icons.Users /> },
    { label: 'Active Monitors', value: 12890, icon: <Icons.Eye /> },
  ];

  return (
    <section id="stats" className="py-10 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const { count, countRef } = useCounter(stat.value);
            return (
              <div
                key={index}
                ref={countRef}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <p className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {count.toLocaleString()}+
                </p>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};