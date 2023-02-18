import styles from "./Post.module.css";

interface PostProps {
  author: string;
  content: string;
  role?: string;
}

function Post({ author, content, role }: PostProps) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/ranieri3232.png"
          />
          <div className={styles.authorInfo}>
            <strong>{author}</strong>
            <span>{role ? role : "Web developer"}</span>
          </div>
        </div>

        <time title="17 de fevereiro as 20:43" dateTime="2023-02-17 20:43:00">
          Publicado há 1 hora
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>👉{"  "} <a href="#">jane.design/doctorcare</a></p>

        <p><a href="#">#novoprojeto</a> <a href="#">#nlw</a> <a href="#">#rocketseat</a></p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback!</strong>
        <textarea
          placeholder="Deixe um comentário"
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
}

export { Post };