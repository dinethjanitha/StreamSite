import React from 'react';
import { Play, Trophy, Users, Timer, TrendingUp, ArrowRight } from 'lucide-react';

const Page = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/2.png"
            alt="Sports"
            className="w-full h-full  opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-custom-orange">
            STREAM YOUR FAVORITE SPORT
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Watch live matches, tournaments, and exclusive sports content in one place
          </p>
          <button className="group flex items-center gap-2 bg-custom-orange text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-custom-orange/90 transition-all duration-300">
            Watch Now
            <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <span className="flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                LIVE NOW
              </h2>
              <button className="text-custom-orange hover:text-custom-orange/80 transition-colors flex items-center gap-1">
                View All <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-zinc-900">
              <img
                src="https://source.unsplash.com/random/800x600?basketball,match"
                alt="Live Match"
                className="w-full aspect-video object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 p-4 w-full">
                <div className="flex items-center gap-2 text-sm text-custom-orange font-semibold mb-2">
                  <Users className="w-4 h-4" />
                  <span>24.5K watching</span>
                </div>
                <h3 className="text-xl font-bold mb-1">TEAM A vs TEAM B</h3>
                <p className="text-gray-300">Quarter Finals • Group A</p>
              </div>
            </div>
          </div>


          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Trophy className="w-6 h-6 text-custom-orange" />
                FEATURED
              </h2>
              <button className="text-custom-orange hover:text-custom-orange/80 transition-colors flex items-center gap-1">
                More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-zinc-900">
              <img
                src="https://source.unsplash.com/random/800x600?sports,stadium"
                alt="Featured"
                className="w-full aspect-video object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 p-4">
                <div className="flex items-center gap-2 text-sm text-custom-orange font-semibold mb-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>Trending</span>
                </div>
                <h3 className="text-xl font-bold">Sport Center</h3>
              </div>
            </div>
          </div>


          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">BASKETBALL</h2>
              <button className="text-custom-orange hover:text-custom-orange/80 transition-colors flex items-center gap-1">
                All Games <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-zinc-900">
              <img
                src="https://source.unsplash.com/random/800x600?basketball,game"
                alt="Basketball"
                className="w-full aspect-video object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 p-4">
                <div className="flex items-center gap-2 text-sm text-custom-orange font-semibold mb-2">
                  <Timer className="w-4 h-4" />
                  <span>Starting in 2h</span>
                </div>
                <h3 className="text-xl font-bold">LEAGUE MATCH</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://source.unsplash.com/random/800x600?sports,broadcasting"
              alt="About"
              className="rounded-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-custom-orange p-6 rounded-2xl">
              <div className="text-4xl font-bold">10M+</div>
              <div className="text-sm">Active Users</div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              ABOUT SPORT TV
            </h2>
            <p className="text-xl text-gray-300">
              Experience sports like never before with our cutting-edge streaming platform. 
              Watch live matches, exclusive content, and stay connected with your favorite teams 
              and players around the globe.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-zinc-900 p-6 rounded-2xl">
                <div className="text-3xl font-bold text-custom-orange mb-2">150+</div>
                <div className="text-gray-300">Live Events Daily</div>
              </div>
              <div className="bg-zinc-900 p-6 rounded-2xl">
                <div className="text-3xl font-bold text-custom-orange mb-2">50+</div>
                <div className="text-gray-300">Sports Categories</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;