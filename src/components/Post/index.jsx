import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import styles from "./index.module.css";

export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/kaue-G.png" />
                    <div className={styles.authorInfo}>
                        <strong>Santiago</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="12 de agosto as 09:45" dateTime="2022-08-12 09:45:12">
                    Publicado há 1h
                </time>
            </header>

            <div className={styles.content}>
                <p>Tamo aqui</p>
                <a href="#">Chega mais</a>
                <p>
                    <a href="#">#énois</a>{' '}
                    <a href="#">#naluta</a>{' '}
                    <a href="#">#valente</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder="Deixe um comentario" />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    );
};