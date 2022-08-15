import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar";

import styles from "./index.module.css";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1611604548018-d56bbd85d681?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40" alt="" 
            />
            <div className={styles.profile}>
                <Avatar src="https://github.com/kaue-G.png" />
                <strong>Santiago</strong>
                <span>Web Develop</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar Perfil
                </a>
            </footer>
        </aside>
    );
};
