import { PlusCircle } from "phosphor-react"
import styles from './Input.module.css'
import { FormEvent, useState } from "react";

export function Input() {


    const [tasks, setTasks] = useState([
        'Task 1',
        'Task 2',
        'Task 3'
    ]);

    const [newTaskText, setNewTaskText] = useState('');

    // function handleCreateNewTask() {
    //     setTasks([...tasks, setTasks])
    // }


    function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setNewTaskText(event.target.value)
        console.log(event.target.value)

    }

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault()
        console.log('test')
        setTasks([...tasks, newTaskText]);
    }


    return (
        <div>
            <form className={styles.wrapper} 
            >
                <input type="text" placeholder="Adicione uma nova tarefa"
                />
                <button className={styles.createTask}>Criar<PlusCircle size={16} 
                /></button>
            </form>
        </div>
    )
}