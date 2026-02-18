'use client'
import Link from 'next/link';
import {
  TrendingUp,
  Shield,
  Users,
  Target,
  Eye,
  Heart,
  Lightbulb,
  Award,
  BookOpen,
  Globe,
  ArrowRight,
  Linkedin,
  Twitter,
  Mail,
  ChevronUp,
  Menu,
  X,
  Clock,
  CheckCircle,
  Zap
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import api from '../lib/helper';

// Team members data
const teamMembers = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Founder & CEO',
    avatar: 'SM',
    bio: 'Former SEC analyst with 20+ years in market surveillance. Pioneer in investor education and market transparency.',
    linkedin: '#',
    twitter: '#',
    gradient: 'from-cyan-400 to-blue-500'
  },
  {
    name: 'Michael Chen',
    role: 'Chief Research Officer',
    avatar: 'MC',
    bio: 'PhD in Financial Economics from MIT. Specializes in quantitative analysis and algorithmic pattern detection.',
    linkedin: '#',
    twitter: '#',
    gradient: 'from-purple-400 to-pink-500'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Education',
    avatar: 'ER',
    bio: 'Award-winning financial educator. Created curriculum used by 50+ universities worldwide.',
    linkedin: '#',
    twitter: '#',
    gradient: 'from-green-400 to-cyan-500'
  },
  {
    name: 'David Park',
    role: 'Lead Data Scientist',
    avatar: 'DP',
    bio: 'Former Google engineer. Expert in machine learning and sentiment analysis systems.',
    linkedin: '#',
    twitter: '#',
    gradient: 'from-orange-400 to-red-500'
  }
];

// Core values data
const coreValues = [
  {
    icon: Shield,
    title: 'Investor Protection',
    description: 'We believe every investor deserves access to transparent, unbiased information to make informed decisions.',
    color: 'cyan'
  },
  {
    icon: BookOpen,
    title: 'Education First',
    description: 'Our mission centers on empowering investors through knowledge, not pushing products or services.',
    color: 'purple'
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'We maintain complete transparency in our methodologies, data sources, and potential conflicts of interest.',
    color: 'pink'
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We never compromise on ethical standards. Our analysis is objective, fair, and independent.',
    color: 'green'
  }
];

