
import TaskIcon from "./TaskIcon";

const Task = ({ task, clickDelete, clickToggle }) => {
    return (
        <div className={`flex items-center justify-between p-4 bg-gray-300 my-2 rounded-lg ${task.reminder ? 'border-l-4 border-green-400' : ''}`} onDoubleClick={() => clickToggle(task.id)}>
            <div>
                <h3>{task.text}</h3>
                <p>{task.time}</p>
            </div>
            <TaskIcon clickDelete={clickDelete} task={task} />
        </div>
    )
}

export default Task
