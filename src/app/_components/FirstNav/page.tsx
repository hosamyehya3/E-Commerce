import React from 'react'
import { FaTruck  , FaEnvelope , FaRegUser , FaUser  } from "react-icons/fa6";
import { HiMiniGift } from "react-icons/hi2";
import { BsTelephoneFill } from "react-icons/bs";
export default function FirstNav() {
  return (
    <>
    <div className='grouping bg-gray-100 sm:hidden md:hidden lg:flex xl:flex justify-between  border px-5' >
<div className='leftSide flex gap-3 justify-start items-center'>
    <div className='flex justify-start items-center gap-1'>
<FaTruck size={15} color='green' />

    <span className='text-[15px] '>Free Shipping On Orders 500 EGP</span>
    </div>
<div className='flex justify-start items-center gap-1'>
<HiMiniGift size={15} color='green' />
    <span className='text-[15px] '>New Arrivals Daily</span>
</div>

</div>


<div className='rightSide flex gap-5 items-center  justify-end'>
<div className='flex justify-center items-center gap-2'>
<BsTelephoneFill size={15} color='gray' />
    <span className='text-[15px]'>+1(800)123-4567</span>
   
</div>
<div className='flex justify-center items-center gap-2'  >
<FaEnvelope size={15} color='gray' />
 <span className='text-[15px]'>support@freshcart.com</span>
</div>



<div className='flex gap-2'>
    <div  className='flex justify-center gap-2  items-center'>
        <FaRegUser size={15}/>
<span className='text-[15px] '> SignIn</span>
    </div>
<div className='flex justify-center  gap-2 items-center'>
<FaUser size={15}/>
<span className='text-[15px] '> SignUp</span>
</div>


</div>
</div>




    </div>
    
    
    
    
    
    </>
  )
}
