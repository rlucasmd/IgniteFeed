import { HandsClapping, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

function Comment() {
  return (
    <div className={styles.comment}>
      <img className={styles.commentAuthorAvatar} src="https://github.com/ranieri3232.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>
                Ranieri Lucas
              </strong>
              <time dateTime="2023-02-18 10:26:00">Cerca de 1h atrás</time>
            </div>
            <button title="Deletar comentário"> <Trash size={24} /></button>
          </header>
          <p>Muito bom Ranieri, meus parabéns!! 🚀</p>
        </div>
        <footer>
          <button>
            <HandsClapping size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>


    </div>
  );
}

export { Comment };