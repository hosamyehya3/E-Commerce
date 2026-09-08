'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
 import Image from 'next/image';
import img from "../../../../public/assets/images/freshcart-logo.svg"
export default function Navbar() {
let path = usePathname()
    window.onscroll = function () {
        const nav = document.getElementById("main-nav");
        const container = document.getElementById("nav-container");
        const links = document.getElementById("nav-links");

        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            nav?.classList.add("nav-shrunk");
            container?.classList.add("glass", "py-2");
            container?.classList.remove("bg-white", "py-3");
            links?.classList.add("opacity-0", "pointer-events-none"); // Optionnel: cache les liens pour épurer
        } else {
            nav?.classList.remove("nav-shrunk");
            container?.classList.remove("glass", "py-2");
            container?.classList.add("bg-white", "py-3");
            links?.classList.remove("opacity-0", "pointer-events-none");
        }
    };
    return (
        <>
        <div className=''>
       <nav id="main-nav" className="fixed top-0 left-0 right-0 z-50 w-full max-w-7xl mx-auto mt-8 my-5 px-4">
                <div id="nav-container" className="bg-white rounded-full px-6 py-3 flex justify-between items-center shadow-xl transition-all duration-300">
                    <div className="text-xl flex gap-5 font-black text-green-500 tracking-tighter">
                        
                       <Image src={img} alt="FreshCart Logo" width={130} height={80} />
                    </div>
                    <div id="nav-links" className="hidden md:flex gap-8 text-sm font-semibold text-gray-700">
                        <ul className='flex gap-5'>
                            <li>  <Link href="/prouducts" className={path === '/prouducts' ? "active" : ""}  >Home</Link></li>
                            <li>      <Link href="/Shop" className={path === '/Shop' ? "active" : ""}>Shop</Link>
                            </li>
                            <li>      <Link href="/brands" className={path === '/brands' ? "active" : ""}>Brands</Link>
                            </li>
                            <li>      <Link href='/categories' className={path === '/categories' ? "active" : ""}>Categories</Link>
                            </li>
                        </ul>

                    </div>
                    <div className="flex items-center gap-4">
                        <button className="relative p-2 text-gray-700 hover:text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>
                        <button className="relative p-2 text-gray-700 hover:text-green-600">
                            <span className="absolute top-0 right-0 bg-green-500 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">2</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        </button>
                        <Link href="./register" className=" sm:flex items-center gap-2 bg-[rgb(49,243,49)] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-green-700 shadow-lg shadow-green-200 transition">
                            Sign In
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
     



        </>

    )
}



