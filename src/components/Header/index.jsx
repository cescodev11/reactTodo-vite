import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
const Header = () => {
  return (
    <header className={styles.header}>
      <p>Day to Day List</p>
      <form className={styles.newTaskForm}>
        <input placeholder="Add a New task" type="text" />
        <button>
          Create
          <AiOutlinePlusCircle size={20}/>
        </button>
      </form>
    </header>
  );
};

export default Header;
