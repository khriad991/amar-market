import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";


export async function GET(req,res){
    try {
        let {searchParams} = new URL(req.url)
        let id = parseInt(searchParams.get('id'))
        console.log(searchParams)
        let prisma = new PrismaClient();
        let result = await prisma.products.findMany({
            where:{brand_id:id}
        })
        return NextResponse.json({status:"success",data:result});
    }catch (e) {
        return NextResponse.json({status:"fail",data:e})
    }
}