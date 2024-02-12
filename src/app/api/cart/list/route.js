import {NextResponse} from "next/server";
import {headers} from "next/headers";
import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export async function POST  (req,res) {
    try {
        let headerList = headers();
        let id = parseInt(headerList.get("id"))
        let reqBody = await req.json();
        reqBody.user_id = id
        const data = await prisma.product_carts.create({data:reqBody})
        return NextResponse.json({status:"success",data})
    }catch (e) {
        return NextResponse.json({status:"fail",data:e})
    }
    
}

// update cart Item
export const PUT =async (req,res) => {
    try {
        let headerList = headers();
        let user_id =  parseInt(headerList.get("id"))
        let reqBody = await req.json();

        const data = await prisma.product_carts.updateMany({
            where:{
                AND:[
                    {id:reqBody['id']},
                    {user_id:user_id}
                ]
            },
            data:{
                // product_id:reqBody['product_id'], //this line try only me
                color:reqBody['color'],
                size:reqBody['size'],
                qty:reqBody['qty']} // add value for allow update
        })

        return NextResponse.json({status:"success",data})

    }catch (e) {
        return NextResponse.json({status:"fail",data:e})
    }
}

export const GET =async (req,res) => {
    try {
        let headerList = headers();
        let user_id = parseInt(headerList.get("id"))

        const data= await prisma.product_carts.findMany({
            where:{user_id},
            include:{
                products:true
            }
        })

        return NextResponse.json({status:"fail",data})


    }catch (e) {return NextResponse.json({status:"fail",data:e})}
}


// delete product cart item
export const DELETE =async (req,res) => {
    try {
        let headerList = headers();
        let user_id = parseInt(headerList.get("id"))
        let reqBody = await req.json();
        const data = await prisma.product_carts.deleteMany({
                where:{
                    AND:[
                        {id: reqBody['id']},
                        {user_id}
                    ]
                }
        })
        return NextResponse.json({status:"success",data})

    }catch (e) {
        return NextResponse.json({status:"fail",data:e.toString()})

    }

}