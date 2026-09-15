import React from 'react'
import { SyncLoader } from "react-spinners";

export default function loading() {
  return (<>
  <div className='h-screen flex justify-center items-center bg-gray-200'>

<SyncLoader color="#36d7b7" />

  </div>
  </>

  )
}
