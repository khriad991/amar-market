import { PrismaClient } from "@prisma/client";
import {NextResponse} from "next/server";
import {headers} from "next/headers";
import Head from "next/head";


export async function POST(req,res){
    try {
        const prisma = new PrismaClient();

        let headerList = headers()
        let id = parseInt(headerList.get("id"))
        let reqBody = await req.json();

        let data = await prisma.customer_profiles.upsert({
            where:{user_id: id},
            update:reqBody,
            create:{...reqBody,user_id:id},
        })
        return  NextResponse.json({status:"success",data})

    }catch (e) {
        return NextResponse.json({status:"fail", data:e})
    }
}




export async function GET(req,res){
    try {
        const prisma = new PrismaClient();

        const headerList = headers();
        const id = parseInt(headerList.get("id"))

        const data = await prisma.customer_profiles.findMany({
            where:{user_id:id}
        })
        return NextResponse.json({status:"success",data, id})
    }catch (e) {
        return NextResponse.json({status:"fail",data:e})
    }
}

