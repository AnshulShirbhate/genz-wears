import { NextResponse } from 'next/server'
import {parse} from "cookie"
import {jwtVerify} from "jose";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
    const pathname = request.nextUrl.pathname;
    const isPublicPath = pathname === '/login' || pathname === '/signup'
    const isAdminPath = pathname === '/admin' || pathname === '/admin/(.*)'
    
    // Extract token from cookies
    const cookies = request.headers.get('cookie') ? parse(request.headers.get('cookie')) : {};
    const token = cookies.token || null;
    
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    if(token){
        try{
            const {payload} = await jwtVerify(token, secret);
            const decodedToken  = payload;
        } catch(e) {
            console.log("Error: "+e)
        }
    }
    

    // if(isAdminPath && user && !user.isAdmin){
    //   return NextResponse.redirect(`${process.env.NEXT_PUBLIC_HOST}/`)
    // }

    if(isPublicPath && token){
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_HOST}/`)
    }

    if(!isPublicPath && !token){
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_HOST}/login`)
    }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/login',
    '/signup',
    '/orders',
    '/order',
    '/myaccount',
    '/admin',
    '/admin/(.*)'
  ]
}