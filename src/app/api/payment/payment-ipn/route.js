import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";


export async function POST(req,res){
    try {
        let {searchParams}= new URL(req.url);
        let tran_id = searchParams.get("tran_id")
        console.log(tran_id)
        let reqBody = await req.json();

        let prisma = new PrismaClient();
        const data=await prisma.invoices.updateMany({
            where:{AND:[
                    {tran_id},
                ]},
            data:{payment_status:reqBody['status']}
        })


        return NextResponse.json({status:"success",data})
    }catch (e) {
        return NextResponse.json({status:"fail",data:e})
    }
}