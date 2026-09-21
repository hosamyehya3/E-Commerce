'use client'
import { OrderForm } from '@/app/AllApi/actions/OrderForm/OrderForm'
import { SchemaOrder } from '@/app/Schema/SchemaOrder'
import { Button } from '@/components/ui/button'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/toast'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'

export default function OrderFormPage({id}:{id:string}) {
  const navgate = useRouter()
  const { control, handleSubmit } = useForm({
    defaultValues: {
      details: "",
      phone: "",
      city: "",
      postalCode: "",
    }, resolver: zodResolver(SchemaOrder),
    mode: 'onBlur'
  },

  )

  async function submitForm(formData: any) {
    const orderFormData = await OrderForm(formData , id)

console.log(orderFormData , 'Order8888');

    
    if (orderFormData?.ok) {
      // navgate.push('/home')
      toast.add({
        type: "success",
        description: "Success Login Now.",
      })
    } else {
      toast.add({
        type: "error",
        description: "Failed to Access.",
      })
    }








  }

  return <>
  <div className='container mx-auto my-[100px] w-1/2'>
  <div className='border border-green-500 bg-white my-10 rounded-2xl p-4'>
      <h1 className='font-bold text-center italic text-2xl '>PaymentCash</h1>

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
 
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
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
 
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
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
 
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
      </div>
      <div className='my-3 w-3/4 mx-auto'>
        <Controller
  name="postalCode"
  control={control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>PostalCode</FieldLabel>
      <Input
      type='text'
      className='rounded '
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Inter Your postalCode"
        autoComplete="on"
      />
 
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
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
