import { NoTasksToDisplay, TaskRow } from ".";

export const TaskContainer = ({
  filteredTasks,
  tasklist,
  setTaskList,
  setIsCompleted,
  task,
}) => {
  const toggleTaskStatus = (taskId) => {
    const taskListUpdated = tasklist.map((task) =>
      taskId === task.id ? { ...task, isCompleted: !task.isCompleted } : task
    );

    setTaskList(taskListUpdated);
  };

  return (
    <div>
      {tasklist.length === 0 ? (
        <NoTasksToDisplay />
      ) : (
        tasklist.map((task) => <TaskRow task={task} />)
      )}
    </div>
  );
};
