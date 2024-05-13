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
6. Run `npm install moment` to install moment

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

     ### Setting up MongoDB database

   create a cloud database hosted by [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database).
   1. Head over to your MongoDB Atlas. Create a new cluster using the free    MO Sandbox to be able to build your online MongoDB cluster as a free tier. To set up this cluster,         click connect to allow cluster access from anywhere.
   2. To connect the cluster with your database, create a database user if you don’t have one, ensuring you remember the username and the password.
   3. Finally, choose the connection method. Select connect your application. This connects your application to your cluster using MongoDB’s native drivers. In this case, choose        the Node.js drive and copy your pre-formatted connection string.
   4. Now that the database is set, open the project’s `.env` file and the MongoDB database connection string as:

     To use the created MongoDB, add the connection string to the `.env` file of your project. Here we are adding the parameter employee as the database name we will use with Prisma. Replace other parameters with your connection credentials and paste them in your `.env` file as the DATABASE_URL parameter as follows:
     ```
          DATABASE_URL = "mongodb+srv://username>:<password>@<cluster-url>employee/?retryWrites=true&w=majority"
     ```

     5. Now, Open `schema.prisma` and replace default with :
     ```

     generator client {
       provider = "prisma-client-js"
     }

     datasource db {
       provider = "mongodb"
       url      = env("DATABASE_URL")
     }


     model Task{
       id          String    @id @default(cuid()) @map("_id")
       title       String
       description String?
       date        String
       isCompleted Boolean   @default(false)
       isImportant Boolean   @default(false)

       createdAt   DateTime  @default(now()) @map("created_at")
       updatedAt   DateTime  @default(now()) @updatedAt @map("updated_at")
       userId      String    
     }

     ```

     6. Finally Run `npx prisma generate` command
   
### Install `@clerk/nextjs`
   

   Clerk's Next.js SDK has prebuilt components, React hooks, and helpers to make user authentication easier.

   To get started using Clerk with Next.js, add the SDK to your project:

    `npm install @clerk/nextjs`

   Add the following keys to your .env.local file. These keys can always be retrieved from the API Keys page of your [Clerk Dashboard](https://dashboard.clerk.com).
   .env.local
   
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<public Key>
    CLERK_SECRET_KEY=<secret key>

    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/signin
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/signup
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
    NEXT_PUBLIC_CLERK_AFTER_SIGN_OUT_URL=/signin

   
### First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
### Now run the prisma studio:
`npx prisma studio`

Open [http://localhost:5555](http://localhost:5555) with your browser to see the Prisma Studio.
Open [http://localhost:3000](http://localhost:3000) with your browser to see the Web Application.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

