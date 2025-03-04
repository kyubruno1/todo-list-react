import { Check, Trash } from 'phosphor-react'
import styles from './Task.module.css'

export interface TaskType {
    id: string,
    content: string,
    completed: boolean
}

interface TaskProps {
    task: TaskType,
    onDeleteTask: (id: string) => void;
    onToggleTask: (id: string, completed: boolean) => void;
}

export function Task({task, onDeleteTask, onToggleTask}: TaskProps ) {
    
    function handleDeleteTask() {
        onDeleteTask(task.id)
    }

    const checkBoxClassName = task.completed ? styles['task-completed'] :
                                               styles['task-uncompleted'];

    const contentCompleted = task.completed? styles['content-completed'] : 
                                             styles['content-uncompleted'];

    function handleToggleTask() {
        onToggleTask(task.id, !task.completed)
    }

    return (
        <div className={styles.task}>
            <label onClick={handleToggleTask}>
                <span className={checkBoxClassName}> {task.completed ? <Check size={14}/> : ' '}</span>
                <p className={contentCompleted}>{task.content}</p>
            </label>
            <button><Trash size={25} onClick={handleDeleteTask}/></button>
        </div>
    )
}