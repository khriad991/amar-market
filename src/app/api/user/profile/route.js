import { PrismaClient } from "@prisma/client";
import {NextResponse} from "next/server";
import {headers} from "next/headers";
const prisma = new PrismaClient();

export async function GET(req,res){
    try {
        const headerList = headers();
        const id = parseInt(headerList.get("id"))
        console.log("my id is -------->>>",id)

        const data = await prisma.customer_profiles.findUnique({
            where:{user_id:id}
        })
        return NextResponse.json({status:"success",data:{data,id}})
    }catch (e) {
        return NextResponse.json({status:"fail",data:e.toString()})
    }
}


export async function POST(req,res){
    try {
        let headerList = headers();
        let id = parseInt(headerList.get("id"))

        let reqBody = await req.json;
        let data = await prisma.customer_profiles.create({
            data:{user_id:id, product_id:parseInt(reqBody['product_id'])}
        })
        return  NextResponse.json({status:"success",data})
    }catch (e) {
        return NextResponse.json({status:"fail",data:e})
    }
}