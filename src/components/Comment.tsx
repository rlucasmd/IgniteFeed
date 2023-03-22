import { HandsClapping, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

interface Author {
  avatar_url: string;
  name: string;
  role: string;
}

interface CommentProps {
  author: Author;
  content: string;
  published_at: Date;
  onDeleteComment: (content: string) => void;
}

function Comment({ content, author, onDeleteComment }: CommentProps) {

  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount(count => count + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar src={author.avatar_url} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>
                {author.name}
              </strong>
              <time dateTime="2023-02-18 10:26:00">Cerca de 1h atrás</time>
            </div>
            <button
              title="Deletar comentário"
              onClick={handleDeleteComment}
            >
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <HandsClapping size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>


    </div>
  );
}

export { Comment };