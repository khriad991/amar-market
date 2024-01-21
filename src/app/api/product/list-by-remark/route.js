
import {PrismaClient} from "@prisma/client"
import {NextResponse} from "next/server";

export async function GET(req,res){
    try {
        let {searchParams} = new URL(req.url);
        let remark = searchParams.get("remark");
        let prisma = new PrismaClient();
        let result = await prisma.products.findMany({
            where:{remark}
        })
return NextResponse.json({status:'success',data:result})
    }catch (e) {
        return NextResponse.json({status:"success",data:e})
    }
}