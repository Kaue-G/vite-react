import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "../Avatar";
import styles from "./index.module.css"

export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComent() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((stateLike) => {
            return state + 1;
        });
    }
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

                        <button onClick={handleDeleteComent} title="Deletar Comentario">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content.text}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
};