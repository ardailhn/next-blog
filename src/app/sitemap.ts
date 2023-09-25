import { getAllCategorySlugs } from '@/services/category.service';
import { getAllPostSlugs } from '@/services/post.service'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const postSlugs = await getAllPostSlugs();

    const categorySlugs = await getAllCategorySlugs();

    return [
        {
            url: process.env.NEXT_PUBLIC_APP_URL,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        ...postSlugs.map((slug: { slug: string }) => ({
            url: process.env.NEXT_PUBLIC_APP_URL + slug.slug,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.7,
        })),
        ...categorySlugs.map((slug: { slug: string }) => ({
            url: process.env.NEXT_PUBLIC_APP_URL + `blog?category=${slug.slug}`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.7,
        })),
    ]
}