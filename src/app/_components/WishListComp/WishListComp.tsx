import { GetWishList } from '@/app/AllApi/actions/GetWishList/GetWishList'
import { DeleteWisListItem } from '@/app/AllApi/DeleteWishList/DeleteWishList';
import { IoCloseSharp } from "react-icons/io5";

import React from 'react'
import BtnDeleteWishList from '../BtnDeleteWishList/BtnDeleteWishList';
export default async function WishListComp() {

  const payload = await GetWishList()
  console.log(payload, "loool");



  return (
    <>
    {!payload?.data.length? (
      <div className='h-screen pb-80 flex justify-center items-center font-bold italic text-4xl text-[rgb(49,243,49)]'>
  <h1>No Products In WishList</h1>
</div>
    ) : (
    <div className='w-full'>
        <div className="p-1 flex justify-center items-center  flex-wrap  ">

          {payload?.data.map((prod: any) => {
            return (
                

              <div key={prod._id} className="relative lg:w-1/4 md:w-1/2 md:gap-0 sm:w-full  m-6 relative overflow-hidden bg-green-500 rounded-lg  shadow-lg group">

              <BtnDeleteWishList id={prod._id}/>
                
                <svg className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform" viewBox="0 0 375 283" fill="none" style={{ opacity: '0.1' }}>
                  <rect x="159.52" y={175} width={152} height={152} rx={8} transform="rotate(-45 159.52 175)" fill="white" />
                  <rect y="107.48" width={152} height={152} rx={8} transform="rotate(-45 0 107.48)" fill="white" />
                </svg>
                <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: '0.2' }}>
                  </div>
                  <img className="relative w-40 rounded-3xl" src={prod.imageCover} alt="" />
                </div>

                <div className="relative text-white px-6 pb-6 mt-6">
                  <span className="block font-bold  mb-1">Price : {prod.price}</span>
                   <span className="block font-bold  mb-1">priceAfterDiscount : {prod.priceAfterDiscount?prod.priceAfterDiscount: "0"}</span>
                  <span className="block font-bold  mb-1">quantity : {prod.quantity}</span>
                  <span className="block font-bold  mb-1">sold : {prod.sold}</span>
                  <div className="flex justify-between">
                    <p className=" font-semibold text-xl line-clamp-2 overflow-hidden">description : {prod.description}</p>

                  </div>
                </div>
              </div>




            )
          })}



        </div>
      </div>
    )}
  
    </>
  )
}
