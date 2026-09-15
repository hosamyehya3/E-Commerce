import React from 'react'
import { MoonLoader } from 'react-spinners'

export default function loading() {
  return (
      <>
        <div className='flex justify-center items-center h-screen text-2xl bg-gray-200'>
          <div className=''>
            <MoonLoader color='green' />
            </div>  
        </div>
        </>
  )
}
