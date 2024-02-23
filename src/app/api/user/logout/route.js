import {NextResponse} from "next/server";
import {headers} from "next/headers";

export async function GET(req,res){

    let expireDuration =  new Date( Date.now() - 24 * 60 * 60 * 1000);
    let cookieString = `token=" "; expires=${expireDuration.toUTCString()} ;path=/  `

    return NextResponse.json(
        {status:"Logout Success" } ,
        {status:200 ,headers:{'set-cookie':cookieString}}
    )

/*    try {
        let expireDuration =  new Date( Date.now() - 24 * 60 * 60 * 1000);
        let cookieString = `token=" "; expires=${expireDuration.toUTCString()} ;path=/  `

        return NextResponse.json(
            {status:"success" } ,
            {status:200 ,headers:{'set-cookie':cookieString}}
        )
    }catch (e) {
        return NextResponse.json({status:"fail", data:e})
    }*/

}