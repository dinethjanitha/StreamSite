"use client"
import React, { ChangeEvent, useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import Image from 'next/image';
import axios from 'axios';
import SuccessMzg from '../components/SuccessMzg';
import ErrorMzg from '../components/ErrorMzg';

interface ContactForm {
  name : string,
  email:string,
  subject : string,
  message : string
}

const ContactPage = () => {

  const [contactFromData , setContactFormData] = useState<ContactForm>({
    name : "",
    email:"",
    subject : "",
    message : ""
  })

  const [success , setSuccess] = useState<boolean>(false)
  const [error , SetError] = useState<boolean>(false)


  const handleInputs = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const data = e.target.value;
      const field = e.target.name;

      console.log(data);
      console.log(field);

      setContactFormData((prevData) => {
        return {
          ...prevData,
          [field]: data,
        };
      });
  }

  console.log(contactFromData)

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
      try{
        const response = await axios.post("http://localhost:3005/api/v1/contact" , contactFromData)

        console.log(response)

        SetError(false)
        setSuccess(true)
        setTimeout(()=>{
          setSuccess(false)
        },5000)
      }catch(error){
        setSuccess(false)
        SetError(true)
        console.log(error)
      }
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <section className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
          height={200}
          width={200}
            src="/3.png"
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


      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
   
          
          <div className="bg-zinc-900 p-8 rounded-2xl">
          {success && <SuccessMzg mzg='Message send successfull!'/>}
          {error && <ErrorMzg mzg='Message said faild!'/>}
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    name='name'
                    required
                    onChange={handleInputs}
                    className="w-full bg-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-custom-orange"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name='email'
                    required
                    onChange={handleInputs}
                    className="w-full bg-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-custom-orange"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  name='subject'
                  required
                  onChange={handleInputs}
                  className="w-full bg-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-custom-orange"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  rows={6}
                  name='message'
                  required
                  onChange={handleInputs}
                  className="w-full bg-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-custom-orange"
                  placeholder="Your message..."
                />
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-custom-orange hover:bg-custom-orange/90 text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>


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
                    <p className="text-gray-300">djanithak@gmail.com</p>
                    <p className="text-gray-300">dinethjanitha@outlook.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-custom-orange p-3 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-gray-300">+94719422044</p>
                    <p className="text-gray-300">+94719422044</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-custom-orange p-3 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-gray-300">
                      Matara, Galle Road<br />
                      Sri Lanka, 81400
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