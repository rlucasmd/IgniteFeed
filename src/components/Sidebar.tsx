import styles from "./Sidebar.module.css";

import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />
      <div className={styles.profile}>
        <Avatar
          outlineBorder
          src="https://github.com/ranieri3232.png"
        />

        <strong>Ranieri Lucas</strong>
        <span>Web developer</span>
      </div>

      <footer>

        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}

export { Sidebar };