// Timeline milestones
const milestones = [
  { year: '2020', title: 'Founded', description: 'Invest in penny was founded with a mission to democratize market intelligence.' },
  { year: '2021', title: 'First 10K Users', description: 'Reached our first major milestone of 10,000 registered investors.' },
  { year: '2022', title: 'Research Lab', description: 'Launched our proprietary research lab for pattern detection.' },
  { year: '2023', title: 'Global Expansion', description: 'Expanded services to cover markets in 15+ countries.' },
  { year: '2024', title: 'AI Integration', description: 'Integrated advanced AI for real-time sentiment analysis.' },
  { year: '2026', title: 'Today', description: 'Serving 100K+ investors with cutting-edge market insights.' }
];


  export default function About() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [aboutData, setAboutData] = useState([]);
  const [loading, setLoading] = useState(true);
  const stripHtml = (html) => {
    if (!html) return "";
    return html.replace(/<[^>]+>/g, "");
  };
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await api.get("/get-about/");
        const abouttData = Array.isArray(response.data)
          ? response.data
          : response.data.results || response.data.data || [];

        setAboutData(abouttData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);



  return (
    <div className="min-h-screen bg-[#0a0a0f] relative overflow-hidden">
      {/* Background Effects */}
      {/* <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[150px]" />
      </div> */}

    

      {/* Header */}
   <Navigation/>

      {/* Main Content */}
      <main className="pt-14 pb-10 relative z-10">
        {/* Hero Section */}
        <section className="px-4 py-10 max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-400 text-xs font-medium rounded-full mb-6">
              <Users className="w-3 h-3" />
              About Invest in penny
            </span>
            <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Empowering Investors with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Market Intelligence
              </span>
            </h1>
            <p className="text-sm md:text-md lg:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              We're on a mission to democratize market intelligence and protect investors
              through education, transparency, and cutting-edge research.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
 {/* Our Story Section */}
<section className="px-4 py-10 max-w-7xl mx-auto">
  <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl px-8 py-8 md:px-14 md:py-16 shadow-2xl">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none" />

  <div className="text-center max-w-4xl mx-auto">


    {/* Heading */}
    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
        Our Story
      </span>
    </h2>

    {/* Content */}
    <div className="space-y-6 text-gray-400 text-sm md:text-md lg:text-lg leading-relaxed">
      <p>
        Invest in Penny was born from a simple observation: retail investors often lack access
        to the sophisticated tools and analysis that institutional investors take for granted.
      </p>

      <p>
        Founded in 2020 by Dr. Sarah Mitchell, a former SEC market surveillance analyst,
        the platform began as a research initiative focused on identifying promotional
        patterns in penny stocks.
      </p>

      <p>
        Today, we empower over 100,000 investors worldwide with actionable insights,
        education, and transparent market intelligence.
      </p>
    </div>

  </div>
  </div>
</section>


        {/* Mission & Vision Section */}
        <section className="px-4 py-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-gradient-to-br from-[#1a1a24] to-[#12121a] rounded-2xl border border-white/10 p-8 hover:border-cyan-500/30 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                To democratize market intelligence by providing every investor—regardless of
                their portfolio size—with the tools, education, and insights needed to make
                informed investment decisions and protect their capital.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-400">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Provide unbiased, educational market research</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Identify and expose promotional patterns</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Empower investors through financial literacy</span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-[#1a1a24] to-[#12121a] rounded-2xl border border-white/10 p-8 hover:border-purple-500/30 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                A financial ecosystem where every investor has equal access to market intelligence,
                where transparency is the norm, and where education empowers better decision-making
                across all market participants.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-400">
                  <Zap className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Level the playing field for retail investors</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <Zap className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Foster a culture of informed investing</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <Zap className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Build the most trusted market intelligence platform</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="px-4 py-6 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our team combines decades of experience in financial regulation, data science,
              and investor education to deliver unparalleled market intelligence.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1a1a24] to-[#12121a] rounded-2xl border border-white/10 p-6 text-center hover:border-cyan-500/30 transition-all group"
              >
                {/* Avatar */}
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center mx-auto mb-4 ring-4 ring-white/5 group-hover:ring-cyan-500/20 transition-all`}>
                  <span className="text-white text-xl font-bold">{member.avatar}</span>
                </div>

                {/* Info */}
                <h4 className="text-lg font-semibold text-white mb-1">{member.name}</h4>
                <p className="text-cyan-400 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{member.bio}</p>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-3">
                  <Link href={member.linkedin} className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all">
                    <Linkedin className="w-4 h-4" />
                  </Link>
                  <Link href={member.twitter} className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all">
                    <Twitter className="w-4 h-4" />
                  </Link>
                  <Link href="#" className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all">
                    <Mail className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="px-4 py-10 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center">
                <Heart className="w-6 h-6 text-pink-400" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              These principles guide everything we do, from the research we publish
              to the way we interact with our community.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              const colorClasses = {
                cyan: 'from-cyan-500/20 to-cyan-500/5 text-cyan-400 group-hover:border-cyan-500/30',
                purple: 'from-purple-500/20 to-purple-500/5 text-purple-400 group-hover:border-purple-500/30',
                pink: 'from-pink-500/20 to-pink-500/5 text-pink-400 group-hover:border-pink-500/30',
                green: 'from-green-500/20 to-green-500/5 text-green-400 group-hover:border-green-500/30'
              };
const colorClass = colorClasses[value.color];

              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#1a1a24] to-[#12121a] rounded-2xl border border-white/10 p-6 transition-all group hover:transform hover:-translate-y-1"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorClass.split(' ').slice(0, 2).join(' ')} flex items-center justify-center mb-4`}>
                    <Icon className={`w-7 h-7 ${colorClass.split(' ')[2]}`} />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{value.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </section>

     
      
      </main>

      {/* Footer */}
   <Footer/>

    
    </div>
  );
};


