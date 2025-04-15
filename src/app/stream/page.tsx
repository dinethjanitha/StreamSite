import React from 'react'

const page = () => {
  return (
    <div className='lg:w-[1200px] lg:mx-auto mt-5'>
        <div className=' grid grid-cols-10'>
            <div className=' col-span-7'>
                <div className=' h-[400px]'>ok</div>
            </div>
            <div className=' col-span-3 flex flex-col'>
                <div className=' flex flex-col bg-[#272221] w-full p-3 rounded-2xl'>
                    <h2 className=' text-3xl font-bold'>Chat</h2>
                    <div className=' h-[250px]'></div>
                    <div className="join">
                        <div>
                            <div>
                            <input className="input join-item" placeholder="Type Message" />
                            </div>
                        </div>
                        <button className="btn join-item">Send</button>
                    </div>
                </div>

                <div className=' btn btn-warning mt-2'>
                    Subscribe
                </div>
            </div>
        </div>

        <div className=' grid grid-cols-10'>
            <div className=' col-span-6'>
                
            </div>
            <div className=' col-span-4'>ok</div>
        </div>
    </div>
  )
}

export default page