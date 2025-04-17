"use client";
import React, { useState } from "react";
import { Mail, Lock, User } from "lucide-react";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [success, setSuccess] = useState(false);


  const signupPro = async (e : React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    const data = {
        email : email,
        password : password,
        name : name
    }

    try{
        const response = await axios.post("https://streamback-production.up.railway.app/api/v1/regi" , data)
        console.log(response.data)
        setSuccess(true)
        
    }catch(error){
        console.log(error)
    }
  }

  
    interface Props{
        mzg : string
    }


  const SuccessMessage : React.FC<Props> = ( {mzg}) => {
    return (
        <div role="alert" className="alert alert-success">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>{mzg}</span>
</div>
    )
  }

  console.log(email)
  console.log(password)
  console.log(name)

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        
        <div className="text-center mb-8">
          <div className="inline-block p-2 rounded-full bg-custom-orange/10 mb-4">
            <User className="w-8 h-8 text-custom-orange" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Create Account</h2>
          <p className="text-gray-400">Sign up to get started</p>
        </div>

        <div className="bg-zinc-900 rounded-xl p-8 shadow-xl">
          <form className="space-y-6">
            
            <div>
                {success && <SuccessMessage mzg="Sign up successful please login now"/>}
            </div>

            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-custom-orange focus:border-transparent"
                  placeholder="Enter your name"
                  required
                />
              </div>
            </div>

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

            <button

                onClick={signupPro}
              className="w-full btn flex items-center justify-center px-4 py-2.5 border border-transparent rounded-lg shadow-sm text-white bg-custom-orange hover:bg-custom-orange/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-orange transition-colors duration-200"
            >
              Sign up
            </button>

            <p className="text-center text-sm text-gray-400">
              Already have an account?{" "}
              <a href="/signin" className="font-medium text-custom-orange hover:text-custom-orange/80">
                Sign in
              </a>

            
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;