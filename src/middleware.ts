import { NextRequest, NextResponse, userAgent } from 'next/server'

export default function UserAgentMiddleware(request: NextRequest) {
    const { device } = userAgent(request);
    const viewport = device.type === 'mobile' ? 'mobile' : 'desktop';

    return NextResponse.next({
        request: {
            headers: new Headers({
                ...request.headers,
                viewport,
            }),
        },
    });

}


    export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}