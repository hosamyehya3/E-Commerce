import { redirect } from 'next/navigation';
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { any } from 'zod';

export async function proxy(reqest:NextRequest){
    const protectedPages = ['/cart' , '/wishList']
    const authPages = ['/login' , '/register']
// where the user  want to path 
const pathName = reqest.nextUrl.pathname
// get token
const myToken =await getToken({
    req : reqest ,
    secret : process.env.NEXTAUTH_SECRET ,
    secureCookie : process.env.NODE_ENV === 'production'

})
const accessToken = myToken?.token

if (!accessToken && protectedPages.some((path)=>pathName.startsWith(path)) ) {
    return NextResponse.redirect(new URL('/login' , reqest.nextUrl));
}


if (accessToken && authPages.some((path)=>pathName.startsWith(path)) ) {
    return NextResponse.redirect(new URL('/home' , reqest.nextUrl));
}

return NextResponse.next()








}



