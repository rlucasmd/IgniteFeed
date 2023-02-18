import { Header } from "./components/Header";
import { Post } from "./components/Post";
import "./styles/global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Ranieri Lucas" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem deleniti, facilis totam consectetur sequi sapiente enim ratione excepturi a praesentium fugit, dignissimos consequuntur adipisci in quidem quod. Commodi, iure maxime." />
          <Post author="Ranieri Lucas" content="Novo paragrafo" />
        </main>
      </div>

    </div>
  );
}

export default App;


