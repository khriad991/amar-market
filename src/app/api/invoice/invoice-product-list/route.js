
import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";
import {headers} from "next/headers";

export async function POST(req,res){
    try {
        let headerList = headers();
        let id = parseInt(headerList.get("id"))
        const prisma=new PrismaClient();
        const reqBody=await req.json();


        let data = await prisma.invoice_products.findMany({
            where:{AND:[
                    {invoice_id:reqBody['invoice_id']},
                    {user_id:id},
                ]},
            include:{products:true}
        })

        return NextResponse.json({status:"success",data})
    }catch (e) {
        return NextResponse.json({status:"fail",data:e.toString()})
    }
}