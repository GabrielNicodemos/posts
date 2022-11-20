import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import Avatar from "./Avatar";
import styles from "./Comment.module.css";

interface CommentProps {
  content: string,
  onDeleteComment: (comment: string) => void;
}

const Comment = ({ content, onDeleteComment }: CommentProps) => {

  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
      onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((likes) => {
      return likes + 1
    });
  }
  return (
    <section className={styles.comment}>
      <Avatar hasBorder={false} user="gabrielNicodemos" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabriel Nicodemos</strong>
              <time title="11 maio ás 20:13" dateTime="2022-05-11 00:00:00">
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer className={styles.commentFooter}>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Curtir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </section>
  );
};

export default Comment;
