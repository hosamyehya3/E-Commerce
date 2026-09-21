'use client'
import { OnlinePayment } from '@/app/AllApi/actions/paymentOnline/paymentOnline'
import { SchemaOnlinePayment } from '@/app/Schema/SchemaOnline'
import { Button } from '@/components/ui/button'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/toast'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'

export default function OnLinePayment({id}:{id:string}) {
  const navgate = useRouter()
  const { control, handleSubmit } = useForm({
    defaultValues: {
      details: "",
      phone: "",
      city: ""
      
    }, resolver: zodResolver(SchemaOnlinePayment),
    mode: 'onBlur'
  },

  )

  async function submitForm(formData: any) {
    const orderFormDataOnline = await OnlinePayment(id , formData)

console.log(orderFormDataOnline , 'Order77777');

    
    if (orderFormDataOnline?.status === 'success') {
      window.location.href=orderFormDataOnline.session.url
      toast.add({
        type: "success",
        description: "Order created Successfully.",
        
      })
    } else {
      navgate.push('/home')
      toast.add({
        type: "error",
        description: "Failed to Order.",
      })
    }








  }

  return <>
  <div className='container mx-auto my-[100px] w-1/2'>
  <div className='border  bg-white my-10  formOrder p-4'>
      <h1 className='font-bold text-center italic text-2xl '><span className='text-[rgb(49,243,49)]'>O</span>nline <span className='text-[rgb(49,243,49)]'>P</span>ayment</h1>

   <form onSubmit={handleSubmit(submitForm)}>
      <div className='my-3 w-3/4 mx-auto'>
        <Controller
  name="details"
  control={control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Details</FieldLabel>
      <Input
            className='rounded '

      type='text'
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Inter your details"
        autoComplete="on"
      />
 
      {fieldState.invalid && <FieldError className='font-bold' errors={[fieldState.error]} />}
    </Field>
  )}
/>
      </div>
      <div className='my-3 w-3/4 mx-auto'>
        <Controller
  name="phone"
  control={control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>phone</FieldLabel>
      <Input
      type='text'
            className='rounded '

        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Inter your phone"
        autoComplete="on"
      />
 
      {fieldState.invalid && <FieldError className='font-bold' errors={[fieldState.error]} />}
    </Field>
  )}
/>
      </div>
      <div className='my-3 w-3/4 mx-auto'>
        <Controller
  name="city"
  control={control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>City</FieldLabel>
      <Input
      type='text'
            className='rounded '

        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Inter Your city"
        autoComplete="on"
      />
 
      {fieldState.invalid && <FieldError className='font-bold' errors={[fieldState.error]} />}
    </Field>
  )}
/>
      </div>




  
      <div className= 'flex justify-center items-center '>
         <Button type='submit' className='w-3/4 bg-[rgb(49,243,49)] ButCss my-5 font-bold hover:bg-white hover:text-[rgb(49,243,49)] hover:border-[rgb(49,243,49)]'>Submit</Button>
      </div>
            
    </form>
  </div>

  </div>
  
  
  
  
  
  
  
  
  
  
  </>
}
