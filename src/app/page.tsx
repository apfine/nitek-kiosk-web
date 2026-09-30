"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Headphones, 
  Keyboard, 
  Bot, 
  BookOpen, 
  FlaskConical, 
  GraduationCap, 
  BarChart, 
  Globe, 
  Settings, 
  HelpCircle,
  ArrowRight,
  Headset,
  Monitor
} from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [showLearningModal, setShowLearningModal] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      setCurrentDate(now.toLocaleDateString([], { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }));
    };
    
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F7FA] to-[#E4EBF5] text-[#0F172A] flex flex-col font-sans selection:bg-blue-100">
      <main className="flex-1 flex flex-col max-w-7xl mx-auto w-full px-6 py-8">
        
        {/* Header */}
        <header className="flex flex-wrap items-center justify-between gap-4 mb-16">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center">
              <Image src="/nitek.jpeg" alt="NITEK Logo" width={48} height={48} className="object-cover w-full h-full" />
            </div>
            <h1 className="text-3xl font-black tracking-[0.2em] text-[#1E293B]">
              NITEK
            </h1>
          </div>
          
          <div className="flex items-center gap-4 flex-wrap">
            {/* Status Pills */}
            <button className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-full shadow-sm hover:shadow-md transition-shadow">
              <Headset className="w-6 h-6 text-blue-500" />
              <span className="text-sm font-semibold text-slate-700 leading-tight text-left">
                Connect<br/>Headphones
              </span>
            </button>
            
            <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-full shadow-sm">
              <Keyboard className="w-6 h-6 text-green-500" />
              <span className="text-sm font-semibold text-slate-700 leading-tight text-left">
                Keyboard/Mouse<br/>Connected
              </span>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">Welcome</h2>
          <p className="text-xl md:text-2xl text-slate-600 font-medium">Choose how you want to learn today</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto w-full">
          
          <a href="https://homiis.vercel.app/" target="_blank" rel="noreferrer" className="group flex flex-col bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-[360px]">
            <div className="bg-[#E0F2FE] w-16 h-16 rounded-2xl flex items-center justify-center mb-auto group-hover:scale-110 transition-transform">
              <Bot className="w-8 h-8 text-[#0284C7]" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">HOMI</h3>
              <p className="text-slate-500 mb-6 line-clamp-3">Get instant help, explain concepts, and learn smarter.</p>
              <div className="flex items-center justify-between text-[#0284C7] font-bold">
                <span>Launch</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </a>

          <a href="https://dlib.vercel.app/" target="_blank" rel="noreferrer" className="group flex flex-col bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-[360px]">
            <div className="bg-[#DCFCE7] w-16 h-16 rounded-2xl flex items-center justify-center mb-auto group-hover:scale-110 transition-transform">
              <BookOpen className="w-8 h-8 text-[#16A34A]" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Digital Library</h3>
              <p className="text-slate-500 mb-6 line-clamp-3">Explore eBooks, notes, videos and more.</p>
              <div className="flex items-center justify-between text-[#16A34A] font-bold">
                <span>Launch</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </a>

          <Link href="/virtual-labs" className="group flex flex-col bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-[360px]">
            <div className="bg-[#F3E8FF] w-16 h-16 rounded-2xl flex items-center justify-center mb-auto group-hover:scale-110 transition-transform">
              <FlaskConical className="w-8 h-8 text-[#9333EA]" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Virtual STEM Lab</h3>
              <p className="text-slate-500 mb-6 line-clamp-3">Explore, experiment and learn through simulations.</p>
              <div className="flex items-center justify-between text-[#9333EA] font-bold">
                <span>Launch</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          <button onClick={() => setShowLearningModal(true)} className="group flex flex-col bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-[360px] text-left">
            <div className="bg-[#FFEDD5] w-16 h-16 rounded-2xl flex items-center justify-center mb-auto group-hover:scale-110 transition-transform">
              <GraduationCap className="w-8 h-8 text-[#EA580C]" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Learning Content</h3>
              <p className="text-slate-500 mb-6 line-clamp-3">Access curriculum, practice tests and interactive lessons.</p>
              <div className="flex items-center justify-between text-[#EA580C] font-bold">
                <span>Launch</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </button>
        </div>

        {/* Footer Actions */}
        <div className="mt-auto flex justify-center gap-4 flex-wrap pb-4">
          <button onClick={() => setShowHelpModal(true)} className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow">
            <HelpCircle className="w-5 h-5 text-slate-700" />
            <span className="font-semibold text-slate-700">Help</span>
          </button>
        </div>

      </main>

      {/* Modal for Coming Soon */}
      {showLearningModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Learning Content Coming Soon</h3>
            <p className="text-slate-600 mb-8">Module is currently offline or preparing.</p>
            <div className="flex justify-end">
              <button 
                onClick={() => setShowLearningModal(false)}
                className="px-6 py-2 bg-slate-100 hover:bg-slate-200 rounded-full font-semibold transition-colors"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Help Information */}
      {showHelpModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl p-8 max-w-2xl w-full shadow-2xl max-h-[90vh] overflow-y-auto my-auto">
            <h3 className="text-2xl font-bold mb-6 text-[#1E293B]">Module Information</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-[#0F172A]">HOMI</h4>
                <p className="text-slate-600 mt-1">HOMI is a multimodal study assistant which helps you clear exams. It features an advanced doubt solver, an interactive viva taker, and comprehensive AI-enabled features to personalize your learning experience.</p>
              </div>
              <hr className="border-slate-100" />
              <div>
                <h4 className="text-lg font-bold text-[#0F172A]">Digital Library</h4>
                <p className="text-slate-600 mt-1">A vast repository of academic resources. The Digital Library provides unrestricted access to eBooks, curated notes, research papers, and video lectures tailored to your curriculum.</p>
              </div>
              <hr className="border-slate-100" />
              <div>
                <h4 className="text-lg font-bold text-[#0F172A]">Virtual STEM Lab</h4>
                <p className="text-slate-600 mt-1">Experience science in action! The Virtual STEM Lab allows you to perform complex experiments, simulate chemical reactions, and explore physics concepts in a completely safe, interactive digital environment.</p>
              </div>
              <hr className="border-slate-100" />
              <div>
                <h4 className="text-lg font-bold text-[#0F172A]">Learning Content</h4>
                <p className="text-slate-600 mt-1">Your core academic hub. Access structured curriculum modules, engage with interactive daily lessons, and test your knowledge with adaptive practice assessments.</p>
              </div>
            </div>

            <div className="flex justify-end mt-8">
              <button 
                onClick={() => setShowHelpModal(false)}
                className="px-6 py-2 bg-slate-100 hover:bg-slate-200 rounded-full font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
