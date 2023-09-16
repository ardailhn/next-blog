import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
    try {
        const categories = await prisma.category.findMany();

        return new NextResponse(JSON.stringify(categories), { status: 200 });
    } catch (error) {
        console.log('error: ', error);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }), { status: 500 }
        );
    }
}