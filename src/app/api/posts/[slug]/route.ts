import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req: Request, { params }) => {
    const { slug } = params;
    try {
        const post = await prisma.post.update({
            where: { slug },
            data: { views: { increment: 1 } },
            include: { user: true },
        });
        return new NextResponse(JSON.stringify(post), { status: 200 });
    } catch (error) {
        console.error('error: ', error);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }), { status: 500 }
        );
    }
}