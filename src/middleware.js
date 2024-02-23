import {VerifyToken} from "../utility/JWTTokenHelper";
import {NextResponse} from "next/server";


export async function middleware(req,res){
    try {
        const token = req.cookies.get("token")
        let payload = await VerifyToken(token['value'])

        let reqHeader = new Headers(req.headers);
        reqHeader.set("email",payload['email'])
        reqHeader.set("id",payload['id'])

        return NextResponse.next({request:{headers:reqHeader}})

    }catch (e) {
        if (req.url.startsWith("/api/")){
            return NextResponse.json(
                {status:"fail",data:"UnAuthorized"},
                {status:401}
            )
        }else {
            return res.redirect('/login');
        }

    }
}

export const config = {
    matcher:[
        '/api/cart/:path*',
        '/api/invoice/:path*',
        '/api/user/profile/:path*',
        '/api/user/review/:path*',
        '/api/wish/:path*',
    ]
}



