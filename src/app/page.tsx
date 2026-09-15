// import FeaturedProuducts from "./_components/FeaturedProducts/FeaturedProuducts";
// import Slider from "./_components/Slider/Slider";
// import 'animate.css/animate.min.css';

// export default function Home() {
//   return (
//     <div className="bg-gray-200  text-white my-[120px] ">
//       <Slider 
//         spaceBetween={0} 
//         slidesPerView={1} 
//         pageList={[
//           "/assets/images/blog-img-1.jpeg",
//           "/assets/images/blog-img-2.jpeg",
//           "/assets/images/grocery-banner.png"
//         ]} 
//       />

//       <FeaturedProuducts />
//     </div>
//   );
// }




import Link from 'next/link'
import React from 'react'

export default function WelcomePage() {
  return (
    <>
    
      <div className='bg-gray-200 container mx-auto h-screen  flex justify-center items-center font-bold '>
        <div>
          <Link href='/'>
            <h1 className='text-center WelcomePage text-6xl' > Welcome to <span className='text-[rgb(49,243,49)] ms-3 '>  S</span>hop<span className='text-[rgb(49,243,49)] '>M</span>art</h1>

          </Link>

          <p className='text-gray-700 text-center font-semibold italic mt-10 text-3xl'>
            Discover the latest technology, fashion, and lifestyle products. Quality guaranteed with fast shipping and excellent customer service.
          </p>
          <div className='flex justify-center items-center mt-20 gap-2 text-black'>
            <Link href='/home'><button className='hover:text-white curser hover:bg-[rgb(49,243,49)] hover:border-transparent trans py-3 px-7  border border-2 border-black rounded-xl '>Shop Now </button></Link>
           <Link href='/categorey'><button className=' hover:text-white hover:bg-[rgb(49,243,49)] hover:border-transparent trans py-3 px-7 border border-2 border-black rounded-xl '>Browse Categories</button></Link> 
          </div>
        </div>

      </div>


    </>
  )
}
