import Link from 'next/link'
import React from 'react'

export default function WelcomePage() {
    return (
        <>
            <div className='bg-gray-200 container mx-auto h-screen flex justify-center items-center font-bold '>
                <div className='relative'>
                      
                         <h1 className='text-center p-3 my-10 text-6xl WelcomePage' >Welcome to <span className='text-[rgb(49,243,49)] '>S</span>hop<span className='text-[rgb(49,243,49)] '>M</span>art</h1>
                  
                    <p className='text-gray-700 text-center font-semibold italic mt-10 text-3xl'>
                        Discover the latest technology, fashion, and lifestyle products. Quality guaranteed with fast shipping and excellent customer service.
                    </p>
                    <div className='flex justify-center items-center mt-20 gap-2 text-black'>
                       <Link href='/home'><button className=' hover:text-white curser hover:bg-[rgb(49,243,49)] hover:border-transparent  py-3 px-7  border border-2 border-black rounded-xl '>Shop Now</button></Link> 
                       <Link href='/categorey'><button className='curser hover:text-white hover:bg-[rgb(49,243,49)] hover:border-transparent  py-3 px-7 border border-2 border-black rounded-xl '>Browse Categories</button></Link> 
                    </div>
                </div>

            </div>


        </>
    )
}
