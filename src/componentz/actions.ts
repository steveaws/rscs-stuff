
"use server"
import { cookiesClient } from "@/lib/utils/amplifyServerUtils";
import { revalidatePath } from "next/cache";


export type TodoSubmitResult = { success: boolean}

export const addRandomTodo = async function() : Promise<TodoSubmitResult>  {

    //use a random generator to generate a random content for the todo
    const randomContent = Math.random().toString(36).substring(7);

    console.log("Generating random Todo ",randomContent)

    try {
    await cookiesClient.models.Todo.create({
        content: `Random Todo ${randomContent}`,
        isDone: false
    }); 
    } catch (error) {
        console.error("Error creating todo:", error);
        return { success: false }
    }
    revalidatePath("/todos")
    return { success: true }

}