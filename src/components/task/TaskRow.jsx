import React from "react";
import styles from "@/styles/TaskRow.module.css"
import { TaskList } from ".";

export const TaskRow = ({ task }) => {

  const handleDeleteTask = (taskId) => {
    if (window.confirm("Are you sure you want to delete this task?" && taskId === task.id )) {
      return task.id !== taskId
    }
  };

  return (
    <div className={styles.task}>
      <input type="checkbox" checked={task.isCompleted} />
      <div className="task-name"> {task.task}</div>
      <button className={styles.delete} onClick={handleDeleteTask}> Delete</button>
    </div>
  );
};
