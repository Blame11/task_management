import prisma from "@/app/utils/connect";
import { auth } from "@clerk/nextjs";
import { error } from "console";
import { NextResponse } from "next/server";

/**
 * Creates a new task
 *
 * @param {Request} req The request object from Next.js
 * @returns {Promise<NextResponse | any>} A Promise that resolves to a
 * NextResponse or an object with error and status properties
 */
export async function POST(req: Request): Promise<NextResponse | any> {
  try {
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized", status: 401 });
    }

    const { title, description, date, completed, important } = await req.json();

    if (!title || !description || !date) {
      return NextResponse.json({
        error: "Missing required fields",
        status: 400,
      });
    }

    if (title.length < 3) {
      return NextResponse.json({
        error: "Title must be at least 3 characters long",
        status: 400,
      });
    }

    const task = await prisma.task.create({
      data: {
        title,
        description,
        date,
        isCompleted: completed,
        isImportant: important,
        userId,
      },
    });

    return NextResponse.json(task);
  } catch (error) {
    console.log("ERROR CREATING TASK: ", error);
    return NextResponse.json({ error: "Error creating task", status: 500 });
  }
}


export async function GET(req: Request) {
  try {
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized", status: 401 });
    }

    const tasks = await prisma.task.findMany({
      where: {
        userId,
      },
    });

    return NextResponse.json(tasks);
  } catch (error) {
    console.log("ERROR GETTING TASKS: ", error);
    return NextResponse.json({ error: "Error updating task", status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const { userId } = auth();
    const { isCompleted, id } = await req.json();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized", status: 401 });
    }

    const task = await prisma.task.update({
      where: {
        id,
      },
      data: {
        isCompleted,
      },
    });

    return NextResponse.json(task);
  } catch (error) {
    console.log("ERROR UPDATING TASK: ", error);
    return NextResponse.json({ error: "Error updating task", status: 500 });
  }
}
  export async function DELETE(req: Request, { params }: { params: { id: string}}) 
  {
   try {
    const { userId } = auth();
    const { id } = params;

    if (!userId){
      return NextResponse.json({ error: "Unauthorised", status: 401});
    }

    await prisma.task.delete({
      where: {
        id,
        },
      });
      return NextResponse.json({ message: "Task Deleted Successfully"});
   } catch (error){
    console.log("ERROR DELETING TASK:",error);
    return NextResponse.json({ error: "Error deleting Task"});
   }        
   } 
   export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    try {
      const { userId } = auth();
  
      if (!userId) {
        return NextResponse.json({ error: "Unauthorized", status: 401 });
      }
  
      const { id } = params;
      const { title, description, date, completed, important } = await req.json();
  
      const task = await prisma.task.update({
        where: {
          id,
          userId,
        },
        data: {
          title,
          description,
          date,
          isCompleted: completed,
          isImportant: important,
        },
      });
  
      return NextResponse.json(task);
    } catch (error) {
      console.log("ERROR UPDATING TASK: ", error);
      return NextResponse.json({ error: "Error updating task", status: 500 });
    }
  }