import { Trash } from 'phosphor-react'
import styles from './Task.module.css'
import { Checkbox } from './Checkbox'

interface TaskType {
    id: string,
    content: string,
    completed: boolean
}

export function Task(task:TaskType) {

    return (
        <div className={styles.task}>
            <Checkbox />
            {/* <span className={task.completed ? styles.completed : styles.uncompleted}> </span> */}
            <p>{task.content}</p>
            <Trash size={25} />
        </div>
    )
}