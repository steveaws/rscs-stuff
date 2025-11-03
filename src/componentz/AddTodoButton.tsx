"use client";

import { useTransition } from "react";
import { addRandomTodo } from "./actions";

export default function AddTodoButton() {

    const [isPending, startTransition] = useTransition();

    const addTodo = async () => {
        startTransition(async () => {
            const addResult  = await addRandomTodo();
            console.log('addResult', addResult);
        });
    }

    return (
        <div>
            <button  onClick={addTodo} disabled={isPending} 
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Add Random Todo
            </button>
        </div>
    )
}

