'use client'
import { useState, useEffect } from 'react';
import useScrollAnimation from '../hooks/animation';
export const  ExpertsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
const [chartDataMap, setChartDataMap] = useState([]);

  const analysts = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Senior Market Analyst',
      credibility: 94,
      avatar: 'SC',
      specialty: 'Penny Stock Investigation',
      reports: 127,
      accuracy: 89,
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      name: 'Michael Torres',
      title: 'Risk Assessment Expert',
      credibility: 91,
      avatar: 'MT',
      specialty: 'Fraud Detection',
      reports: 98,
      accuracy: 92,
      gradient: 'from-pink-400 to-pink-500',
    },
    {
      name: 'Dr. Emily Watson',
      title: 'Financial Forensics',
      credibility: 96,
      avatar: 'EW',
      specialty: 'SEC Filing Analysis',
      reports: 156,
      accuracy: 94,
      gradient: 'from-green-400 to-cyan-500',
    },
    {
      name: 'James Park',
      title: 'Quantitative Analyst',
      credibility: 88,
      avatar: 'JP',
      specialty: 'Volume Pattern Analysis',
      reports: 84,
      accuracy: 87,
      gradient: 'from-orange-400 to-red-500',
    },
  ];
  // const generateChartData = () => Array.from({ length: 12 }, () => Math.random() * 60 + 20);
  useEffect(() => {
    const generateChartData = () =>
      Array.from({ length: 12 }, () => Math.random() * 60 + 20);

    const data = analysts.map(() => generateChartData());
    setChartDataMap(data);
  }, []);
  return (
  <section id="experts" className="py-10 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
        >
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="demo-badge mb-4 inline-block">Fictional Personas</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Featured </span>
              <span className="gradient-text">Analysts</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Expert analysts tracking and reporting on penny stock activities
            </p>
          </div>

          {/* Analyst Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {analysts.map((analyst, index) => {
              const chartData = chartDataMap[index] || [];
              return (
                <div
                  key={index}
                  className="glass-card p-8 rounded-3xl hover-lift transition-all group"
                >
                  {/* Avatar */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${analyst.gradient} flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform`}>
                      {analyst.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{analyst.name}</h4>
                      <p className="text-sm text-gray-500">{analyst.title}</p>
                    </div>
                  </div>

                  {/* Credibility Score */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">Credibility Score</span>
                      <span className="text-cyan-400 font-bold text-lg">{analyst.credibility}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${analyst.gradient} transition-all duration-1000`}
                        style={{ width: isVisible ? `${analyst.credibility}%` : '0%' }}
                      />
                    </div>
                  </div>

                  {/* Mini Chart */}
                  <div className="mb-6 p-4 bg-black/30 rounded-xl">
                    <p className="text-xs text-gray-500 mb-3">Rating History (12M)</p>
                    <div className="flex items-end gap-1 h-16">
                      {chartData.map((value, i) => (
                        <div
                          key={i}
                          className={`flex-1 bg-gradient-to-t ${analyst.gradient} rounded-t opacity-60 hover:opacity-100 transition-opacity`}
                          style={{ height: `${value}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="p-3 bg-black/30 rounded-xl text-center">
                      <p className="text-2xl font-bold text-cyan-400">{analyst.reports}</p>
                      <p className="text-xs text-gray-500">Reports</p>
                    </div>
                    <div className="p-3 bg-black/30 rounded-xl text-center">
                      <p className="text-2xl font-bold text-green-400">{analyst.accuracy}%</p>
                      <p className="text-xs text-gray-500">Accuracy</p>
                    </div>
                  </div>

                  {/* Specialty */}
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Specialty</p>
                    <p className="text-gray-300">{analyst.specialty}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};