import Link from "next/link" 

export default function TaskList({ tasks , onDelete}) {
    return(
        <ul className="space-y-2">
            {tasks.map((tasks) => (
                <li
                    key={tasks.id}
                    className="board p-2 rounded founded flex justify-between items-center"
                >
                    <Link
                        href = {`/task/${tasks.id}`}
                    >
                        {tasks.title}
                    </Link>
                    <button
                        className="text-red-500"
                        onClick={() => onDelete(index)}
                    >
                        Delete
                    </button>
                </li>
            ))}

        </ul>
    )
}