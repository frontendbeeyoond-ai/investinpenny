'use client'
import { useState, useEffect } from 'react';
import useScrollAnimation from '../hooks/animation';
export const  SentimentSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const sentimentData = [
    { month: "Aug", positive: 12, negative: 78, neutral: 10 },
    { month: "Sep", positive: 8, negative: 82, neutral: 10 },
    { month: "Oct", positive: 15, negative: 72, neutral: 13 },
    { month: "Nov", positive: 6, negative: 86, neutral: 8 },
    { month: "Dec", positive: 9, negative: 79, neutral: 12 },
    { month: "Jan", positive: 11, negative: 77, neutral: 12 },
    { month: "Feb", positive: 7, negative: 84, neutral: 9 },
  ];

  const heatmapData = [
    ["High", "High", "Med", "High", "High", "Med"],
    ["High", "Med", "High", "High", "Med", "High"],
    ["Med", "High", "High", "Med", "High", "High"],
    ["High", "High", "Med", "High", "High", "Med"],
  ];

  const heatmapLabels = {
    rows: ["Volume", "Price", "Social", "Filing"],
    cols: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  };
    const Icons = {
 

  ChartBar: () => (
    <svg className="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),


  Close: () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 6l12 12M6 18L18 6"
    />
  </svg>
),

};
  return (
    <section id="sentiment" className="py-14 sm:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent" />

      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-20"
          }`}
        >
          {/* HEADER */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="demo-badge mb-4 inline-block">
              Simulated Metrics
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-white">Risk </span>
              <span className="gradient-text">Dashboard</span>
            </h2>

            <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Visual representation of market sentiment and risk signals over
              time
            </p>
          </div>

          {/* TOP GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
            {/* SENTIMENT CHART */}
            <div className="glass-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <Icons.ChartBar />
                <h4 className="text-lg sm:text-xl font-bold">
                  Sentiment Breakdown
                </h4>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {sentimentData.map((data, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="w-10 text-xs sm:text-sm text-gray-500 font-mono">
                      {data.month}
                    </span>

                    <div className="flex-1 flex h-8 sm:h-10 rounded-xl overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-red-600 to-red-500 flex items-center justify-center text-[10px] sm:text-xs font-bold transition-all duration-1000"
                        style={{
                          width: isVisible ? `${data.negative}%` : "0%",
                        }}
                      >
                        {data.negative}%
                      </div>

                      <div
                        className="bg-gray-600 flex items-center justify-center text-[10px] sm:text-xs transition-all duration-1000"
                        style={{
                          width: isVisible ? `${data.neutral}%` : "0%",
                        }}
                      >
                        {data.neutral}%
                      </div>

                      <div
                        className="bg-gradient-to-r from-green-600 to-green-500 flex items-center justify-center text-[10px] sm:text-xs transition-all duration-1000"
                        style={{
                          width: isVisible ? `${data.positive}%` : "0%",
                        }}
                      >
                        {data.positive}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* HEATMAP */}
            <div className="glass-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <Icons.ChartBar />
                <h4 className="text-lg sm:text-xl font-bold">
                  Risk Signal Heatmap
                </h4>
              </div>

              {/* MOBILE SCROLL FIX */}
              <div className="overflow-x-auto pb-2">
                <div className="min-w-[380px]">
                  <div className="flex gap-3 mb-3 ml-16">
                    {heatmapLabels.cols.map((col) => (
                      <div
                        key={col}
                        className="w-12 sm:w-14 text-center text-xs sm:text-sm text-gray-500"
                      >
                        {col}
                      </div>
                    ))}
                  </div>

                  {heatmapData.map((row, i) => (
                    <div key={i} className="flex items-center gap-3 mb-3">
                      <div className="w-14 text-xs sm:text-sm text-gray-500 text-right">
                        {heatmapLabels.rows[i]}
                      </div>

                      {row.map((cell, j) => (
                        <div
                          key={j}
                          className={`heatmap-cell w-12 sm:w-14 h-10 sm:h-12 rounded-lg flex items-center justify-center text-[10px] sm:text-xs font-bold transition-all ${
                            cell === "High"
                              ? "bg-red-500/70 text-red-100"
                              : cell === "Med"
                              ? "bg-orange-500/70 text-orange-100"
                              : "bg-green-500/70 text-green-100"
                          }`}
                        >
                          {cell}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* METRIC CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1 */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl border-t-4 border-red-500">
              <h4 className="text-lg sm:text-xl font-bold mb-4">
                Volatility Index
              </h4>
              <p className="text-4xl sm:text-6xl font-bold text-red-400 mb-2">
                847%
              </p>
              <p className="text-gray-500 text-sm sm:text-base">
                Above normal range
              </p>
            </div>

            {/* Card 2 */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl border-t-4 border-orange-500">
              <h4 className="text-lg sm:text-xl font-bold mb-4">
                Promotion Score
              </h4>
              <p className="text-4xl sm:text-6xl font-bold text-orange-400 mb-2">
                9.2
              </p>
              <p className="text-gray-500 text-sm sm:text-base">
                Out of 10
              </p>
            </div>

            {/* Card 3 */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl border-t-4 border-yellow-500">
              <h4 className="text-lg sm:text-xl font-bold mb-4">
                Liquidity Risk
              </h4>
              <p className="text-4xl sm:text-6xl font-bold text-yellow-400 mb-2">
                Critical
              </p>
              <p className="text-gray-500 text-sm sm:text-base">
                Exit difficulty
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};