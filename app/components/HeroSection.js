'use client'
import { useState, useEffect } from 'react';
export const  HeroSection = () => {
    const Icons = {
   ArrowDown: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  ),
};
  return (
    <section className="relative min-h-screen flex items-center justify-center  overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/20 rounded-full filter blur-[150px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full filter blur-[150px] animate-float" style={{ animationDelay: '-5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-500/10 rounded-full filter blur-[200px] animate-float" style={{ animationDelay: '-10s' }} />
        <div className="grid-pattern absolute inset-0 opacity-20" />
      </div>

      <div className="relative top-10% z-10 max-w-6xl mx-auto px-6 text-center">
        {/* <div className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Educational Platform • Simulated Data
          </span>
        </div> */}

        <h1 className="text-2xl md:text-7xl lg:text-7xl font-bold mt-6 mb-6 leading-tight">
          <span className="block text-white  mt-20  sm:mt-10 md:mt-10 lg:mt-10 ">Protecting Investors</span>
          <span className="block gradient-text">from Financial Fraud</span>
        </h1>

        <p className="text-sm md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
           Informing about investment scams, sentiment analysis and risk detection
          to make informed decisions about penny stocks.
        </p>

        {/* Featured Stock Card */}
        <div className="glass-card max-w-2xl mx-auto p-8 rounded-3xl animate-glow mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Featured Analysis</p>
              <p className="text-3xl md:text-5xl font-bold font-mono gradient-text">NASDAQ: TRNR</p>
              <p className="text-gray-500 mt-2">Interactive Strength Inc.</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="risk-badge-high px-4 py-2 rounded-xl text-lg font-bold mb-2">
                  5/5 RISK
                </div>
                <p className="text-xs text-gray-500">Extreme Caution</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-red-400">-89.4%</p>
                <p className="text-sm text-gray-500">1 Year Return</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <a href="#stats" className="inline-flex flex-col items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors">
            <span className="text-sm">Scroll to Explore</span>
            <Icons.ArrowDown />
          </a>
        </div>
      </div>
    </section>
  );
};
