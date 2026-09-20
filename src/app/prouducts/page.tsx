import React from 'react'
import { ProdType } from '@/data/file';
import Link from 'next/link';

export default async function Prouducts() {

async function getProducts() : Promise<ProdType[] | null>{
  try {
      let res = await fetch('https://ecommerce.routemisr.com/api/v1/products' , {
        // cache : "force-cache" ,
      
      })
    let payload = await res.json();
    return payload.data

  } catch (error) {
    console.log(error);
    return null
  }
    
}
 const DataOfProducts = await getProducts()

  return (
    <>
  
    <div className='mt-20'>

    </div>
    <div className='mt-5  mx-auto container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 '>
        
{DataOfProducts?.map((pro)=>{return <><div key={pro._id} className='shadow card rounded-2xl border border-green-500 '>
  <Link href={`/productDetails/${pro._id}`}>
      <div className='w-full'>
      
      <img className='w-full rounded-2xl' src={pro.imageCover} alt={pro.title} /></div>
    {/* <div>

        <h2 className='font-bold text-center'>{pro.slug}</h2>
        <h2 className='text-green-500 text-center'>{pro.title}</h2>
        <h2 className='text-green-500 text-center'>{pro.price +" egp"}</h2>
    </div> */}
  </Link>

</div></>})}


    </div>
    
    </>
  )
}
