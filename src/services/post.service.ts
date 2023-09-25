import fetchInstance from "./interceptorInstance";

export const getPosts = async ({ page, size, categorySlug }: { page: number, size: number, categorySlug?: string }) => {
    const path = "posts";
    const query = {
        page: page.toString(),
        size: size.toString(),
        ...(categorySlug && { category: categorySlug })
    };

    return fetchInstance({ path, query });
}

export const getPostBySlug = async ({ slug }) => {
    const path = `posts/${slug}`;

    return fetchInstance({ path });
}

export const getPopularPosts = async () => {
    const path = "posts/popular";

    return fetchInstance({ path });
}

export const getFeaturedPosts = async () => {
    const path = "posts/featured";

    return fetchInstance({ path });
}