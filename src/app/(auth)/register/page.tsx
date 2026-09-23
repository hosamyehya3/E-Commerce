 'use client'
import { Button } from '@/components/ui/button'
 import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import React from 'react'
import img from '../../../../public/assets/images/e-commerce-digital-internet-technology-web-concept_53876-127365.avif'
import { Controller , Form, useForm } from 'react-hook-form'
import Image from 'next/image'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from '@/app/Schema/SchemaRegister'
import Link from 'next/link'
import { userRegister } from '@/app/AllApi/actions/auth.actions'
import { useRouter } from 'next/navigation'
import { toast } from "@/components/ui/toast"
type values = {
  name : string ,
  email : string , 
  password : string ,
  rePassword : string ,
  phone : number
}
export default function register() {
const navigate = useRouter()




const {control ,handleSubmit} =  useForm({
  defaultValues :{
    name: "",
    email:"",
    password:"",
    rePassword:"",
    phone:""
} , resolver:zodResolver(schema) ,
mode : 'onBlur'
  } ,
  
)
 
async function submitForm(retData:any){
console.log(retData);
const dataOfRegister = await userRegister(retData)
if (dataOfRegister) {
navigate.push(`/login/${retData}`)
   toast.add({
            type: "success",
            description: "Success Register Now.",
          })
}else{
    toast.add({
            type: "error",
            description: "Failed to Access.",
          })
}
}
 
  return (
   <>
 <div className="min-h-screen  bg-gray-200 text-gray-900 mt-20 flex justify-center">
  <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
      <div>
      </div>
      <div className="mt-2 flex flex-col items-center">
        <h1 className="text-2xl xl:text-3xl titleCss italic font-extrabold">
        <span className='text-[rgb(86,235,86)]'>S</span>ign <span className='text-[rgb(86,235,86)]'>U</span>p
        </h1>
        <div className="w-full flex-1 mt-8">
          {/* <div className="flex flex-col items-center">
            <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
              <div className="bg-white p-2 rounded-full">
                <svg className="w-4" viewBox="0 0 533.5 544.3">
                  <path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4" />
                  <path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853" />
                  <path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04" />
                  <path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335" />
                </svg>
              </div>
              <span className="ml-4">
                Sign Up with Google
              </span>
            </button>
            <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
              <div className="bg-white p-1 rounded-full">
                <svg className="w-6" viewBox="0 0 32 32">
                  <path fillRule="evenodd" d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z" />
                </svg>
              </div>
              <span className="ml-4">
                Sign Up with GitHub
              </span>
            </button>
          </div>
          <div className="my-12 border-b text-center">
            <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
              Or sign up with e-mail
            </div>
          </div> */}
          <div className="mx-auto  w-full">
            {/* {start form} */}
    <form onSubmit={handleSubmit(submitForm)}>
      <div className='my-3'>
        <Controller
  name="name"
  control={control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>User Name</FieldLabel>
      <Input
      type='text'
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Inter your name"
        autoComplete="on"
      />
 
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
      </div>
      <div className='my-3'>
        <Controller
  name="email"
  control={control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Email</FieldLabel>
      <Input
      type='email'
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Inter your Email"
        autoComplete="on"
      />
 
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
      </div>
      <div className='my-3'>
        <Controller
  name="password"
  control={control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>password</FieldLabel>
      <Input
      type='password'
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Inter Your Password"
        autoComplete="on"
      />
 
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
      </div>
      <div className='my-3'>
        <Controller
  name="rePassword"
  control={control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>rePassword</FieldLabel>
      <Input
      type='password'
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Inter Your rePassword"
        autoComplete="on"
      />
 
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
      </div>
      <div className='my-3'>
        <Controller
  name="phone"
  control={control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>phone</FieldLabel>
      <Input
      type='phone'
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="015545308**"
        autoComplete="on"
      />
 
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
      </div>
      <div className= 'flex justify-center items-center '>
         <Button type='submit' className='w-3/4 bg-[rgb(49,243,49)] ButCss my-5 font-bold hover:bg-white hover:text-[rgb(49,243,49)] hover:border-[rgb(49,243,49)]'>Register Now</Button>
      </div>
            
    </form>
            {/* End Form */}
            {/* <p className="mt-6 text-xs text-gray-600 text-center">
              I agree to abide by Gidy's
              <a href="#" className="border-b border-gray-500 border-dotted">
                Terms of Service
              </a>
              and its
              <a href="#" className="border-b border-gray-500 border-dotted">
                Privacy Policy
              </a>
            </p> */}
                <div className='border-t-1 border-gray-500 py-3 flex justify-center '>
        <h2 className='font-bold italic text-gray-500'> Have an account ? <span className='px-2 font-bold hoverr text-[rgb(49,243,49)]'><Link href='./login'>Login</Link></span> now</h2>   
          </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex-1 w-1/2 text-center  hidden lg:flex">
     
      <Image title='E-COMMERCE' className='w-full border-l-5 border-transparent  hover:border-l-5 hover:border-[rgb(49,243,49)] imgEdite' width={1000} height={700} src={img} alt="image" />
    </div>
  </div>
</div>


   
   </>
  )
}
