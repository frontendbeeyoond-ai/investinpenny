'use client';
import {Navigation} from './components/Navigation';
import {HeroSection} from './components/HeroSection';
import {StatsSection} from './components/StatsSection';
import {AnalysisSection} from './components/AnalysisSection';
import {SentimentSection} from './components/SentimentSection';
import {CommunitySection} from './components/CommunitySection';
import {ExpertsSection} from './components/ExpertsSection';
import {Footer} from './components/Footer'; 
import {BlogSection} from './components/BlogSection';
export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <AnalysisSection />
      <SentimentSection />
      <BlogSection/>
      <CommunitySection />
      <ExpertsSection />
      <Footer />
    </div>
  );
}
