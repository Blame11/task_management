import prisma from "@/app/utils/connect";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

/**
 * Deletes a task by its ID
 *
 * @param {Request} req - The request object
 * @param {Object} params - The params object containing the id
 * @param {string} params.id - The ID of the task to delete
 * @returns {NextResponse} - The response object
 */
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = auth();
    const { id } = params;

    // If user is not authenticated, return unauthorized
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Delete the task from the database
    const task = await prisma.task.delete({
      where: {
        id,
      },
    });

    // Return the deleted task
    return NextResponse.json(task);
  } catch (error) {
    console.log("ERROR DELETING TASK: ", error);
    // If there was an error, return a 500 error
    return NextResponse.json({ error: "Error deleting task", status: 500 });
  }
}


