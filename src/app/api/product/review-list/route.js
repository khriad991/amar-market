
import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";

export async function GET(req,res){
    try {
        let {searchParams}= new URL(req.url);
        let id = parseInt(searchParams.get('id'))
        console.log(id)
        let prisma = new PrismaClient();
        let data = await prisma.product_reviews.findMany({
            where:{product_id:id},
            include:{customer_profiles:{select:{cus_name:true}}}
        })
        return  NextResponse.json({status:"success",data})

    }catch (e) {
        return NextResponse.json({status:"fail",data:e.toString()})
    }
}