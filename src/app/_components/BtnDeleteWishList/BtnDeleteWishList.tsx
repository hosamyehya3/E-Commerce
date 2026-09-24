'use client'
import { DeleteWisListItem } from '@/app/AllApi/DeleteWishList/DeleteWishList'
import { toast } from '@/components/ui/toast';
import { useQueryClient } from '@tanstack/react-query';
import React from 'react'
import { IoCloseSharp } from 'react-icons/io5'

export default function BtnDeleteWishList({id}:{id:string}) {
  const query = useQueryClient()
    async function HandleDelete(prodId:string){
       const payload = await DeleteWisListItem(prodId);
       console.log(payload , "hhhhhhh");
       
      if (payload.message === 'Product removed successfully to your wishlist') {
   
        query.invalidateQueries({
          queryKey : ['GetWishList']
        })
       
         toast.add({
        type: "success",
        description: "Product Delete Successfully From WishList.",
      })
      }else{
              toast.add({
        type: "error",
        description: " Delete Faild Try Again.",
      })
      }
 
  return payload
}

  return (
   <>
                   <span className='relative ms-1 mt-1  curser '>
<button className='curser hover:bg-red-500 hover:text-white p-2 bg-white rounded-sm mt-1 me-1'>
<IoCloseSharp onClick={()=>{HandleDelete(id)}} className='curser'/>
</button>
</span>
   
   </>
  )
}
