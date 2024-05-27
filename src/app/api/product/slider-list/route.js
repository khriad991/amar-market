import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    try {
        const prisma = new PrismaClient();
        const data = await prisma.product_sliders.findMany();
        return NextResponse.json({ status: "success", data });
    } catch (e) {
        return NextResponse.json({ status: "fail", data: e });
    }
}
