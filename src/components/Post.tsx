import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

export interface PostProps {
  id: number;
  author: Author;
  content: Content[],
  published_at: Date;
}

interface Content {
  type: "paragraph" | "link";
  content: string;
}

interface Author {
  avatar_url: string;
  name: string;
  role: string;
}

interface CommentProps {
  author: Author;
  content: string;
  published_at: Date;
}

function Post({ author, content, published_at }: PostProps) {
  const publishedDateFormatted = format(
    published_at,
    "dd 'de' LLLL 'ás' HH:mm'h'",
    { locale: ptBR }
  );
  const publishedDateRelativeToNow = formatDistanceToNow(published_at, { locale: ptBR, addSuffix: true });

  const [newCommentText, setNewCommentText] = useState("");
  const [comments, setComments] = useState<CommentProps[]>([{ author, content: "Show, demais!", published_at: new Date() }]);


  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    if (newCommentText.length === 0)
      event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function handleCreateNewComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setComments([...comments, { author, content: newCommentText, published_at: new Date() }]);
    setNewCommentText("");
  }

  function deleteComment(content: string) {
    const newComments = comments.filter((comment) => (comment.content !== content));
    setComments(newComments);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Este campo é obrigatório!");
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            outlineBorder
            src={author.avatar_url}
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={published_at.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {
          content.map(
            (line) => {
              return (
                <p key={line.content}>
                  {
                    line.type === "paragraph" ? line.content : <a href="#">{line.content}</a>
                  }
                </p>
              );
            }
          )
        }
      </div>
      <form
        className={styles.commentForm}
        onSubmit={(e) => handleCreateNewComment(e)}
      >
        <strong>Deixe seu feedback!</strong>
        <textarea
          placeholder="Deixe um comentário"
          title="comment"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button
            type="submit"
            disabled={isNewCommentEmpty}
          >
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {
          comments.map((comment) => (
            <Comment
              key={comment.content}
              content={comment.content}
              author={comment.author}
              published_at={comment.published_at}
              onDeleteComment={deleteComment}
            />
          ))
        }
      </div>
    </article>

  );
}

export { Post };