import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  ShieldCheck,
  MapPin,
  Heart,
  BookOpen,
  ArrowRight,
  User,
  Quote,
  Sparkles,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const [photoError, setPhotoError] = useState(false);

  return (
    <div id="about-page" className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Our Mission & Vision</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            About Explore Bangladesh
          </h1>
          <p className="text-emerald-700 font-serif-title italic text-lg sm:text-xl mt-3">
            "Discover the Beauty of 64 Districts"
          </p>
        </div>

        {/* Primary Mission Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/80 mb-12">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-2">
              Platform Mission
            </span>
            <p className="text-xl sm:text-2xl font-medium text-slate-800 leading-relaxed font-serif-title mb-6">
              "Explore Bangladesh is a travel information platform dedicated to helping people discover the natural beauty, cultural heritage, historical landmarks, and hidden treasures of all 64 districts of Bangladesh. Our goal is to make travel information accessible, organized, and easy to understand so that everyone can explore Bangladesh with confidence."
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Bangladesh possesses a remarkably diverse topography—from the world's longest unbroken natural sea beach in Cox's Bazar and the cloud-kissed mountain valleys of Bandarban and Sajek, to the ancient archaeological ruins of Mahasthangarh and the mystical mangrove waterways of the Sundarbans. Despite this richness, comprehensive, organized, and transparent travel information has historically been fragmented. Explore Bangladesh provides an authoritative, structured digital guide for all 64 districts.
            </p>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Complete 64-District Coverage
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every district in Bangladesh has distinctive history, nature, and cultural life. Rather than focusing only on mainstream tourist hubs, we document the heritage and travel points of all 64 administrative districts.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Factual & Non-Commercial
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We are not a travel agency, booking broker, or commercial vendor. We do not sell hotel packages, flights, or tours. Our focus is 100% objective, practical, and authentic travel information.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Clear Step-by-Step Directions
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Knowing where a place is located is only half the journey. We explain realistic routes from Dhaka, how to reach the site from local district headquarters, and what local transit options are available.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Responsible & Eco-Friendly Travel
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We actively advocate for the preservation of fragile ecosystems like swamp forests, coral reefs, and mangrove reserves. Travelers are guided to respect local tribal cultures, avoid plastic waste, and protect Bangladesh's national treasures.
            </p>
          </div>
        </div>

        {/* Meet the Creator Section */}
        <div id="meet-the-creator" className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/80 mb-12">
          {/* Section Eyebrow */}
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Meet the Creator</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Creator Photograph & Identity */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="w-full max-w-[280px] aspect-[3/4] rounded-2xl overflow-hidden shadow-md border-2 border-emerald-100/80 bg-slate-100 relative">
                {!photoError ? (
                  <img
                    src="/images/pic_cv.jpeg"
                    alt="Afnan Bin Islam Nahin - Creator & Developer of Explore Bangladesh"
                    className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                    onError={() => setPhotoError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-emerald-50 to-slate-100 text-slate-500">
                    <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                      <User className="w-10 h-10" />
                    </div>
                    <span className="font-bold text-slate-800 text-base">Afnan Bin Islam Nahin</span>
                    <span className="text-xs text-emerald-700 font-medium mt-1">Creator & Developer</span>
                  </div>
                )}
              </div>

              <div className="mt-4 space-y-1">
                <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                  Afnan Bin Islam Nahin
                </h3>
                <p className="text-sm font-semibold text-emerald-700">
                  Creator & Developer of Explore Bangladesh
                </p>
                <p className="text-xs text-slate-500 pt-1">
                  BSc in Computer Science and Engineering (CSE)
                </p>
              </div>
            </div>

            {/* Right Column: Purpose & Motivation */}
            <div className="lg:col-span-8 space-y-6">
              {/* Creator Greeting & Short Educational Intro */}
              <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/60 border border-emerald-100 text-slate-800 text-sm sm:text-base leading-relaxed">
                <p>
                  Hello, I am <strong className="font-semibold text-emerald-950">Afnan Bin Islam Nahin</strong>, the creator and developer of Explore Bangladesh. I have completed my BSc in Computer Science and Engineering (CSE).
                </p>
              </div>

              {/* Prominent Subsection: Why I Created Explore Bangladesh */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center space-x-2 mb-4">
                  <span className="w-2 h-6 bg-emerald-600 rounded-full inline-block" />
                  <span>Why I Created Explore Bangladesh</span>
                </h3>

                <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                  <p>
                    I created Explore Bangladesh with the goal of making the beauty, history, and cultural heritage of Bangladesh easier for everyone to discover.
                  </p>

                  <p>
                    Bangladesh has countless beautiful places, from its rivers, forests, hills, and beaches to its historical monuments and cultural landmarks. However, information about many of these destinations is often scattered across different sources, making it difficult for travelers to explore everything our country has to offer.
                  </p>

                  <p>
                    This inspired me to develop Explore Bangladesh, a digital tourism platform that brings together travel information from all 8 divisions and 64 districts of Bangladesh.
                  </p>

                  <p>
                    My goal is to help people discover both popular tourist attractions and lesser-known destinations while providing practical information that can make travel planning easier and more convenient.
                  </p>

                  <p>
                    Through Explore Bangladesh, I want to highlight the natural beauty, history, and cultural diversity of our country and encourage more people to explore the remarkable destinations around them.
                  </p>

                  <p>
                    I hope to continue improving this platform by expanding its content, keeping destination information updated, and incorporating valuable suggestions from travelers and local communities.
                  </p>
                </div>
              </div>

              {/* Creator Closing Motto Callout */}
              <div className="pt-2 border-t border-slate-100 flex items-start space-x-3">
                <Quote className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                <p className="text-sm font-medium text-slate-800 italic leading-snug">
                  "Explore Bangladesh is my initiative to make discovering our country a little easier for everyone."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-emerald-950 text-white rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-emerald-900">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Start Your Journey Today</h2>
            <p className="text-emerald-200 text-sm mt-1">
              Select any of the 64 districts or browse by travel theme.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link
              to="/districts"
              className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold transition-colors inline-flex items-center space-x-1.5"
            >
              <span>Explore Districts</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="px-5 py-3 rounded-xl bg-emerald-900 hover:bg-emerald-800 text-emerald-100 text-xs sm:text-sm font-semibold transition-colors border border-emerald-700"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
