import { GetCategorey } from '@/app/AllApi/GetProductCategorey'
import Wow from '../Wow/page'
import React from 'react'

export default async function ShopCategorey() {
    const response = await GetCategorey()
    console.log(response);
    
  return (<>
  <div className='mt-8'>
    <h2 className='text-2xl text-[rgb(49,243,49)] border-l-4 font-bold px-3 border-l-[rgb(49,243,49)]'>Shop by Category</h2>
  </div>
      <div className='flex flex-wrap gap-3'>
        {response?.map((Category:any)=>{return <>
         <article key={Category._id} className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl w-[200px] pt-40 text-center  mx-auto mt-8">
  <img src={Category.image} className="absolute inset-0 h-full w-full object-cover" />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
  <h3 className="z-10 mt-3 text-3xl font-bold text-white">{Category.name}</h3>
  <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">{Category.slug}</div>
</article>
        </>})}


      </div>
  </>

  )
}
