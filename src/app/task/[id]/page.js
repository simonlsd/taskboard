'use client'

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function TaskDetail({params}) {
    const router = useRouter; 
    const { id } = params;
    const [title, setTitle] = useState;
    const [description , setDescription] = useState("")

    const handleSave = () => {
        const saveTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const updatedTasks = saveTasks.map((task) =>
            task.id === Number(id) ? {...task, title, description} : task
        ) 
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        router.push('/')
    }

    useEffect(() => {
        const saveTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const task = saveTasks.find((t) => t.id === Number(id));
        if(task){
            setTitle(task.title);
            setDescription(task.description);
        }
    },[id]);

    return(
        <main className="p-4 max-w-xl mx-auto">
            <h1>
                Task Details
            </h1>
            <input
                className="board p-2 w-full mb-2"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                className="board p-2 w-full mb-4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                rows={4}
            />
            <button 
                className="bg-green-500 text-white px-4 py-2"
                onClick={handleSave}
            >
                Save
            </button>
        </main>
    )

}