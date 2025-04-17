"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Trophy, FolderRoot as Football, ShoppingBasket as Basketball, Baseline as Baseball, Tent as Tennis, Ticket as Cricket, Timer, TrendingUp, Eye, Users } from 'lucide-react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface StreamProp {
    _id : string,
    thumbnail : string,
    VideoLink : string,
    description : string,
    catagory : string,
    status : string,
    title : string
  }
  

const Page = () => {

    const router = useRouter();
    const [streams , setStreams] = useState<StreamProp[]>([]);
    const [streamsAll , setStreamsAll] = useState<StreamProp[]>([]);


    const fetchStrems = async () => {
      try{
        const response = await axios.get("https://streamback-production.up.railway.app/api/v1/stream")
  
        console.log(response.data)
  
        setStreams(response.data)
        setStreamsAll(response.data)
      }catch(error){
        console.log(error)
      }
    }
  
    useEffect(() => {
      fetchStrems();
    },[])
  
    // console.log("streamsdsd[0]")
  
      const handleChange = ( e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;

        const searchStream = streams.filter((item) => item._id.includes(val) ||
                                item.title.includes(val) || item.status.includes(val))

        setStreams(searchStream);

        if(streams.length == 0){
            setStreams(streamsAll)
        }

        if(val == ""){
            setStreams(streamsAll)
        }
        
    }

  return (
    <div className="min-h-screen sm:p-5 bg-zinc-950 text-white p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <input type="text" className=' input w-full' onChange={handleChange} placeholder=' Search' />
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold tracking-tight">
              <span className="text-custom-orange">Featured</span> Live Events
            </h2>
            <button className="text-sm text-gray-400 hover:text-white transition-colors">
              View All →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {streams.map((item , key) => (
              <div onClick={() => {router.push(`/watch/${item._id}`)}} key={key} className="group relative overflow-hidden rounded-2xl bg-zinc-900 hover:bg-zinc-800 transition-all duration-300">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                  width={200}
                  height={200}
                    src={item.thumbnail}
                    alt="Event"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-red-500 text-xs font-semibold px-2 py-1 rounded-full">
                  {item.status}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Users size={16} />
                      <span>{item.description}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Timer size={16} />
                      <span>2:30:45</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold tracking-tight">Upcoming Matches</h2>
              <button className="text-sm text-gray-400 hover:text-white transition-colors">
                Full Schedule →
              </button>
            </div>
            <div className="bg-zinc-900 rounded-2xl overflow-hidden">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="group flex items-center justify-between p-4 border-b border-zinc-800 hover:bg-zinc-800 transition-all duration-200">
                  <div className="flex items-center gap-4">
                    <span className="text-custom-orange font-mono">{String(item).padStart(2, '0')}</span>
                    <div>
                      <p className="font-semibold">Team Alpha vs Team Beta</p>
                      <p className="text-sm text-gray-400">Quarter Finals • Group A</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold">11:00 AM</span>
                    <button className="opacity-0 group-hover:opacity-100 bg-custom-orange text-white text-sm px-3 py-1 rounded-full transition-all duration-200">
                      Watch
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold tracking-tight">Categories</h2>
              <button className="text-sm text-gray-400 hover:text-white transition-colors">
                View All →
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { icon: Football, name: 'Football' },
                { icon: Basketball, name: 'Basketball' },
                { icon: Baseball, name: 'Baseball' },
                { icon: Tennis, name: 'Tennis' },
                { icon: Cricket, name: 'Cricket' },
                { icon: Trophy, name: 'Others' },
              ].map((category, index) => (
                <button
                  key={index}
                  className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-zinc-900 hover:bg-zinc-800 transition-all duration-200"
                >
                  <category.icon className="w-8 h-8 text-custom-orange" />
                  <span className="text-sm font-medium">{category.name}</span>
                </button>
              ))}
            </div>
          </section>
        </div>

        {/* Trending Events */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold tracking-tight">
              <span className="text-custom-orange">Trending</span> Events
            </h2>
            <button className="text-sm text-gray-400 hover:text-white transition-colors">
              See More →
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-zinc-900 rounded-2xl overflow-hidden">
              <div className="p-4 border-b border-zinc-800">
                <div className="flex items-center gap-2 text-custom-orange mb-2">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm font-semibold">Most Viewed</span>
                </div>
                {[1, 2, 3].map((item) => (
                  <div key={item} className="group flex items-center justify-between py-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-gray-600">#{item}</span>
                      <div>
                        <p className="font-medium group-hover:text-custom-orange transition-colors">
                          World Championship Finals
                        </p>
                        <p className="text-sm text-gray-400">256K viewers</p>
                      </div>
                    </div>
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-zinc-900 rounded-2xl overflow-hidden">
              <div className="p-4 border-b border-zinc-800">
                <div className="flex items-center gap-2 text-custom-orange mb-2">
                  <Trophy className="w-4 h-4" />
                  <span className="text-sm font-semibold">Featured Tournaments</span>
                </div>
                {[1, 2, 3].map((item) => (
                  <div key={item} className="group flex items-center justify-between py-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-gray-600">#{item}</span>
                      <div>
                        <p className="font-medium group-hover:text-custom-orange transition-colors">
                          European League 2024
                        </p>
                        <p className="text-sm text-gray-400">Quarter Finals</p>
                      </div>
                    </div>
                    <button className="text-sm text-custom-orange hover:text-custom-orange/80 transition-colors">
                      Details →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Page;