import React from "react";
import styles from "./task.module.css";
const index = () => {
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Create Task</p>
          <span>18</span>
        </div>
        <div>
          <p>Completed Task</p>
          <span> 1 of 10 </span>
        </div>
      </header>
    </section>
  );
};

export default index;
