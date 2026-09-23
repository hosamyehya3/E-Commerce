import { getProductsApi } from '@/app/AllApi/productsApi'
import Link from 'next/link'
import React, { lazy, Suspense } from 'react'
import { ScaleLoader } from 'react-spinners';
import Addbtn from '../_components/Addbtn/Addbtn';
const ShopCategorey = lazy(() => import('../_components/ShopCategorey/shopCategorey'));
export default async function FeaturedProuducts() {
  
 const DataOfProducts =  await getProductsApi()

  return (
    <>
     <div className='container mx-auto my-5'>
      <Suspense fallback={<div className='mt-5 flex justify-center items-center'><ScaleLoader /></div> }>
    <ShopCategorey/>

      </Suspense>
   
           <div className='p-2  hover w-1/4 mx-auto  mt-10   text-center  border-[rgb(49,243,49)] '><h4 className="text-[rgb(49,243,49)]  my-2 font-bold text-3xl">FeaturedProuducts</h4></div>

    </div>




    <div className='container  mt-[40px] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto sm:gap-2 md:gap-4 lg:gap-5'>
      
    {DataOfProducts?.map((Product:any)=>{ return (<div key={Product._id} className="w-72 mt-5 mb-4 bg-white mx-auto shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">


  <Link href={`/ProductDetails1/${Product._id}`}>
       <img   src={Product.imageCover} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />

  </Link>
    <div className="px-4 py-3 w-72">
      <span className="text-gray-400 mr-3 uppercase text-xs">{Product.brand.name}</span>
      <p className="text-lg font-bold text-black truncate block capitalize">{Product.title}</p>
      <div className="flex items-center">
        {!Product.priceAfterDiscount? <><p className="text-sm text-gray-600 cursor-auto ml-2">${Product.price}</p></>:<>
           <p className="text-lg font-semibold text-black cursor-auto my-3">${Product.priceAfterDiscount}</p>
        <del>
          <p className="text-sm text-gray-600 cursor-auto ml-2">${Product.price}</p>
        </del>
        </>}
          <div className="ml-auto">
       <Addbtn prodId={Product._id} cls={'curser'} child={<>  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="text-green-500" viewBox="0 0 16 16">
            <path fillRule="evenodd"
             d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
          </svg></>}/>
       
          </div>
   
      </div>
    </div>
  
</div>)})}

    </div>



    
    
    </>
  )
}
