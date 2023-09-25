import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
    try {
        const slugs = await prisma.post.findMany({
            select: { slug: true }
        });
        return new NextResponse(JSON.stringify(slugs), { status: 200 });
    } catch (error) {
        console.log('error: ', error);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }), { status: 500 }
        );
    }
}