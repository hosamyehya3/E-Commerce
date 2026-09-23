'use client'
import React from 'react'
import {  Controller, useForm } from 'react-hook-form'
import { ResetCodeApi } from '../AllApi/actions/ResetCode/ResetCodeApi';
import { Input } from '@/components/ui/input';
import { Field, FieldError } from '@/components/ui/field';
import { zodResolver } from '@hookform/resolvers/zod';
import { SchemaResetCode } from '../Schema/SchemaResetCode';
import { toast } from '@/components/ui/toast';
import { useRouter } from 'next/navigation';

export default function ResetCode() {
 const navgate = useRouter()
      const {control , handleSubmit } = useForm({
         defaultValues: {
           resetCode: ""
         }, resolver: zodResolver(SchemaResetCode),
         mode: 'onBlur'
       },
     
       )


async function GetResetCode(obj:any){
console.log(obj);
const payload = await ResetCodeApi(obj)
console.log(payload , 88888);
navgate.push('/login')
if (payload.status === 'Success') {
           toast.add({
        type: "success",
        description: "Success Go to Your Login Page.",
      })
}else{
               toast.add({
        type: "error",
        description: "Failed Try Again.",
      })
}
       }
  return (
    <>
    <div className='h-screen flex justify-center items-center bg-white '>
<div className="flex flex-1 flex-col bg-green-500 text-white rounded-2xl p-12 justify-center space-y-5 max-w-md mx-auto mt-24">
  <div className="flex flex-col space-y-2 text-center ">
    <h2 className="text-3xl md:text-4xl font-bold">Confirm ResetCode</h2>
    <p className="text-md md:text-xl">
      Enter the ResetCode we just sent you.
    </p>
  </div>
  <div className="flex flex-col max-w-md space-y-5">
    <form className='flex flex-col max-w-md space-y-5' onSubmit={handleSubmit(GetResetCode)}>

        <div className='my-3'>
                <Controller
                  name="resetCode"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                   

                        <Input
                          className="flex px-3 py-12 md:px-4 md:py-3 border-2 bg-white text-black foucs rounded-lg font-medium placeholder:font-normal"
                          type='text'
                          {...field}
                          id={field.name}
                          aria-invalid={fieldState.invalid}
                          placeholder="Enter Your ResetCode"
                          autoComplete="on"
                        />
                   


                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>




                  )}
                />
              </div>
    <button type='submit' className="flex btnTrans w-1/4 mx-auto items-center font-bold justify-center flex-none px-1 py-1 md:px-4 md:py-2 hover:text-white hover:bg-green-900 hover:border-black  rounded-lg   bg-white text-black">
      Confirm
    </button>
    </form>

  </div>
</div>



    </div>
    </>
  )
}
