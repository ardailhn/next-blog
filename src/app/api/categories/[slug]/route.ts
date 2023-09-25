import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req: Request, { params }) => {
    const { slug } = params;
    try {
        const category = await prisma.category.findUnique({
            where: { slug }
        });
        return new NextResponse(JSON.stringify(category), { status: 200 });
    } catch (error) {
        console.error('error: ', error);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }), { status: 500 }
        );
    }
}