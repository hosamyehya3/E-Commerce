'use client'
import { ChangePassword } from '@/app/AllApi/actions/ChangePassword/ChangePasswordApi'
import { schemaChangePassword } from '@/app/Schema/SchemaChangePassword'
import { Field, FieldError } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'

export default function ChangePasswordPageUpdate() {
 const navgate = useRouter()
  const { control, handleSubmit } = useForm({
    defaultValues: {
      currentPassword: "",
      password: "",
      rePassword: "",
    }, 
    resolver: zodResolver(schemaChangePassword),
    mode: 'onBlur'
  },

  )


async function submitForm(formData: any) {
  const res = await ChangePassword(formData);

  if (res?.message === 'success') {
    
        toast.add({
        type: "success",
        description: "Success In Change Password.",
      })

    navgate.push('/login')
  } else {
        toast.add({
        type: "success",
        description: "Success In Change Password.",
      })  }
}
  return (
    <>
    <div className='flex justify-center h-screen items-center bg-gray-200'>
        <div className='container w-1/2 bg-white p-5 mx-auto BoxShadow rounded-2xl'>
  <form onSubmit={handleSubmit(submitForm)} className="space-y-5">
              {/* Email Field */}
              <div className='my-3'>
                <Controller
                  name="currentPassword"
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
                          current Password
                        </span>
                      </label>
                      <div className='relative group transition-transform duration-300 focus-within:scale-[1.02]'>

                        <Input
                          className='input-focus-effect w-full px-5 py-3.5 rounded bg-white/80 border-2 border-gray-100 focus:border-gray-400 focus:outline-none text-green-800 placeholder-green-300 text-sm font-medium transition-all duration-300 hover:border-green-200'
                          type='text'
                          {...field}
                          id={field.name}
                          aria-invalid={fieldState.invalid}
                          placeholder="Inter your currentPassword"
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
              <div className='my-3'>
                <Controller
                  name="password"
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
                          PassWord
                        </span>
                      </label>
                      <div className='relative group transition-transform duration-300 focus-within:scale-[1.02]'>

                        <Input
                          className='input-focus-effect w-full px-5 py-3.5 rounded bg-white/80 border-2 border-gray-100 focus:border-gray-400 focus:outline-none text-green-800 placeholder-green-300 text-sm font-medium transition-all duration-300 hover:border-green-200'
                          type='password'
                          {...field}
                          id={field.name}
                          aria-invalid={fieldState.invalid}
                          placeholder="Inter your PassWord"
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
              <div className='my-3'>
                <Controller
                  name="rePassword"
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
                          rePassword
                        </span>
                      </label>
                      <div className='relative group transition-transform duration-300 focus-within:scale-[1.02]'>

                        <Input
                          className='input-focus-effect w-full px-5 py-3.5 rounded bg-white/80 border-2 border-gray-100 focus:border-gray-400 focus:outline-none text-green-800 placeholder-green-300 text-sm font-medium transition-all duration-300 hover:border-green-200'
                          type='password'
                          {...field}
                          id={field.name}
                          aria-invalid={fieldState.invalid}
                          placeholder="Inter your rePassword"
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

           
          

              {/* Submit Button */}
              <div className="animate-slide-up mt-8 delay-500">
                <button
                  type="submit"
                  className="btn-shimmer w-full py-2 rounded-2xl bg-gradient-to-r from-green-400  to-[rgb(49,243,49)] animate-gradient text-white font-bold text-sm tracking-wide shadow-lg shadow-green-200 hover:shadow-xl hover:shadow-green-300 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>Change Now</span>
              
                </button>
              </div>
            </form>
        </div>
          
    </div>
    </>
  )
}
