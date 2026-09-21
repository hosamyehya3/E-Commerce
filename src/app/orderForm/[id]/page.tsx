import OrderFormPage from '@/app/_components/OrderComp/OrderComp'
import React from 'react'

export default async function orderForm(props:any) {
  const params = await props.params 
  const {id} = params
  return <>
 <OrderFormPage id={id}/>
  </>
  
}
