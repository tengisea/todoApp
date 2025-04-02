export const TaskContainer = ({ filteredTasks, tasklist, setTaskList }) => {
  const toggleTaskStatus = (taskId) => {
    const taskListUpdate = tasklist.map((task) => (taskId === task.id ? { ...task, isCompleted: !task.isCompleted} : task));

    setTaskList(taskListUpdated);
  };

  const deleteTask = (taskId)=>{
    const isConfirmed= window.confirm("Are you sure you want to delete this task?")

    if (isConfirmed){
      
    }
  }

  return <input type="checkbox" onChange={isCompleted} />
};
