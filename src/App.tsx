import { Header } from './components/Header'
import { Input } from './components/Input'
import { Task } from './components/Task'

import './global.css'
import styles from './App.module.css'

import { ClipboardText, PlusCircle } from 'phosphor-react'
import { v4 as uuidv4 } from 'uuid';
import { ChangeEvent, FormEvent, useState } from 'react'



export function App() {

  const [tasks, setTasks] = useState([{
    id: uuidv4(),
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    completed: false
    },
    {
      id: uuidv4(),
      content: 'Comentário bacana',
      completed: true
    },
  ]);

  const [newTaskText, setNewTaskText]= useState('')

  function handleNewCommentChange(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    setNewTaskText(event.target.value)
  }


  function handleNewComment(event: FormEvent) {
    event.preventDefault();
    const newTask = {
      id: uuidv4(),
      content: newTaskText,
      completed: false
    }
    setTasks([...tasks, newTask])
    setNewTaskText('')

  }

  function onDeleteTask(idToDelete: string) {
    const idWithoutDeletedOne = tasks.filter(task => {
      return task.id !== idToDelete;
    })
    setTasks(idWithoutDeletedOne)
  }



  const completedCount = tasks.reduce((count, post) => post.completed ? count + 1 : count, 0);

  return (
    <>
    <Header />
    <div className={styles.container}>
      {/* <Input/> */}
      <div>
            <form className={styles.wrapper}
            onSubmit={handleNewComment}>
                <input type="text" placeholder="Adicione uma nova tarefa"
                value={newTaskText}
                onChange={handleNewCommentChange}
                />
                <button className={styles.createTask}>Criar<PlusCircle size={16} 
                /></button>
            </form>
        </div>
        <div className={styles.taskHeader}> 
          <p>Tarefas criadas <span>{tasks.length}</span></p>
          <p>Concluidas <span>{completedCount} de {tasks.length}</span></p>
        </div>
            {
            tasks.length > 0 ? (
              tasks.map(task => <Task 
                key={task.id}
                task={task} //aqui passo a task completa porque recebo ela inteira 
                onDeleteTask={onDeleteTask}
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