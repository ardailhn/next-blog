import fetchInstance from "./interceptorInstance";

export const getCommentsByPostSlug = async (postSlug: string) => {
    const path = "comments";
    const query = {
        postSlug
    }

    return fetchInstance({ path, query });
}

export const createComment = async ({ desc, postSlug }: { desc: string, postSlug: string }) => {
    const path = "comments";
    const options: RequestInit = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ desc, postSlug }),
    }

    return fetchInstance({ path, options });
}