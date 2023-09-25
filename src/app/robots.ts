import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: [
                    "/login",
                    "/write"
                ]
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
                disallow: [
                    "/login",
                    "/write"
                ]
            }
        ],
        sitemap: process.env.NEXT_PUBLIC_APP_URL + 'sitemap.xml',
    }
}