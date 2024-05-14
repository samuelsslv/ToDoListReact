import styles from './Tasks.module.css'
import { Task } from '../Task/Task'
import { useEffect } from 'react'

export function Tasks() {
    const toDoList = [
        {
            key: 1,
            toDo: "kfjsgkdfjgkdjgklgjgkljgskljskj",
        },
        {
            key: 2,
            toDo: "kfjsgkdfjgkdjgklgjgkljgskljskj",
        },
        {
            key: 3,
            toDo: "kfjsgkdfjgkdjgklgjgkljgskljskj",
        }
    ]

    useEffect(() => {
        console.log('Componente Tasks montado ou atualizado');
    });

    return(
        <div className={styles.tasks_wrapper}>
            <div className={styles.tasks_header}>
                <div>
                    <p>Tarefas criadas <span className={styles.counter}>0</span></p>
                </div>
                <div className={styles.completed}>
                    <p>Concluidas <span>0</span></p>
                </div> 
            </div>
            {
                toDoList.map( task => {
                    // console.log(task);
                    return <Task textTask={task.toDo} key={task.key}/>
                })
            }
        </div>
    )
}