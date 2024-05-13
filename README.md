# Task Management

Task Management is a simple web app that allows you to create, edit, and delete tasks. It's built using Next.js and Tailwind CSS.

## Features

- Create, edit, and delete tasks
- Dark mode support
- Responsive design

## Run Locally

Clone the project


1. Run `npm install` or `yarn` to install the project dependencies
2. Install axios with `npm install axios`
3. Install react-hot-toast run `npm install react-hot-toast` or `yard add react-hot-toast`
4. Run `npm install nextjs-toploader` to install nextJS toploader
5. Run `npm install styled-components` to install styled components

## Backend

Setting Up Prisma with MongoDB

1. Now we need the Node.js Prisma package available for this project. To install it, use the following command:

     `npm install prisma`

2. To get started with Prisma Client, you need to install the @prisma/client package:

     `npm install @prisma/client --save-dev`
   
3. Finally, initialize Prisma by running the following command:

    `npx prisma init --datasource-provider mongodb`

    This command does two things:

    creates a new directory called prisma that contains a file called `schema.prisma`, which contains the Prisma schema with your database connection variable and schema models
    creates the `.env` file in the root directory of the project, which is used for defining environment variables (such as your database connection)

     ## Setting up MongoDB database

   create a cloud database hosted by MongoDB Atlas 
     

5. Install `@clerk/nextjs`
   

   Clerk's Next.js SDK has prebuilt components, React hooks, and helpers to make user authentication easier.

   To get started using Clerk with Next.js, add the SDK to your project:

    `npm install @clerk/nextjs`

   Add the following keys to your .env.local file. These keys can always be retrieved from the API Keys page of your [Clerk Dashboard](https://dashboard.clerk.com).
   .env.local
   ```
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<public Key>
    CLERK_SECRET_KEY=<secret key>

    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/signin
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/signup
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
    NEXT_PUBLIC_CLERK_AFTER_SIGN_OUT_URL=/signin

    ```

   




Create a `.env` file and add your MongoDB connection string, for example: `DATABASE_URL=mongodb://localhost:27017/mytasks`
    
4. First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

