import  { useState } from "react"
import AddTask from "./Components/AddTask/AddTask";
import Header from "./Components/Header/Header";
import Tasks from "./Components/Tasks/Tasks";

function App() {
  const [showAddTask,setShowAddTask]= useState(false);
  const[tasks,setTasks]= useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder:true
    },
  
  {
      id:2,
     text:"Meeting at School",
      day: "Feb 6th at 1:30pm",
     reminder: true
  },
  {
     id:3,
      text:"Food Shopping",
     day:" Feb 5th at 2:30pm",
     reminder: false
  }
  ])

const addTask = (task)=>{
  console.log(task);
  const id= Math.floor(Math.random()* 1000) + 1
  const newTask = {id,...task}
  setTasks([...tasks, newTask])
}
const deleteTask = (id)=>{
  // console.log('delete',id);
  setTasks(tasks.filter((task)=>{
    return(
      task.id !==id
    )
  }))
}

const toggleReminder = (id)=>{
  console.log(id);
  setTasks(tasks.map((task)=>{
    return (
      task.id === id ? {...task, reminder : ! task.reminder} : task
    )
  }))

}
const toggleAddbutton= ()=>{
  setShowAddTask(!showAddTask)
}

  return (
    <div className="container">
    <Header toggleHandler={toggleAddbutton} showAdd={showAddTask}/>
   {showAddTask && <AddTask onAdd={addTask}/>}
    { tasks.length ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ('No Tasks To Show')}
    
    </div>
  );
}


export default App;
