import { Trash } from 'phosphor-react'
import styles from './Task.module.css'
import { Checkbox } from './Checkbox'

export interface TaskType {
    id: string,
    content: string,
    completed: boolean
}

interface TaskProps {
    task: TaskType,
    onDeleteTask: (id: string) => void;
}

export function Task({task, onDeleteTask}: TaskProps ) {

    function handleDeleteTask() {
        onDeleteTask(task.id)
    }

    
    return (
        <div className={styles.task}>
            <Checkbox completed = {task.completed} />
            {/* <span className={task.completed ? styles.completed : styles.uncompleted}> </span> */}
            <p>{task.content}</p>
            <button><Trash size={25} onClick={handleDeleteTask}/></button>
        </div>
    )
}