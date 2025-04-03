import { useState } from "react";
import styles from "@/styles/InputNewTask.module.css"

export const Form = ({ setTaskList, taskList }) => {
  const [inputValue, setInputValue] = useState("");
  const [isCompleted, setIsCompleted] = useState("");

  console.log(isCompleted);
  

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTaskClick = (event) => {
    event.preventDefault();

    const newTask = {
      id: Date.now(),
      task: inputValue,
      isCompleted: false,
    };

    setTaskList([newTask, ...taskList]);
    setInputValue("");
  };
  console.log("taskList", taskList);

  return (
    <form>
      <input
        className={styles.input}
        type="text"
        onChange={handleChange}
        value={inputValue}
        placeholder="Add a new task..."
      />
      <button onClick={handleAddTaskClick} type="submit" className={styles.button}> 
        Add
      </button>
    </form>
  );
};
