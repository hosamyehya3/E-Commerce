import OnLinePayment from '@/app/_components/OnlinePaymentComp/OnlinePaymentComp'
import React from 'react'

export default async function OnlinePaymentPage(props:any) {
   const params = await props.params 
  const {id} = params
  return (
    <>
    <OnLinePayment id={id}/>
    </>
  )
}
