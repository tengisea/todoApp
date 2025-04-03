import { Filter, Form, Summary, TaskContainer } from "@/components";
import { useState } from "react";

const Home = () => {
  const [tasklist, setTaskList] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("all");

  const filteredTasks = tasklist.filter((task) =>{
    if (currentFilter === "biyleegui-yvna")return !task.isCompleted;
    if (currentFilter === "biylejee")return task.isCompleted;
    return true
  })

  return (
    <div className="border">
      <div className="container">
        <div className="heading"> To-Do list</div>

        <div className="new-task">
          <Form setTaskList={setTaskList} taskList={tasklist} />
        </div>

        <div className="three-button">
          <Filter
            currentFilter={currentFilter}
            setCurrentFilter={setCurrentFilter}
          />
        </div>

        <div className="tasks">
          <TaskContainer filteredTasks={filteredTasks} tasklist={tasklist} setTaskList={setTaskList}/>
        </div>

        <div className="data">
          <Summary tasklist={tasklist} />
        </div>
      </div>
    </div>
  );
};

export default Home;
