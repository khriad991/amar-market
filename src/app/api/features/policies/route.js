
import {PrismaClient} from "@prisma/client"
import {NextResponse} from "next/server";

export async function GET(req,res){
    try{
        let {searchParams} = new URL(req.url);
        let type = searchParams.get('type')
        let prisma = new PrismaClient();
        let policies = await prisma.policies.findMany({
            where:{type:type}
        })
        return NextResponse.json({status:"success",data:policies})

    }catch (e) {
        return NextResponse.json({status:"fail",data:e})
    }
}