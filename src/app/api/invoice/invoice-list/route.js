
import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";
import {headers} from "next/headers";

export async function GET(req,res){
    try {
        let headerList = headers();
        let user_id = parseInt(headerList.get("id"))
        let prisma = new PrismaClient();

        let data = await prisma.invoice_products.findMany({
            where:{user_id}
        })
        return NextResponse.json({status:"success",data})

    }catch (e) {
        return NextResponse.json({status:"fail",data:e})
    }
}