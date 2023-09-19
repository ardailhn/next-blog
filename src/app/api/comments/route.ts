import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
    const { searchParams } = new URL(req.url);
    const postSlug = searchParams.get('postSlug');
    try {
        const comments = await prisma.comment.findMany({
            where: {
                ...(postSlug && { post: { slug: postSlug } })
            },
            include: { user: true },
        });
        return new NextResponse(JSON.stringify(comments), { status: 200 });
    } catch (error) {
        console.log('error: ', error);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }), { status: 500 }
        );
    }
}

export const POST = async (req: Request, res: Response) => {
    const session = await getAuthSession();

    if (!session) {
        return new NextResponse(
            JSON.stringify({ message: "You need to be logged in to comment!" }), { status: 401 }
        );
    }

    try {
        const body = await req.json();
        const comment = await prisma.comment.create({
            data: { ...body, userEmail: session.user.email },
        });
        return new NextResponse(JSON.stringify(comment), { status: 201 });
    } catch (error) {
        console.log('error: ', error);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }), { status: 500 }
        );
    }
}