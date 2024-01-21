
import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";
import {SendEmail} from "../../../../../utility/EmailUtility";

export async function GET(req,res){
    try {
        const {searchParams} = new URL(req.url);
        const email= searchParams.get("email");

        const otp = Math.floor(100000 + Math.random() * 900000 ).toString();
        const emailText = `Amar-Market Verification code is ${otp}`;
        const emailSubject = "Amar-Market Verification Code";
        await SendEmail(email,emailText,emailSubject)

        const prisma = new PrismaClient();
        const data = await prisma.users.upsert({
            where:{email},
            update:{otp},
            create:{email,otp}
        })

        return NextResponse.json({status:"success",data})

    }catch (e) {
        return NextResponse.json({status:"fail",data:e.toString()})
    }
}