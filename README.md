# Next Blog 
Next Blog is a modern blog web application built using Next.js, offering fast performance and server-side rendering capabilities. It leverages MongoDB as its primary database, interfacing through Prisma, a next-generation ORM. Real-time data fetching is managed using SWR, ensuring up-to-date data presentation without frequent server hits. The project implements authentication mechanisms through Next-Auth and expands its cloud capabilities using Firebase. All of this is seamlessly deployed and hosted on Vercel, providing a smooth user experience.

## [Live Demo](https://blog.ardailhan.software/)

![Live Demo](https://firebasestorage.googleapis.com/v0/b/next-blog-398508.appspot.com/o/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202023-09-25%20170450.png?alt=media)
![Live Demo](https://firebasestorage.googleapis.com/v0/b/next-blog-398508.appspot.com/o/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202023-09-25%20170502.png?alt=media)

## Technology Stack 
- **Framework**: Next.js 
- **Database**: MongoDB 
- **ORM**: Prisma 
- **Data Fetching**: SWR
-  **Authentication**: Next-Auth 
-  **Cloud Services**: Firebase 
- **Deployment**: Vercel

## Dependencies  
- `next`: [Latest version of Next.js](https://nextjs.org/)
- `prisma`: [Latest version of Prisma](https://www.prisma.io/) 
-  `swr`: [Latest version of SWR](https://swr.vercel.app/) 
-  `next-auth`: [Latest version of Next-Auth](https://next-auth.js.org/)
- `firebase`: [Latest version of Firebase](https://firebase.google.com/)

## Installation  
1. Clone the project: ```git clone https://github.com/ardailhn/next-blog.git ``` 
2. Install the dependencies: ```npm install ``` 
3.  Set up your database and create your `.env` file. 
4. Run the application for developer mode: ```npm run dev ```
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables
```
GOOGLE_CLIENT_ID =
GOOGLE_CLIENT_SECRET = 
NEXTAUTH_URL = http://localhost:3000
NEXTAUTH_SECRET = 
NEXT_PUBLIC_API_URL = http://localhost:3000/api/
NEXT_PUBLIC_APP_URL = http://localhost:3000/
MONGO = 
DATABASE_URL=
FIREBASE = 
```

## Features

- [ ] Loading screens and components (skeleton etc.).

- [ ] Internationalization.

- [ ] User profile pages.

- [ ] Admin panel.

- [ ] Seo optimizations for comments.

- [ ] Refactor of folder structure

- [ ] Add third party analytics tools

- [ ] Search page
