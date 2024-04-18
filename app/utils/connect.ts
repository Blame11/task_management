import { PrismaClient } from "@prisma/client";

/**
 * @description Prisma client is created once and stored in the global scope for the entire process
 * This allows for better performance and reduced overhead when connecting to the database.
 * In production, a new client is created for each request, but in development we reuse the same
 * client for all requests to simplify development.
 */
let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  // @ts-ignore
  if (!global.prisma) {
    // @ts-ignore
    global.prisma = new PrismaClient();
  }
  // @ts-ignore
  prisma = global.prisma;
}

export default prisma;

