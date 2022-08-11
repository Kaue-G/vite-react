import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar";
import styles from "./index.module.css"

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/winchesterdd.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Winchesterdd</strong>
                            <time title="12 de agosto as 09:45" dateTime="2022-08-12 09:45:12">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar Comentario">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Congratulations :D</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
};