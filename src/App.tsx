import { Header } from './components/Header'
import { Input } from './components/Input'
import { Task } from './components/Task'

import './global.css'
import styles from './App.module.css'

import { ClipboardText } from 'phosphor-react'
import { v4 as uuidv4 } from 'uuid';

export function App() {

  const posts: any[] = [{
    id: uuidv4(),
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    completed: false
    },
    {
      id: uuidv4(),
      content: 'Comentário bacana',
      completed: true
    },
  ];

  const completedCount = posts.reduce((count, post) => post.completed ? count + 1 : count, 0);


  return (
    <>
    <Header />
    <div className={styles.container}>
      <Input/>
        <div className={styles.taskHeader}> 
          <p>Tarefas criadas <span>{posts.length}</span></p>
          <p>Concluidas <span>{completedCount} de {posts.length}</span></p>
        </div>
            {
            posts.length > 0 ? (
              posts.map(post => <Task 
                id={post.id} 
                content={post.content}
                completed={post.completed}
                />)
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