import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
const allowedPaths = ['/landing', '/login', '/registration' ,'/redirect'];

export  function middleware(request: NextRequest) {
    let cookie = request.cookies.get('fastapiusersauth');
    const requestedPath = new URL(request.url).pathname;
    if (allowedPaths.includes(requestedPath)) {
        return NextResponse.next();
    }
    if (cookie) {
        return NextResponse.next();
    }
    return NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
    matcher: ['/landing/:path*', '/registration:path*','/dashboard:path*' ,'/camp:path*', '/happy:path*', '/component/bot:path*', '/cam:path*'],
};
