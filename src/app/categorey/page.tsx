import React from 'react'
import { GetCategorey } from '../AllApi/GetProductCategorey'
import Link from 'next/link'

export default async function Categorey() {

const data = await GetCategorey()



  return (
    <>
    <div className='container mx-auto flex flex-wrap justify-around mb-10 gap-15  mt-[100px]'>
   {data.map((onebyOne:any)=>{ return (
    <Link key={onebyOne._id} className='h-[400px] mb-30 w-[40%]' href={`/categoryDetails/${onebyOne._id}`}>
      <div key={onebyOne._id}  className="relative  block isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-80 w-full  mt-24">
  <img src={onebyOne.image} alt="University of Southern California" className="absolute inset-0 h-full w-full " />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
  <h3 className="z-10 mt-3 text-3xl font-bold text-white">{onebyOne.name}</h3>
  <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">{onebyOne.slug}</div>
</div>
    </Link>








    )})}

    </div>
 
    
    
    </>
  )
}
