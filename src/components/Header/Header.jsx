import styles from './Header.module.css'
import { PlusCircle } from 'phosphor-react'

export function Header() {
    return(
        <div>
            <div className={styles.page_header}>
                <img src="logo_to_do.svg" alt="" />
            </div>
            <form className={styles.form_wrapper}>
                <input type="text" placeholder="Adicione uma nova tarefa"/>
                <button 
                    type="submit"
                    >
                    Criar
                    <PlusCircle size={16}/>
                </button>
            </form>
        </div>

    )
}