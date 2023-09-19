import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {

    const { searchParams } = new URL(req.url);

    const page = Number(searchParams.get('page')) || 1;
    const size = Number(searchParams.get('size')) || 2;
    const category = searchParams.get('category');

    const query = {
        take: size,
        skip: size * (page - 1),
        where: {
            ...(category && { catSlug: category })
        }
    }

    try {
        const [posts, total] = await prisma.$transaction([
            prisma.post.findMany(query),
            prisma.post.count({ where: query.where }),
        ]);
        return new NextResponse(JSON.stringify({ posts, pageOptions: { total, size, page } }), { status: 200 });
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
            JSON.stringify({ message: "You need to be logged in to write!" }), { status: 401 }
        );
    }

    try {
        const body = await req.json();
        const post = await prisma.post.create({
            data: { ...body, userEmail: session.user.email }
        });
        return new NextResponse(JSON.stringify(post), { status: 201 });
    } catch (error) {
        console.log('error: ', error);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }), { status: 500 }
        );
    }
}