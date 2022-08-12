import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/esm/locale/pt-BR/index.js";
import { ChangeEvent, FormEvent, useState } from "react";
import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import { IComment, IPostProps } from "../DTO/IPost";
import styles from "./index.module.css";

export function Post({ author, publishedAt, content, comments }: IPostProps) {
    const [stateComments, setComments] = useState(comments);

    const [newCommentText, setNewCommentText] = useState({
        id: '',
        text: ''
    });

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
        locale: ptBR,
    });
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    const isNewCommentEmpty = newCommentText.text === '';

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();

        setComments([...stateComments, newCommentText]);

        setNewCommentText({
            id: '',
            text: ''
        });
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setNewCommentText({
            id: (stateComments.length === 0 ? 0 : stateComments[stateComments.length - 1].id + 1) as string,
            text: event.target.value
        });
    }

    function deleteComment(commentToDelete: IComment) {
        const commentsWithoutDeletedOne = stateComments.filter(comment => {
            return comment.id !== commentToDelete.id;
        })
        setComments(commentsWithoutDeletedOne);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {
                    content.map(line => {
                        if (line.type === 'paragraph') {
                            return <p key={line.id}>{line.content}</p>;
                        } else if (line.type === 'link') {
                            return <p key={line.id}><a href="#">{line.content}</a></p>;
                        }
                    })
                }
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name="comment"
                    placeholder="Deixe um comentario"
                    value={newCommentText.text}
                    onChange={handleNewCommentChange}
                    required
                />

                <footer>
                    <button type="submit" disabled={isNewCommentEmpty} >
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {
                    stateComments.map(comment => {
                        return (
                            <Comment
                                key={comment.id}
                                content={comment}
                                onDeleteComment={deleteComment}
                            />
                        );
                    })
                }
            </div>
        </article>
    );
};