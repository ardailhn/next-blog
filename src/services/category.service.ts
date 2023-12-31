import fetchInstance from "./interceptorInstance";

export const getCategories = async () => {
    const path = "categories";

    return fetchInstance({ path });
}

export const getCategoryBySlug = async (categorySlug: string) => {
    const path = `categories/${categorySlug}`;

    return fetchInstance({ path });
}

export const getAllCategorySlugs = async () => {
    const path = "categories/slugs";

    return fetchInstance({ path });
}