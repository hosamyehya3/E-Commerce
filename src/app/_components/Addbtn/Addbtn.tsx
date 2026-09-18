'use client'
import { AddToCart } from '@/app/AllApi/actions/AddToCart/AddtoCart'
import { toast } from '@/components/ui/toast';
import { useQueryClient } from '@tanstack/react-query';
import React, { ReactNode } from 'react'

export default  function Addbtn({cls , child , prodId}:{cls:string , child:ReactNode , prodId:string}) {
const query = useQueryClient()
  
  async function handleAddtoCart(){
    
 const data = await AddToCart(prodId);
 
 if (data.message === 'Product added successfully to your cart') {
    toast.add({
            type: "success",
            description: "Success Add Product to your cart.",
          })
               query.invalidateQueries({
            queryKey : ['GetCart']
          })
 }else{
 toast.add({
            type: "error",
            description: "try to Login First.",
          })
 }
  }
  return (
    <>
           <button onClick={handleAddtoCart}  className={cls}>
 {child}
        </button>


   
    
    </>
  )
}
