import Task from "../Task/Task"




const Tasks = ({state,handleDelete,handleToggle}) => {
  
  return (
    <>
    {state.map((task)=>{
      return (
       <Task task={task} key={task.id} handleDelete={()=>handleDelete(task.id)} handleToggle={handleToggle}/>
      )
    })}
    
    </>
  )
}

export default Tasks
