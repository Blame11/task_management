/**
 * Middleware to check for Clerk authentication on all requests
 */
import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware({});

/**
 * Configuration for the middleware routes.
 * Matcher is an array of regular expressions to match routes against.
 * See Next.js documentation for more information:
 * https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration
 */
export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)", // Match all non-file routes
    "/", // Match the root route
    "/(api|trpc)(.*)", // Match all API routes
  ],
};

