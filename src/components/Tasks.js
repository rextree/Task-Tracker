import Task from "./Task";

const Tasks = ({ tasks, clickDelete, clickToggle }) => {
  return (
    <>
      {tasks.map((task) => {
        return <Task 
        key={task.id} 
        task={task} 
        clickDelete={clickDelete}
        clickToggle={clickToggle} />;
      })}
    </>
  );
};

export default Tasks;
