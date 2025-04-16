"use client"
import React, { useState } from 'react';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import axios from 'axios';
import SuccessMzg from '../components/SuccessMzg';
import ErrorMzg from '../components/ErrorMzg';
import { useRouter } from 'next/navigation';

const Page = () => {

    const router = useRouter();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [success , setSuccess] = useState<boolean>(false)
  const [error , setError] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const data = {
        email : email,
        password : password
    }

    try{
        const response = await axios.post("http://localhost:3005/api/v1/signin" , data)

        console.log(response.data)


        localStorage.setItem("token" , response.data.token)

        setSuccess(true)

        setTimeout(() => {
            setSuccess(false)

            router.push("/")
        } , 5000)
    }catch(error){
        setError(true)
        setTimeout(() => {
            setError(false)
        },5000)
        console.log(error)
    }

    console.log('Sign in:', { email, password });
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="inline-block p-2 rounded-full bg-custom-orange/10 mb-4">
            <ArrowRight className="w-8 h-8 text-custom-orange" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-gray-400">Sign in to continue your journey</p>
        </div>

        {/* Form Section */}
        <div className="bg-zinc-900 rounded-xl p-8 shadow-xl">
        {success && <SuccessMzg mzg='Login Pass'/>}
        {error && <ErrorMzg mzg='Login Failed try again'/>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-custom-orange focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-custom-orange focus:border-transparent"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-600 bg-zinc-800 text-custom-orange focus:ring-custom-orange"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm font-medium text-custom-orange hover:text-custom-orange/80">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center px-4 py-2.5 border border-transparent rounded-lg shadow-sm text-white bg-custom-orange hover:bg-custom-orange/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-orange transition-colors duration-200"
            >
              Sign in
            </button>

            <p className="text-center text-sm text-gray-400">
              Don &apos;t have an account?{' '}
              <a href="#" className="font-medium text-custom-orange hover:text-custom-orange/80">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;