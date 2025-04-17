import React from "react";
import { Users, Trophy, Globe, Star } from "lucide-react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            width={200}
            height={200}
            src="/3.png"
            alt="About Us"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-zinc-950/50" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            About <span className="text-custom-orange">Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Discover who we are, our mission, and how we bring the world of sports closer to you.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* About Description */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Who We Are</h2>
            <p className="text-gray-300 text-lg">
              At SportTV, we are passionate about connecting sports enthusiasts with their favorite games, teams, and players. 
              Our platform provides live streaming, exclusive content, and real-time updates to ensure you never miss a moment.
            </p>
            <p className="text-gray-300 text-lg">
              With a global audience and a commitment to excellence, we strive to deliver the best sports experience to fans everywhere.
            </p>
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 p-6 rounded-2xl text-center">
              <Users className="w-12 h-12 text-custom-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold">10M+ Users</h3>
              <p className="text-gray-300">Join millions of sports fans worldwide.</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-2xl text-center">
              <Trophy className="w-12 h-12 text-custom-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold">150+ Events</h3>
              <p className="text-gray-300">Stream live matches and tournaments daily.</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-2xl text-center">
              <Globe className="w-12 h-12 text-custom-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold">Global Reach</h3>
              <p className="text-gray-300">Available in over 50 countries worldwide.</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-2xl text-center">
              <Star className="w-12 h-12 text-custom-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold">5-Star Ratings</h3>
              <p className="text-gray-300">Loved by fans for our seamless experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-zinc-900 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="text-gray-300 text-lg">
            To revolutionize the way sports are experienced by providing unparalleled access to live events, 
            exclusive content, and a vibrant community of fans.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="text-center">
              <div className="w-32 h-32 bg-zinc-800 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold">Team Member {item}</h3>
              <p className="text-gray-300">Position {item}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;