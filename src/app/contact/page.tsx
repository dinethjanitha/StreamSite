import React from 'react';
import { Mail, Phone, MapPin, Clock, Send, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import Image from 'next/image';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
          height={200}
          width={200}
            src="https://source.unsplash.com/random/1920x1080?stadium,sports"
            alt="Contact"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-zinc-950/50" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Get in <span className="text-custom-orange">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Have questions about our services? We&apos;re here to help and answer any questions you might have.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-zinc-900 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full bg-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-custom-orange"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-custom-orange"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full bg-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-custom-orange"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full bg-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-custom-orange"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-custom-orange hover:bg-custom-orange/90 text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-custom-orange p-3 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-gray-300">support@sporttv.com</p>
                    <p className="text-gray-300">business@sporttv.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-custom-orange p-3 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                    <p className="text-gray-300">+1 (555) 987-6543</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-custom-orange p-3 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-gray-300">
                      123 Sport Street, Stadium District<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-custom-orange p-3 rounded-lg">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-300">Saturday - Sunday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Follow Us</h2>
              <div className="flex gap-4">
                <a href="#" className="bg-zinc-900 p-4 rounded-lg hover:bg-zinc-800 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="bg-zinc-900 p-4 rounded-lg hover:bg-zinc-800 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="bg-zinc-900 p-4 rounded-lg hover:bg-zinc-800 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="bg-zinc-900 p-4 rounded-lg hover:bg-zinc-800 transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;