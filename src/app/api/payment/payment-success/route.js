import {PrismaClient}  from "@prisma/client";
import {NextResponse} from "next/server";

export async function POST(req,res){
    try {
        let {searchParams} = new URL(req.url)
        let tran_id = searchParams.get('tran_id')
        let prisma = new PrismaClient();

        let data  = await prisma.invoices.updateMany({
            where:{
                AND:[
                    {tran_id}
                ]},
            data:{payment_status:"success"}
        })
        return NextResponse.json({status:"success",data})

    }catch (e) {
        return NextResponse.json({status:"fail",data:e})
    }
}