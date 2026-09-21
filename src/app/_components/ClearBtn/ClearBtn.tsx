'use client'
import { ClearAllProducts } from '@/app/AllApi/actions/ClaerAll/ClaerAllProducts'
import { toast } from '@/components/ui/toast';
import { useQueryClient } from '@tanstack/react-query';
import React from 'react'

export default function ClearBtn() {
      const query = useQueryClient()

async function clearAll(){
    const payload = await ClearAllProducts();
    console.log(payload ,'poooooo');
    
    if (payload.status === 'success') {
        query.invalidateQueries({
        queryKey: ['GetCart']
      })
        toast.add({
            type : 'success' ,
            description : 'Claer All Successfully'
        })
    }else{
            toast.add({
            type : 'error' ,
            description : 'Can Not Claer All Products'
        })
    }
}



  return (
    <>
          <button onClick={clearAll} className=" cursor-pointer border-1 btnTrans border-black hover:border-red-500 py-3 px-10 rounded-[43px] hover:bg-red-500  hover:text-white   font-bold className leading-[16px]">
                          ClearAll
                        </button>
    </>
  )
}
