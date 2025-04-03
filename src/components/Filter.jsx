import { useState } from "react";
import styles from "@/styles/ThreeButton.module.css"

export const Filter = ({ setCurrentFilter }) => {
  const handleFilter = (filtervalue) => () => {
    setCurrentFilter(filtervalue);
  };

  return (
    <div className={styles.flex}>
      <button className={styles.button} onClick={handleFilter("all")}>All</button>
      <button className={styles.button} onClick={handleFilter("biyleegui-yvna")}>Active</button>
      <button className={styles.button} onClick={handleFilter("biylejee")}>Completed</button>
    </div>
  );
};
