'use client';

// import { userLogin } from '@/app/AllApi/actions/auth.actions';
import { schemaLogin } from '@/app/Schema/SchemaLogin';
import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/toast';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation'
import React, { useState, useEffect, useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {signIn} from 'next-auth/react'
export default function Login() {
  const navgate = useRouter()
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    }, resolver: zodResolver(schemaLogin),
    mode: 'onBlur'
  },

  )

  async function submitForm(retData: any) {
    console.log(retData);
const isLogin = await signIn('credentials' , {...retData , redirect:false} )
    // const isLogin = await userLogin(retData)


    
    if (isLogin?.ok) {
      navgate.push('/home')
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

















  // const [showPassword, setShowPassword] = useState(false);
  // const canvasRef = useRef(null);

  //   // Toggle Password Visibility
  //   const togglePassword = () => {
  //     setShowPassword((prev) => !prev);
  //   };

  //   // Canvas Trail Effect
  //   useEffect(() => {
  //     const canvas:any = canvasRef.current;
  //     if (!canvas) return;

  //     const ctx = canvas.getContext('2d');
  //     if (!ctx) return;

  //     canvas.width = window.innerWidth;
  //     canvas.height = window.innerHeight;

  //     const handleResize = () => {
  //       canvas.width = window.innerWidth;
  //       canvas.height = window.innerHeight;
  //     };

  //     window.addEventListener('resize', handleResize);

  //     const particles:any = [];
  //     const colors = ['#fb923c', '#fbbf24', '#f472b6', '#a78bfa', '#38bdf8'];

  //     class Particle {
  //       constructor(x, y, options = {}) {
  //         this.x = x;
  //         this.y = y;
  //         this.size = options.size || Math.random() * 5 + 2;
  //         this.speedX = options.speedX ?? (Math.random() * 2 - 1);
  //         this.speedY = options.speedY ?? (Math.random() * 2 - 1);
  //         this.color = colors[Math.floor(Math.random() * colors.length)];
  //         this.life = 1;
  //         this.decay = Math.random() * 0.02 + 0.02;
  //       }

  //       update() {
  //         this.x += this.speedX;
  //         this.y += this.speedY;
  //         this.life -= this.decay;
  //         this.size *= 0.97;
  //       }

  //       draw() {
  //         ctx.save();
  //         ctx.globalAlpha = Math.max(0, this.life);
  //         ctx.fillStyle = this.color;
  //         ctx.beginPath();
  //         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
  //         ctx.fill();
  //         ctx.restore();
  //       }
  //     }

  //     let mouseX = 0;
  //     let mouseY = 0;

  //     const handleMouseMove = (e:any) => {
  //       mouseX = e.clientX;
  //       mouseY = e.clientY;

  //       for (let i = 0; i < 2; i++) {
  //         particles.push(new Particle(mouseX, mouseY));
  //       }
  //     };

  //     document.addEventListener('mousemove', handleMouseMove);

  //     let animationFrameId:any;
  //     const animateTrail = () => {
  //       ctx.clearRect(0, 0, canvas.width, canvas.height);

  //       for (let i = particles.length - 1; i >= 0; i--) {
  //         particles[i].update();
  //         particles[i].draw();

  //         if (particles[i].life <= 0 || particles[i].size <= 0.5) {
  //           particles.splice(i, 1);
  //         }
  //       }

  //       animationFrameId = requestAnimationFrame(animateTrail);
  //     };

  //     animateTrail();

  //     // Attach particle burst to submit button click
  //     const submitBtn = document.querySelector('button[type="submit"]');
  //     const handleSubmitClick = (e:any) => {
  //       e.preventDefault();
  // if(!submitBtn) return

  //   submitBtn.style.transform = 'scale(0.95)';


  //       setTimeout(() => {
  //         submitBtn.style.transform = 'scale(1) translateY(-4px)';
  //       }, 150);
  //       setTimeout(() => {
  //         submitBtn.style.transform = '';
  //       }, 300);

  //       const rect = submitBtn?.getBoundingClientRect();
  //       if (!rect) return
  //       const centerX = rect.left + rect.width / 2;
  //       const centerY = rect.top + rect.height / 2;

  //       for (let i = 0; i < 30; i++) {
  //         particles.push(
  //           new Particle(centerX, centerY, {
  //             speedX: (Math.random() - 0.5) * 8,
  //             speedY: (Math.random() - 0.5) * 8,
  //             size: Math.random() * 6 + 3,
  //           })
  //         );
  //       }
  //     };

  //     if (submitBtn) {
  //       submitBtn.addEventListener('click', handleSubmitClick);
  //     }

  //     // Cleanup event listeners and animation loop on unmount
  //     return () => {
  //       window.removeEventListener('resize', handleResize);
  //       document.removeEventListener('mousemove', handleMouseMove);
  //       if (submitBtn) {
  //         submitBtn.removeEventListener('click', handleSubmitClick);
  //       }
  //       cancelAnimationFrame(animationFrameId);
  //     };
  //   }, []);

  return (
  
  
  
  
    <div className='mt-30'>
      <div className="fixed inset-0 overflow-hidden  pointer-events-none">
        {/* Morphing Blobs */}
        <div
          className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-br from-orange-200 to-amber-200 opacity-50 animate-blob animate-float"
          style={{ animationDelay: '0s' }}
        />
        <div
          className="absolute top-1/3 -right-16 w-64 h-64 bg-gradient-to-br from-pink-200 to-rose-200 opacity-40 animate-blob animate-float-reverse"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute -bottom-20 left-1/4 w-80 h-80 bg-gradient-to-br from-violet-200 to-purple-200 opacity-40 animate-blob"
          style={{ animationDelay: '4s' }}
        />
        <div
          className="absolute top-10 right-1/3 w-48 h-48 bg-gradient-to-br from-sky-200 to-cyan-200 opacity-40 animate-morph animate-float"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute bottom-1/4 right-10 w-56 h-56 bg-gradient-to-br from-emerald-200 to-teal-100 opacity-30 animate-blob animate-float-reverse"
          style={{ animationDelay: '3s' }}
        />

        {/* Floating Geometric Shapes */}
        <div
          className="particle animate-float"
          style={{ top: '15%', left: '10%', animationDelay: '0.5s' }}
        >
          <svg
            width={40}
            height={40}
            viewBox="0 0 40 40"
            className="animate-rotate-slow"
          >
            <circle
              cx={20}
              cy={20}
              r={15}
              fill="none"
              stroke="#fb923c"
              strokeWidth={2}
              opacity="0.3"
            />
          </svg>
        </div>
        <div
          className="particle animate-float-reverse"
          style={{ top: '25%', right: '15%', animationDelay: '1.2s' }}
        >
          <svg
            width={30}
            height={30}
            viewBox="0 0 30 30"
            className="animate-wiggle"
          >
            <rect
              x={5}
              y={5}
              width={20}
              height={20}
              rx={4}
              fill="none"
              stroke="#f472b6"
              strokeWidth={2}
              opacity="0.3"
              transform="rotate(45 15 15)"
            />
          </svg>
        </div>
        <div
          className="particle animate-float"
          style={{ top: '70%', left: '8%', animationDelay: '2s' }}
        >
          <svg width={35} height={35} viewBox="0 0 35 35">
            <polygon
              points="17.5,2 33,30 2,30"
              fill="none"
              stroke="#a78bfa"
              strokeWidth={2}
              opacity="0.3"
            />
          </svg>
        </div>
        <div
          className="particle animate-float-reverse"
          style={{ bottom: '20%', right: '8%', animationDelay: '0.8s' }}
        >
          <svg
            width={25}
            height={25}
            viewBox="0 0 25 25"
            className="animate-rotate-slow"
            style={{ animationDuration: '15s' }}
          >
            <path
              d="M12.5 2 L15.5 9.5 L23 12.5 L15.5 15.5 L12.5 23 L9.5 15.5 L2 12.5 L9.5 9.5 Z"
              fill="none"
              stroke="#fb923c"
              strokeWidth="1.5"
              opacity="0.4"
            />
          </svg>
        </div>
        <div
          className="particle animate-float"
          style={{ top: '50%', left: '5%', animationDelay: '3s' }}
        >
          <svg width={20} height={20} viewBox="0 0 20 20">
            <circle cx={10} cy={10} r={8} fill="#fbbf24" opacity="0.2" />
          </svg>
        </div>
        <div
          className="particle animate-float-reverse"
          style={{ top: '10%', left: '45%', animationDelay: '1.5s' }}
        >
          <svg
            width={28}
            height={28}
            viewBox="0 0 28 28"
            className="animate-wiggle"
            style={{ animationDelay: '1s' }}
          >
            <path
              d="M14 2 L17 11 L26 14 L17 17 L14 26 L11 17 L2 14 L11 11 Z"
              fill="#f9a8d4"
              opacity="0.3"
            />
          </svg>
        </div>

        {/* Sparkle dots */}
        <div
          className="particle w-2 h-2 rounded-full bg-orange-300 opacity-60 animate-sparkle"
          style={{ top: '20%', left: '30%' }}
        />
        <div
          className="particle w-1.5 h-1.5 rounded-full bg-pink-300 opacity-60 animate-sparkle delay-700"
          style={{ top: '40%', right: '25%' }}
        />
        <div
          className="particle w-2 h-2 rounded-full bg-violet-300 opacity-60 animate-sparkle delay-1500"
          style={{ bottom: '30%', left: '20%' }}
        />
        <div
          className="particle w-1 h-1 rounded-full bg-amber-400 opacity-60 animate-sparkle delay-2000"
          style={{ top: '60%', right: '35%' }}
        />
        <div
          className="particle w-1.5 h-1.5 rounded-full bg-rose-300 opacity-50 animate-sparkle delay-2500"
          style={{ top: '80%', left: '60%' }}
        />
        <div
          className="particle w-2 h-2 rounded-full bg-sky-300 opacity-50 animate-sparkle delay-1000"
          style={{ top: '12%', right: '40%' }}
        />
      </div>

      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center p-4 relative z-10">
        <div className="w-full max-w-md">
          {/* Logo / Brand Section */}
          <div className="text-center mb-8 animate-bounce-in">
            <div className="inline-flex items-center justify-center relative mb-4">
              <div className="absolute w-20 h-20 rounded-full border-2 border-green-300 opacity-30 animate-pulse-ring" />
              <div className="absolute w-20 h-20 rounded-full border-2 border-green-300 opacity-20 animate-pulse-ring delay-500" />
              <div
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400  to-[rgb(49,243,49)] animate-gradient flex items-center justify-center shadow-lg shadow-green-200 animate-wiggle"
                style={{ animationDuration: '3s' }}
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  />
                </svg>
              </div>
            </div>
            <h1
              className="text-3xl font-bold bg-gradient-to-r from-green-500  to-green-400 bg-clip-text text-transparent animate-gradient"
              style={{ backgroundSize: '200% auto' }}
            >
              Welcome Back
            </h1>
            <p className="text-sm text-green-600/70 mt-2 animate-fade-in delay-300">
              Sign in to continue your journey ✨
            </p>
          </div>

          {/* Login Card */}
          <div className="glass rounded-3xl shadow-xl shadow-green-100/50 border border-white/60 p-8 card-hover animate-slide-up">
            {/* Social Login Buttons */}
            <div className="flex gap-3 mb-6 animate-fade-in delay-400">
              <button
                type="button"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-white/80 border border-green-100 hover:border-green-300 hover:bg-green-50 transition-all duration-300 group floating-icon shadow-sm"
              >
                <svg
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#EA4335"
                    d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"
                  />
                  <path
                    fill="#34A853"
                    d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"
                  />
                  <path
                    fill="#4A90D9"
                    d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.9028546 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7 L1.23746264,17.3349879 L5.27698177,14.2678769 Z"
                  />
                </svg>
                <span className="text-sm font-medium text-green-700">
                  Google
                </span>
              </button>
              <button
                type="button"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-white/80 border border-orange-100 hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 group floating-icon shadow-sm"
              >
                <svg
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                  fill="#1877F2"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="text-sm font-medium text-green-700">
                  Facebook
                </span>
              </button>
              <button
                type="button"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-white/80 border border-orange-100 hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 group floating-icon shadow-sm"
              >
                <svg
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#333"
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
                <span className="text-sm font-medium text-green-700">
                  GitHub
                </span>
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-6 animate-fade-in delay-400">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent" />
              <span className="text-xs text-green-400 font-medium tracking-wider uppercase">
                or continue with email
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent" />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(submitForm)} className="space-y-5">
              {/* Email Field */}
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
                          className='input-focus-effect w-full px-5 py-3.5 rounded-2xl bg-white/80 border-2 border-gray-100 focus:border-gray-400 focus:outline-none text-green-800 placeholder-green-300 text-sm font-medium transition-all duration-300 hover:border-green-200'
                          type='text'
                          {...field}
                          id={field.name}
                          aria-invalid={fieldState.invalid}
                          placeholder="Inter your Email"
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
                          className='input-focus-effect w-full px-5 py-3.5 rounded-2xl bg-white/80 border-2 border-gray-100 focus:border-gray-400 focus:outline-none text-green-800 placeholder-green-300 text-sm font-medium transition-all duration-300 hover:border-green-200'
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

              {/* <div className="animate-slide-up delay-300">
                <label className="block text-sm font-semibold text-green-700 mb-2 ml-1">
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
                <div className="relative group transition-transform duration-300 focus-within:scale-[1.02]">
                  <input
                    type="email"
                    placeholder="hello@example.com"
                    className="input-focus-effect w-full px-5 py-3.5 rounded-2xl bg-white/80 border-2 border-gray-100 focus:border-gray-400 focus:outline-none text-green-800 placeholder-green-300 text-sm font-medium transition-all duration-300 hover:border-green-200"
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
              </div> */}

              {/* Password Field */}
              {/* <div className="animate-slide-up delay-400">
                <label className="block text-sm font-semibold text-green-700 mb-2 ml-1">
                  <span className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    Password
                  </span>
                </label>
                <div className="relative group transition-transform duration-300 focus-within:scale-[1.02]">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className="input-focus-effect w-full px-5 py-3.5 rounded-2xl bg-white/80 border-2 border-gray-100 focus:border-gray-400 focus:outline-none text-green-800 placeholder-green-300 text-sm font-medium transition-all duration-300 hover:border-green-200"
                  />
                  <button
                    type="button"
                    // onClick={togglePassword}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-green-400 hover:text-green-500 transition-colors duration-300"
                  >
                    {showPassword ? (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div> */}

   


              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between animate-fade-in delay-500">
                <label className="flex items-center gap-2.5 cursor-pointer group">
                  <div className="relative">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-5 h-5 rounded-lg border-2 border-green-200 bg-white/80 peer-checked:bg-gradient-to-br peer-checked:from-green-400 peer-checked:to-green-400 peer-checked:border-green-400 transition-all duration-300 flex items-center justify-center group-hover:border-green-300" />
                    <svg
                      className="absolute top-0.5 left-0.5 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-300 pointer-events-none"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-green-600 group-hover:text-green-700 transition-colors">
                    Remember me
                  </span>
                </label>
                <a
                  href="#"
                  className="text-sm font-semibold text-green-500 hover:text-green-600 transition-colors duration-300 relative group"
                >
                  Forgot password?
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-green-400 group-hover:w-full transition-all duration-300 rounded-full" />
                </a>
              </div>

              {/* Submit Button */}
              <div className="animate-slide-up delay-500">
                <button
                  type="submit"
                  className="btn-shimmer w-full py-4 rounded-2xl bg-gradient-to-r from-green-400  to-[rgb(49,243,49)] animate-gradient text-white font-bold text-sm tracking-wide shadow-lg shadow-green-200 hover:shadow-xl hover:shadow-green-300 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>Sign In</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>
            </form>

            {/* Sign Up Link */}
            <div className="mt-6 text-center animate-fade-in delay-700">
              <p className="text-sm text-green-600">
                Don't have an account?{' '}
                <Link
                  href="/register"
                  className="font-bold bg-gradient-to-r from-green-500 to-gray-500 bg-clip-text text-transparent hover:from-orange-600 hover:to-green-600 transition-all duration-300 relative group"
                >
                  Create one now
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-gray-400 group-hover:w-full transition-all duration-300 rounded-full" />
                </Link>
              </p>
            </div>
          </div>

          {/* Bottom decorative wave text */}
          <div className="text-center mt-6 animate-fade-in delay-700">
            <div className="flex items-center justify-center gap-1">
              <span className="inline-block animate-wave text-lg" style={{ animationDelay: '0s' }}>🌸</span>
              <span className="inline-block animate-wave text-lg" style={{ animationDelay: '0.1s' }}>🌼</span>
              <span className="inline-block animate-wave text-lg" style={{ animationDelay: '0.2s' }}>🦋</span>
              <span className="inline-block animate-wave text-lg" style={{ animationDelay: '0.3s' }}>✨</span>
              <span className="inline-block animate-wave text-lg" style={{ animationDelay: '0.4s' }}>🌈</span>
            </div>
            <p className="text-xs text-green-400 mt-2 tracking-wider">
              Made with love &amp; sunshine
            </p>
          </div>
        </div>
      </div>

      {/* Interactive cursor trail effect */}
      {/* <canvas
        ref={canvasRef}
        id="trailCanvas"
        className="fixed inset-0 pointer-events-none z-50"
      /> */}
    </div>
  
  );
}