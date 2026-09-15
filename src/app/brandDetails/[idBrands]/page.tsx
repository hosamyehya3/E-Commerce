import { GetspecificBrand } from '@/app/AllApi/GetspecificBrand';
import React from 'react'

export default async function BrandDetails(props:any) {
    const params = await props.params 
    const {idBrands} = params
    console.log(idBrands);
    const data =await GetspecificBrand(idBrands)
    
    // const response = await getProductDetails1(id)
  return (
  <>
  <div className='container h-screen mx-auto bg-gray-200 flex justify-center items-center'>
      <div className="flex-shrink-0 m-6 mt-[120px] relative overflow-hidden bg-green-500 rounded-lg max-w-xs shadow-lg group">
    <svg className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform" viewBox="0 0 375 283" fill="none" style={{opacity: '0.1'}}>
      <rect x="159.52" y={175} width={152} height={152} rx={8} transform="rotate(-45 159.52 175)" fill="white" />
      <rect y="107.48" width={152} height={152} rx={8} transform="rotate(-45 0 107.48)" fill="white" />
    </svg>
    <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
      <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style={{background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: '0.2'}}>
      </div>
      <img className="relative w-40 rounded-2xl " src={data.image} alt ={data.name}/>
    </div>
    <div className="relative text-white px-6 pb-6 mt-6">
      <div className=" text-center">
        <span className="block font-semibold my-2   text-xl">{data.name}</span>
        <span className="block font-semibold my-2 text-xl">{data.createdAt}</span>
        <span className="block font-semibold my-2 text-xl">{data._id}</span>
      </div>
    </div>
  </div>
  </div>
  
  
  </>
  )
}
