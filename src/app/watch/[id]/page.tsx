import React from 'react';
import { ThumbsUp, ThumbsDown, Share2, Send, Users, MessageSquare, Trophy, Timer, Eye } from 'lucide-react';

interface Props {
  params: {
    id: Promise<string>
  }
}

const Page = async ({ params }: Props) => {
  const id = (await params).id;

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-9 space-y-4">
            {/* Video Player */}
            <div className="aspect-video w-full bg-zinc-900 rounded-2xl overflow-hidden">
              <video className="w-full h-full object-cover" />
            </div>

            {/* Stream Info */}
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">{id}</h1>
              
              {/* Stream Stats */}
              <div className="flex items-center gap-4 text-gray-400 text-sm">
                <div className="flex items-center gap-2">
                  <Users size={16} />
                  <span>24.5K viewers</span>
                </div>
                <span>•</span>
                <span>Live for 2:30:45</span>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-6 py-4 border-y border-zinc-800">
                <button className="flex items-center gap-2 hover:text-custom-orange transition-colors">
                  <ThumbsUp className="w-6 h-6" />
                  <span>24K</span>
                </button>
                <button className="flex items-center gap-2 hover:text-custom-orange transition-colors">
                  <ThumbsDown className="w-6 h-6" />
                  <span>1K</span>
                </button>
                <button className="flex items-center gap-2 hover:text-custom-orange transition-colors">
                  <Share2 className="w-6 h-6" />
                  <span>Share</span>
                </button>
                <button className="ml-auto px-6 py-2 bg-custom-orange text-white rounded-full hover:bg-custom-orange/90 transition-colors">
                  Subscribe
                </button>
              </div>

              {/* Team Scores */}
              <div className="bg-zinc-900 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-custom-orange" />
                  Live Score
                </h3>
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-zinc-800 rounded-full mb-2 mx-auto" />
                    <h4 className="font-semibold">Team Alpha</h4>
                    <p className="text-3xl font-bold text-custom-orange">3</p>
                  </div>
                  <div className="text-center px-4">
                    <p className="text-xl font-bold">VS</p>
                    <p className="text-sm text-gray-400">75:23</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-zinc-800 rounded-full mb-2 mx-auto" />
                    <h4 className="font-semibold">Team Beta</h4>
                    <p className="text-3xl font-bold text-custom-orange">2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-3 space-y-6">
            {/* Chat Section */}
            <div className="bg-zinc-900 rounded-2xl p-4 h-[400px] flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-5 h-5 text-custom-orange" />
                <h2 className="text-xl font-bold">Live Chat</h2>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 space-y-4 overflow-y-auto mb-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-zinc-800" />
                    <div>
                      <p className="text-sm">
                        <span className="font-medium text-custom-orange">User {item}</span>
                        <span className="text-gray-400 ml-2">Great match!</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 bg-zinc-800 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-custom-orange"
                />
                <button className="p-2 bg-custom-orange rounded-full hover:bg-custom-orange/90 transition-colors">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Today's Streams */}
            <div className="bg-zinc-900 rounded-2xl p-4">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5 text-custom-orange" />
                Today's Streams
              </h3>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="group cursor-pointer">
                    <div className="aspect-video w-full rounded-lg overflow-hidden mb-2">
                      <img
                        src={`https://source.unsplash.com/random/800x600?sports=${item}`}
                        alt="Live Stream"
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-medium group-hover:text-custom-orange transition-colors">
                        Championship League 2024
                      </h4>
                      <div className="flex items-center gap-3 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Users size={14} />
                          <span>12.3K</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Timer size={14} />
                          <span>1:30:00</span>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;