import React from 'react'
import { getAllBrands } from '../AllApi/GetBrands'
import Link from 'next/link';

export default async function Brands() {

const payload = await getAllBrands()
console.log(payload , 55555555555);

  return (
    <>
    <div className='container mx-auto bg-gray-200'>
<div className="p-1 mt-[100px] flex flex-wrap items-center justify-center">
{payload?.map((pay:any)=>{return (
  <Link href={`/brandDetails/${pay._id}`}> <div key={pay._id} className="flex-shrink-0 m-6 relative overflow-hidden bg-green-500 rounded-lg max-w-xs shadow-lg group">
    <svg className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform" viewBox="0 0 375 283" fill="none" style={{opacity: '0.1'}}>
      <rect x="159.52" y={175} width={152} height={152} rx={8} transform="rotate(-45 159.52 175)" fill="white" />
      <rect y="107.48" width={152} height={152} rx={8} transform="rotate(-45 0 107.48)" fill="white" />
    </svg>
    <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
      <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style={{background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: '0.2'}}>
      </div>
      <img className="relative w-40" src={pay.image} alt={pay.title}/>
    </div>
    <div className="relative text-white px-6 pb-6 mt-6">
      
    </div>
  </div></Link>
 
)


})}







</div>



    </div>
    </>
    
  )
}
