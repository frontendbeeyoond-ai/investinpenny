'use client'
import { useState, useEffect } from 'react';
import useScrollAnimation from '../hooks/animation';
export const  AnalysisSection = () => {
  const { ref, isVisible } = useScrollAnimation();
const Icons = {
  Warning: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  ),
  TrendDown: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
    </svg>
  ),
};
  const ratings = [
    { label: 'Risk Score', value: 4.8, maxValue: 5, status: 'Critical', color: 'from-red-500 to-pink-500' },
    { label: 'Market Sentiment', value: 1.2, maxValue: 5, status: 'Negative', color: 'from-orange-500 to-red-500' },
    { label: 'Community Trust', value: 0.7, maxValue: 5, status: 'Very Low', color: 'from-yellow-500 to-orange-500' },
  ];

  const indicators = [
    { label: 'Volume Anomalies', count: 23, status: 'high' },
    { label: 'Price Manipulation Signals', count: 17, status: 'high' },
    { label: 'Promotional Activity', count: 45, status: 'high' },
    { label: 'Institutional Holdings', count: 2, status: 'low' },
    { label: 'Insider Trading Alerts', count: 8, status: 'medium' },
    { label: 'SEC Filings Issues', count: 5, status: 'medium' },
  ];

  return (
    <section id="analysis" className="py-10 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
        >
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="demo-badge mb-4 inline-block">Simulated Analysis</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Stock </span>
              <span className="gradient-text">Risk Profile</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive analysis showing why TRNR has been flagged as a high-risk penny stock
            </p>
          </div>

          {/* Stock Header Card */}
          <div className="glass-card p-10 rounded-3xl mb-12">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-4xl font-bold font-mono text-cyan-400">TRNR</h3>
                  <span className="risk-badge-high px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                    EXTREME RISK
                  </span>
                </div>
                <p className="text-xl text-gray-300">Interactive Strength Inc.</p>
                <p className="text-gray-500">NASDAQ • Penny Stock • Fitness Technology</p>
              </div>
              <div className="text-left lg:text-right">
                <p className="text-5xl font-bold text-red-400">$0.0034</p>
                <p className="text-red-400 flex items-center gap-2 mt-2 justify-start lg:justify-end text-xl">
                  <Icons.TrendDown />
                  -89.4% (1Y)
                </p>
              </div>
            </div>
          </div>

          {/* Rating Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {ratings.map((rating, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg text-gray-300">{rating.label}</span>
                  <span className={`text-sm px-3 py-1 rounded-full ${
                    rating.status === 'Critical' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                    rating.status === 'Negative' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                    'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {rating.status}
                  </span>
                </div>
                <div className="flex items-end gap-3 mb-4">
                  <span className="text-5xl font-bold">{rating.value}</span>
                  <span className="text-2xl text-gray-500 mb-1">/ {rating.maxValue}</span>
                </div>
                <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${rating.color} transition-all duration-1000`}
                    style={{ width: isVisible ? `${(rating.value / rating.maxValue) * 100}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Risk Indicators Grid */}
          <div className="glass-card p-10 rounded-3xl">
            <div className="flex items-center gap-3 mb-8">
              <Icons.Warning />
              <h4 className="text-2xl lg:text-2xl font-bold">Risk Indicators</h4>
              <span className="demo-badge">Demo Data</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {indicators.map((indicator, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl border transition-all hover:scale-105 ${
                    indicator.status === 'high' ? 'border-red-500/30 bg-red-500/5 hover:border-red-500/60' :
                    indicator.status === 'medium' ? 'border-orange-500/30 bg-orange-500/5 hover:border-orange-500/60' :
                    'border-green-500/30 bg-green-500/5 hover:border-green-500/60'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">{indicator.label}</span>
                    <span className={`text-2xl font-bold font-mono ${
                      indicator.status === 'high' ? 'text-red-400' :
                      indicator.status === 'medium' ? 'text-orange-400' :
                      'text-green-400'
                    }`}>
                      {indicator.count}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};