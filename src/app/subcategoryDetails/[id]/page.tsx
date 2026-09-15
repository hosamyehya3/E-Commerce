import { getspacificSubCategory } from '@/app/AllApi/GetspacificSubCategory';
import React from 'react'

export default async function SubCategoryDetails(props:any) {
    const params = await props.params;
    
const {id} = params

const response = await getspacificSubCategory(id)
  
  return (
    
<>
<div className='container h-screen flex justify-center items-center bg-gray-200'>
  <div className='w-1/2 border bg-green-400 p-10 text-center text-white rounded-2xl font-bold italic text-2xl'>
 <h1 className='my-1'>Name : {response?.name}</h1> 
 <h1 className='my-1'>Slug :  {response?.slug}</h1> 
 <h1 className='my-1'>Category :  {response?.category}</h1>
  </div>
 
  
  
  
  </div>




</>
  )
}
