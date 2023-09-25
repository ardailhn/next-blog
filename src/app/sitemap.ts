import { getAllCategorySlugs } from '@/services/category.service';
import { getAllPostSlugs } from '@/services/post.service'
import { MetadataRoute } from 'next'

interface ISlug {
    slug: string
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    let postSlugs: ISlug[] = []
    let categorySlugs: ISlug[] = []
    try {
        [postSlugs, categorySlugs] = await Promise.all([
            getAllPostSlugs(),
            getAllCategorySlugs()
        ])
    } catch (error) {
        console.error('error: ', error);
    }

    return [
        {
            url: process.env.NEXT_PUBLIC_APP_URL!,
            lastModified: new Date().toISOString(),
            changeFrequency: 'daily',
            priority: 1,
        },
        ...postSlugs.map((slug: { slug: string }) => ({
            url: process.env.NEXT_PUBLIC_APP_URL! + slug.slug,
            lastModified: new Date().toISOString(),
            changeFrequency: 'daily' as const,
            priority: 0.7,
        })),
        ...categorySlugs.map((slug: { slug: string }) => ({
            url: process.env.NEXT_PUBLIC_APP_URL! + `blog?category=${slug.slug}`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'daily' as const,
            priority: 0.7,
        })),
    ]
}