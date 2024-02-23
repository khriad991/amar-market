import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";
import {headers} from "next/headers";

export async function POST(req,res){
    try {
        let headerList = headers();
        let user_id = parseInt(headerList.get("id"))
        let reqBody = await req.json();
        let prisma = new PrismaClient();

        let customer_id = await prisma.customer_profiles.findUnique({
            where:{user_id}
        })
        reqBody.customer_id= customer_id['id'];

        let data = await prisma.product_reviews.create({
            data:reqBody
        })


        return NextResponse.json({status:"success",data})

    }catch (e) {
        return NextResponse.json({status:"fail",data:e})
    }
}