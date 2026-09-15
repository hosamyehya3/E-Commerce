import { GetSpecificCategory } from '@/app/AllApi/GetSpecificCategory'
import React from 'react'

export default async function CategoryDetails(props:any)
 {
const params = await props.params
const {id} = params
const response = await GetSpecificCategory(id)
console.log(response , 'hgfgfg');

  return (
    <>
    <div className='h-screen flex justify-center container mx-auto items-center bg-gray-200'>

<div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
  <img src={response.image} alt={response.name} className="absolute inset-0 h-full w-full object-cover" />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
  <h3 className="z-10 mt-3 text-3xl font-bold text-white">{response.name}</h3>
  <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">{response._id}</div>
</div>

    </div>

    
    
    
    </>
  )
}
