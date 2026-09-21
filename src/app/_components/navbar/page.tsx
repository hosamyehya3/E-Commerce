'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import img from "../../../../public/assets/images/freshcart-logo.svg";
import { signOut, useSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';
import { CartResponseType } from '@/data/CartType';


export default  function Navbar() {
const session = useSession()
console.log(session.status);
const status = session.status
function handleLogOut(){
  signOut({redirect:true , callbackUrl:'/register'} )
}
  const path = usePathname();
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



const {data:CartData , isLoading} = useQuery<CartResponseType>({
    queryKey:['GetCart'] ,
    queryFn:async()=>{
        const response = await fetch('/api/cart')
        if (!response) {
            throw new Error('Faild To Fetch')
        }
      return  response.json()
    }
})





  return (
    
    <div id="main-nav" className={`fixed top-0 left-0 right-0 z-50 w-full max-w-7xl mx-auto mt-8 my-5 px-4 ${isShrunk ? 'nav-shrunk' : ''}`}>
      <div 
        id="nav-container" 
        className={`rounded-full px-6 flex justify-between items-center shadow-xl transition-all duration-300 ${
          isShrunk ? 'glass py-2' : 'bg-white py-3'
        }`}
      >
        
            <div className="text-xl flex gap-5 font-black text-green-500 tracking-tighter">
          <Image src={img} alt="FreshCart Logo" width={130} height={80} />
        </div>
       
    

        <div 
          id="nav-links" 
          className={`hidden md:flex gap-8 text-sm font-semibold text-gray-700 transition-opacity duration-300 ${
            isShrunk ? 'opacity-0 pointer-events-none' : ''
          }`}
        >
          <ul className="flex gap-5">
            <li>
              <Link href="/home" className={path === '/home' ? 'active' : ''}>
                Shop
              </Link>
            </li>
       
            <li>
              <Link href="/brands" className={path === '/brands' ? 'active' : ''}>
                Brands
              </Link>
            </li>
            <li>
              <Link href="/categorey" className={path === '/categorey' ? 'active' : ''}>
                Categories
              </Link>
            </li>
            <li>
              <Link href="/subcategorey" className={path === '/subcategorey' ? 'active' : ''}>
               Sub All Categories
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          {status === 'authenticated' ?<><Link href='/wishList'>
           <button className="relative p-2 text-gray-700 hover:text-green-600" aria-label="Favorites">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          </Link>
         <Link href='/cart'>
             <button className="relative p-2 text-gray-700 hover:text-green-600" aria-label="Cart">
            {CartData?.numOfCartItems === 0 ? "" :  <span className="absolute top-0 right-0 bg-green-500 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">{CartData?.numOfCartItems}</span>}
           
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
         </Link></> : "" }
    
      {status === 'authenticated' ?    <button  onClick={handleLogOut}><span  className="sm:flex items-center gap-2 bg-[rgb(49,243,49)] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-green-700 shadow-lg shadow-green-200 transition">
            Log Out
          </span></button>  :  <Link href="/login" className="sm:flex items-center gap-2 bg-[rgb(49,243,49)] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-green-700 shadow-lg shadow-green-200 transition">
            Sign In
          </Link>}
        
      
        </div>
      </div>
    </div>
    
  );
}