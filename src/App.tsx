import { Header } from './components/Header'
import { Input } from './components/Input'
import { Task } from './components/Task'

import './global.css'
import styles from './App.module.css'
import { ClipboardText } from 'phosphor-react'

export function App() {

  const posts: any[] = [1,2,3,4,5];

  return (
    <>
    <Header />
    <div className={styles.container}>
      <Input/>
        <div className={styles.taskHeader}> 
          <p>Tarefas criadas <span>0</span></p>
          <p>Concluidas <span>0</span></p>
        </div>
            {
            posts.length > 0 ? (
              posts.map(post => <Task key={post.id} />)
            ) : (
             <div className={styles.noTask}>
                <ClipboardText size={56} />
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
             </div>   
            )}
    </div>
    </>
  )
}