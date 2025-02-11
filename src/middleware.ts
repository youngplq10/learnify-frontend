import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {

    const isAuth = req.cookies.get("isAuthenticated")?.value;
    
    if (isAuth !== "true" && req.nextUrl.pathname.startsWith("/auth")){
        return NextResponse.redirect(new URL("/", req.url));
    } 
    if (isAuth === "true" && req.nextUrl.pathname.match("/sign-up")){
        return NextResponse.redirect(new URL("/dashboard", req.url));
    }
    if (isAuth === "true" && req.nextUrl.pathname.match("/create-account")){
        return NextResponse.redirect(new URL("/dashboard", req.url));
    }
    if (isAuth !== "true" && req.nextUrl.pathname.match("/logout")){
        return NextResponse.redirect(new URL("/", req.url));
    }
}
