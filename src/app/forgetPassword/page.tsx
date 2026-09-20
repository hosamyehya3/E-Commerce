'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { schemaForgetPassword } from '../Schema/SchemaForgetPassword'
import { ForgetPassword } from '../AllApi/actions/ForgetPassword'
import { Field, FieldError } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/toast'
import { useRouter } from 'next/navigation'

export default function forgetPasswordPage() {
     const navgate = useRouter()
      const { control, handleSubmit } = useForm({
        defaultValues: {
          email: ""
        }, resolver: zodResolver(schemaForgetPassword),
        mode: 'onBlur'
      },
    
      )
    async  function ChangePassword(data:any){
console.log(data , 9856);
const response = await  ForgetPassword(data)
console.log(response);
if (response.statusMsg === "success") {
    navgate.push('/home')
       toast.add({
        type: "success",
        description: "Success Login Now.",
      })

} else{
        navgate.push('/register')
       toast.add({
        type: "error",
        description: "failed To Login.",
      })
}
      }
  return (
  <>
  <div className='container bg-gray-200 flex justify-center items-center h-screen mt[120px]' >
     <main id="content" role="main" className="w-full  max-w-md mx-auto p-6">
  <div className="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-green-300">
    <div className="p-4 sm:p-7">
      <div className="text-center">
        <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Forgot password?</h1>
        <p className="mt-2 font-medium text-sm text-gray-600 dark:text-gray-400">
          Remember your password?
          <Link href='/login' className="  decoration-2 hover:text-[rgb(69,243,69)] ms-1 font-bold" >
             Login here
          </Link>
        </p>
      </div>
      <div className="mt-5">
        <form onSubmit={handleSubmit(ChangePassword)}>
          <div className="grid gap-y-4">
            <div>
              {/* <label htmlFor="email" className="block text-sm font-bold ml-1 mb-2 dark:text-white">Email address</label> */}
              <div className="relative">
                {/* <input {...register('email')} type="email" id="email" name="email" className="py-3 px-4 block w-full border-2 border-green-200 rounded-md text-sm focus:border-green-500 focus:ring-green-500 shadow-sm"  /> */}
                 <div className='my-3'>
                <Controller
                  name="email"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <label htmlFor={field.name} className="block text-sm font-semibold text-green-700 mb-2 ml-1">
                        <span className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-green-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          Email Address
                        </span>
                      </label>
                      <div className='relative group transition-transform duration-300 focus-within:scale-[1.02]'>

                        <Input
                          className='input-focus-effect w-full px-5 py-3.5 rounded bg-white/80 border-2 border-gray-100 focus:border-gray-400 focus:outline-none text-green-800 placeholder-green-300 text-sm font-medium transition-all duration-300 hover:border-green-200'
                          type='text'
                          {...field}
                          id={field.name}
                          aria-invalid={fieldState.invalid}
                          placeholder="Enter your Email"
                          autoComplete="on"
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300">
                          <svg
                            className="w-5 h-5 text-orange-400 animate-bounce"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>

                      </div>

                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>




                  )}
                />
              </div>
              </div>
              <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
            </div>
            <button type="submit" className="py-3 btnTrans  px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[rgb(49,243,49)] hover:text-[rgb(49,243,49)] text-white hover:bg-white hover:border-1  hover:border-[rgb(49,243,49)] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-green-800">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <p className="mt-3 flex justify-center items-center text-center divide-x divide-gray-300 dark:divide-gray-700">
    <a className="pr-3.5 inline-flex items-center gap-x-2 text-sm text-gray-600 decoration-2 hover:underline hover:text-blue-600 dark:text-gray-500 dark:hover:text-gray-200" href="#" target="_blank">
      <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
      </svg>
      View Github
    </a>
    <a className="pl-3 inline-flex items-center gap-x-2 text-sm text-gray-600 decoration-2 hover:underline hover:text-blue-600 dark:text-gray-500 dark:hover:text-gray-200" href="#">
      Contact us!
    </a>
  </p>
</main>
     </div>


  </>
  )
}
