
import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";

export async function GET(req,res){
    try {
        let {searchParams} = new URL(req.url);
        let id = parseInt(searchParams.get("id"))
        let prisma = new PrismaClient();
        let product = await prisma.products.findUnique({
            where:{id},
            include:{product_details:true}
        })
        return NextResponse.json({status:"success",data:product})

    }catch (e) {
        return NextResponse.json({status:"fail",data:e})
    }
}
