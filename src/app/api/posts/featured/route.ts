import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
    try {
        const posts = await prisma.post.findMany({
            where: {
                featured: true,
            },
            include: { user: true },
            take: 5,
        });
        return new NextResponse(JSON.stringify(posts), { status: 200 });
    } catch (error) {
        console.error('error: ', error);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }), { status: 500 }
        );
    }
}