
import {PrismaClient} from "@prisma/client"
import {NextResponse} from "next/server";

export async function GET(req,res){
    try {
        let {searchParams}  = new URL(req.url);
        let keyword = searchParams.get('keyword');
        let prisma = new PrismaClient();
        let result = await prisma.products.findMany({
            where:{title:{contains:keyword}}
        })

        return NextResponse.json({status:"success",data:result});
    }catch (e) {
        return NextResponse.json({staus:"fail",data:e})
    }
}