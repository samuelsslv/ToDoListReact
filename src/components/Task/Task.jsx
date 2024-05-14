import { useState } from 'react';
import styles from './Task.module.css'
import { Trash, Circle, CheckCircle } from 'phosphor-react'

// eslint-disable-next-line react/prop-types
export function Task({textTask}) {

    const [isTaskFinished, setIsTaskFinished] = useState(false)

    function handleCircleClick() {
        console.log('Circle clicked');
        setIsTaskFinished((state) => {
            return !state
        })
        
    }

    return(
        <div className={styles.task_wrapper}>
            <div className={styles.check} onClick={handleCircleClick}>
                { isTaskFinished ? <CheckCircle size={24} weight="fill"/> : <Circle size={24}/> }
            </div>
            <div className={styles.task_description}>
                <p className={isTaskFinished ? styles.task_finished : ''}>
                    {/* Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                    Lorem ipsum  dolor sit amet, consectetur adipiscing elit sed diam.  Lore    mauris */}
                    {textTask}
                </p>
            </div>
            <div className={styles.task_remove}>
                <Trash size={24} />
            </div>
        </div>
    )
}