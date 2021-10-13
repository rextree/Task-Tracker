import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Doctor Appointment',
        time: 'Feb 5th at 2:30pm',
        reminder: true
      },
      {
        id: 2,
        text: 'Meeting Appointment',
        time: 'Feb 5th at 10:30pm',
        reminder: true
      },
      {
        id: 3,
        text: 'Playing Appointment',
        time: 'Feb 5th at 1:30pm',
        reminder: true
      }

    ]
  )
  
  const addTask = (task) => {
    const id = Math.floor(Math.random()*1000)+1;
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {
      ...task, reminder: !task.reminder
    } : task))
  }

  return (
    <div className="sm:max-w-md m-3 sm:mx-auto p-3 border-2 border-grey-100 rounded-lg">
      <Header onShow = {()=>setShowForm(!showForm)} />
      {showForm ?  <AddTask onAdd={addTask} /> : ''}
      
      <Tasks tasks={tasks} clickDelete={deleteTask} clickToggle={toggleReminder} />
    </div>
  );
}

export default App;
