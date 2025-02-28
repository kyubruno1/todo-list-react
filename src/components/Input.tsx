import { PlusCircle } from "phosphor-react"
import styles from './Input.module.css'

export function Input() {
    return (
        <div className={styles.wrapper}>
            <input type="text" placeholder="Adicione uma nova tarefa"/>
            <button className={styles.createTask}>Criar <PlusCircle size={16} /></button>
        </div>
    )
}