# Task Management

Task Management is a simple web app that allows you to create, edit, and delete tasks. It's built using Next.js and Tailwind CSS.

## Features

- Create, edit, and delete tasks
- Dark mode support
- Responsive design

## Screenshots

![Tasks List](https://user-images.githubusercontent.com/11993528/163480659-7fb21942-521b-4883-8a0b-338d41afb86e.png)

![Edit Task](https://user-images.githubusercontent.com/11993528/163480664-188c1511-4364-4189-a25b-9d270a923c78.png)

## Run Locally

Clone the project


1. Run `npm install` or `yarn` to install the project dependencies
2. Create a `.env` file and add your MongoDB connection string, for example: `DATABASE_URL=mongodb://localhost:27017/mytasks`
3. Create a `.env.local` file and add your clerk token, for example: 
    `
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<public Key>
    CLERK_SECRET_KEY=<secret key>

    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/signin
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/signup
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
    NEXT_PUBLIC_CLERK_AFTER_SIGN_OUT_URL=/signin

    `
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

