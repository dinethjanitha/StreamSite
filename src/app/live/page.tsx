"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import {  Timer, Users } from 'lucide-react';

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
  
    const live = streams.filter((stream) => stream.status == "live")


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
    <div className='bg-zinc-950 h-screen p-5'>
        <section className=' lg:w-[1200px]  lg:mx-auto '>
        <input type="text" className=' input w-full mb-5' onChange={handleChange} placeholder=' Search' />

          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold tracking-tight">
              <span className="text-custom-orange">Featured</span> Live Events
            </h2>
           
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {live.map((item , key) => (
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
    </div>
  )
}

export default Page