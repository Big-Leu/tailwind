import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import page from './api/user/api'

export async function middleware(request: NextRequest) {
    // const response = await page();
    // const requestedPath = new URL(request.url).pathname;

    // const alwaysAllowedPaths = ['/', '/login', '/registration'];

    // if (alwaysAllowedPaths.includes(requestedPath)) {
    //     return NextResponse.next(); // Allow access to these paths unconditionally
    // }

    // if (response?.status === 200) {
    //     return NextResponse.next();
    // }

    // return NextResponse.redirect(new URL('/', request.url));
    return NextResponse.redirect(new URL('/', request.url));
}
 
export const config = {
  matcher: '/login',
}