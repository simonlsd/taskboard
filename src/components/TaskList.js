export default function TaskList({ tasks }) {
    return(
        <ul className="space-y-2">
            {tasks.map((tasks,index) => (
                <li
                    key={index}
                    className="board p-2 rounded"
                >

                    {tasks}
                </li>
            ))}

        </ul>
    )
}