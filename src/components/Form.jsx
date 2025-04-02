import { useState } from "react";

export const Form = ({ setTaskList, taskList }) => {
  const [inputValue, setInputValue] = useState("");

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
    console.log("taskList", taskList);

    setTaskList([newTask, ...taskList]);
    setInputValue("");
    console.log("taskList", taskList);
  };
  console.log("taskList", taskList);

  return (
    <form>
      <input
        type="text"
        onChange={handleChange}
        value={inputValue}
        placeholder="Add a new task..."
      />
      <button onClick={handleAddTaskClick} type="submit">
        Add
      </button>
    </form>
  );
};
