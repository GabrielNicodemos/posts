import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";
import Avatar from "./Avatar";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=500"
      />

      <div className={styles.profile}>
        <Avatar user="gabrielNicodemos" />
        <strong>Gabriel Nicodemos</strong>
        <span>Desenvolvedor</span>
      </div>

      <footer>
        <a>
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};

export default Sidebar;
