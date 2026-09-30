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
            <div className="w-12 h-12 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center font-bold text-gray-500">
              Logo
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
            
            {/* Clock Pill */}
            <div className="bg-white px-5 py-3 rounded-2xl shadow-sm text-right min-w-[140px]">
              <div className="text-xl font-bold">{currentTime || "..."}</div>
              <div className="text-xs text-slate-500 font-medium">{currentDate || "..."}</div>
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
          <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow">
            <BarChart className="w-5 h-5 text-slate-700" />
            <span className="font-semibold text-slate-700">My Progress</span>
          </button>
          <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow">
            <Globe className="w-5 h-5 text-slate-700" />
            <span className="font-semibold text-slate-700">Language</span>
          </button>
          <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow">
            <Settings className="w-5 h-5 text-slate-700" />
            <span className="font-semibold text-slate-700">Settings</span>
          </button>
          <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow">
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
    </div>
  );
}
