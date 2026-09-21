'use client'
import { GetCart } from '@/app/AllApi/actions/AddToCart/GetCart'
import { CartResponseType } from '@/data/CartType'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import Image from 'next/image'
import { DeleteCartItems } from '@/app/AllApi/actions/DeleteCartItem'
import { toast } from '@/components/ui/toast'
import { UpdataCart } from '@/app/AllApi/actions/UpdataCart'
import { IoIosCart } from "react-icons/io";
import Link from 'next/link'
import { MoonLoader, RotateLoader } from 'react-spinners'
import ClearBtn from '../ClearBtn/ClearBtn'
export default function CartComp() {
  const query = useQueryClient()
  const { data: CartData, isLoading } = useQuery<CartResponseType>({
    queryKey: ['GetCart'],
    queryFn: async () => {
      const response = await fetch('/api/cart')
      if (!response) {
        throw new Error('Faild To Fetch')
      }
      return response.json()
    }
  })
  // Delete item from Cart
  const { data: DataOfDelete, mutate: DelCartItem } = useMutation({
    mutationFn: DeleteCartItems,
    onSuccess: () => {
      toast.add({
        type: "success",
        description: "Delete Success.",
      })
      query.invalidateQueries({
        queryKey: ['GetCart']
      })
    },
    onError: () => {
      toast.add({
        type: "error",
        description: "Failed To Delete.",
      })
    }
  })
  //updata item from Cart
  const { data: DataOfUpdata, mutate: UpdateFunc } = useMutation({
    mutationFn: UpdataCart,
    onSuccess: () => {
      toast.add({
        type: "success",
        description: "Product Updata Successfully.",
      })
      query.invalidateQueries({
        queryKey: ['GetCart']
      })
    },
    onError: () => {
      toast.add({
        type: "error",
        description: "Failed To Updata.",
      })
    }
  })
  function HandleUpdataCart(prodId: string, count: number) {
    UpdateFunc({ prodId, count })
  }
  console.log(CartData, 'CartDataaa');
  if (isLoading) {
    return (
      <div className='h-screen flex justify-center items-center '>
        <RotateLoader color="rgb(86,235,86)" />
      </div>
    )


  }

  return (
    <>
      {CartData?.numOfCartItems ? <>
        <div className=' container mx-auto my-[120px] flex justify-center items-center bg-gray-200 '>
          <section className="w-full bg-white  rounded-2xl  dark:bg-[#0A2025] py-9 px-8 ">
            <h1 className="text-center text-[#191919] dark:text-white text-[32px] font-semibold leading-[38px]">
              My <span className='text-[rgb(49,243,49)]'>S</span>hopping <span className='text-[rgb(49,243,49)]'>C</span>art
            </h1>
            <div className="flex items-start mt-8 gap-6">
              <div className="bg-white p-4 w-[800px] rounded-xl">
                <table className="w-full bg-white rounded-xl">
                  <thead>
                    <tr className="text-center border-b border-gray-400 w-full text-[#7f7f7f] text-sm font-medium uppercase leading-[14px] tracking-wide">
                      <th className="text-left px-2 py-2">Product</th>
                      <th className="px-2 py-2">price</th>
                      <th className="px-2 py-2">Quantity</th>
                      <th className="px-2 py-2">Subtotal</th>
                      <th className="w-7 px-2 py-2" />
                    </tr>
                  </thead>
                  <tbody>

                    {CartData?.data.products.map((Row) => {
                      return (<tr key={Row._id} className="text-center">
                        <td className="px-2 py-2 text-left align-top">
                          <img src={Row.product.imageCover} alt={Row.product.title} className="w-[100px] mr-2 inline-block h-[100px]" /><span>{Row.product.title}</span>
                        </td>
                        <td className="px-2 py-2">${Row.price}</td>
                        <td className="p-2 mt-9 bg-white rounded-[170px] border border-[#a0a0a0] justify-around items-center flex">
                          <svg width={14} height={15} className="cursor-pointer" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">

                            <path onClick={() => { HandleUpdataCart(Row.product._id, Row.count - 1) }} d="M2.33398 7.5H11.6673" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg><span className="w-10 text-center text-[#191919] text-base font-normal leading-normal">{Row.count}</span>
                          <svg className="cursor-pointer relative" width={14} height={15} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path onClick={() => { HandleUpdataCart(Row.product._id, Row.count + 1) }} d="M2.33398 7.49998H11.6673M7.00065 2.83331V12.1666V2.83331Z" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </td>
                        <td className="px-2 py-2">${Row.count * Row.price}</td>
                        <td className="px-2 py-2">

                          <svg onClick={() => { DelCartItem(Row.product._id) }} width={24} className="cursor-pointer" height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 23.5C18.0748 23.5 23 18.5748 23 12.5C23 6.42525 18.0748 1.5 12 1.5C5.92525 1.5 1 6.42525 1 12.5C1 18.5748 5.92525 23.5 12 23.5Z" stroke="#CCCCCC" strokeMiterlimit={10} />
                            <path d="M16 8.5L8 16.5" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16 16.5L8 8.5" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </td>
                      </tr>)
                    })}


                  </tbody>
                  <tfoot>
                    <tr className="border-t border-gray-400">
                      <td className="px-2 py-2" colSpan={3}>
                        <Link href='/home'>
                          <button className="px-8 cursor-pointer border-1 btnTrans border-black hover:border-[rgb(86,235,86)] py-3.5  rounded-[43px] hover:bg-[rgb(86,235,86)] hover:text-white   font-bold className leading-[16px]">
                            Return to shop
                          </button>
                        </Link>

                      </td>
                      <td className="px-2 py-2 " colSpan={3}>
                        <ClearBtn />

                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="w-[424px] bg-white rounded-lg p-6">
                <h2 className="text-[#191919] mb-2 text-xl font-medium leading-[30px]">
                  Cart Total
                </h2>
                <div className="w-[376px] py-3 justify-between items-center flex">
                  <span className="text-[#4c4c4c] text-base font-normal leading-normal">Total:</span><span className="text-[#191919] text-base font-semibold leading-tight">${CartData?.data.totalCartPrice}</span>
                </div>
                <div className="w-[376px] py-3 shadow-[0px_1px_0px_0px_rgba(229,229,229,1.00)] justify-between items-center flex">
                  <span className="text-[#4c4c4c] text-sm font-normal leading-[21px]">Shipping:</span><span className="text-[#191919] text-sm font-medium leading-[21px]">Free</span>
                </div>
                <div className="w-[376px] py-3 shadow-[0px_1px_0px_0px_rgba(229,229,229,1.00)] justify-between items-center flex">
                  <span className="text-[#4c4c4c] text-sm font-normal leading-[21px]">NumOfCartItems:</span><span className="text-[#191919] text-sm font-medium leading-[21px]">{CartData?.numOfCartItems}</span>
                </div>
                <Link href={`/orderForm/${CartData.cartId}`}>

                  <button className="w-[376px] btnTrans border-2 border-transparent curser text-white mt-5 px-10 py-4 bg-[rgb(49,243,49)] hover:text-[rgb(49,243,49)] hover:bg-white hover:border-2 hover:border-[rgb(49,243,49)] rounded-[44px] gap-4 text-base font-semibold leading-tight">
                    Proceed to checkout
                  </button>

                </Link>

              </div>


            </div>

          </section>

        </div>

      </> : <>
        <div className='h-screen flex justify-center items-center '>
          <div>
            <IoIosCart color='rgb(86,235,86)' size={200} />
            <h1 className='font-bold text-4xl text-[rgb(86,235,86)] italic'>Empty Cart</h1>


          </div>
        </div>
      </>}


    </>
  )
}
