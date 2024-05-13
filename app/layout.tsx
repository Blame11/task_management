import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ClerkProvider, auth } from "@clerk/nextjs";

import "./globals.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import GlobalStyleProvider from "./providers/GlobalStyleProvider";
import ContextProvider from "./providers/ContextProvider";
import NextTopLoader from "nextjs-toploader";

const nunito = Nunito({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Task Management App",
  description: "Created By Tushar Kand",
};

/**
 * RootLayout
 *
 * The root layout component that wraps every page.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get the user id from Clerk's auth context
  const { userId } = auth();

  return (
    // Wrap the app in Clerk's provider to give access to Clerk's
    // context, which is used to determine the current user
    <ClerkProvider>
      {/* Add the HTML structure for the app */}
      <html lang="en">
        <head>
          {/* Add a link to the Font Awesome stylesheet */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
            integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </head>
        <body className={nunito.className}>
          {/* Add a top loader component to the page */}
          <NextTopLoader
            height={3}
            color="#BF40BF"
            easing="cubic-bezier(0.53,0.21,0,1)"
          />
          {/* Wrap the app in the context provider and global styles */}
          <ContextProvider>
            <GlobalStyleProvider>
              {/* If the user is logged in, show the sidebar */}
              {userId && <Sidebar />}
              {/* Add the app's content to the page */}
              <div className="w-full">{children}</div>
            </GlobalStyleProvider>
          </ContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
