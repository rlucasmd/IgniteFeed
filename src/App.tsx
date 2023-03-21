import { Header } from "./components/Header";
import { Post, PostProps } from "./components/Post";
import "./styles/global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

const posts: PostProps[] = [
  {
    id: 1,
    author: {
      name: "Ranieri Lucas",
      role: "Web Developer",
      avatar_url: "https://github.com/ranieri3232.png"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "👉 jane.design/doctorcare" },
      { type: "link", content: "#novoprojeto" },
      { type: "link", content: "#nlw" },
      { type: "link", content: "#rocketseat" }
    ],
    published_at: new Date("2023-02-18 14:38:23")
  },
  {
    id: 2,
    author: {
      name: "Mayk Brito",
      role: "Web Developer",
      avatar_url: "https://github.com/maykbrito.png"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "👉 jane.design/doctorcare" },
      { type: "link", content: "#novoprojeto" },
      { type: "link", content: "#nlw" },
      { type: "link", content: "#rocketseat" }
    ],
    published_at: new Date("2023-02-18 11:38:23")
  },
];

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post
              id={post.id}
              author={post.author}
              published_at={post.published_at}
              key={post.id}
              content={post.content}
            />
          ))}
        </main>
      </div>

    </div>
  );
}

export default App;


