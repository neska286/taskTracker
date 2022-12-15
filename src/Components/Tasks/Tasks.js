import Task from "../Task/Task"




const Tasks = ({tasks,onDelete,onToggle}) => {
  
  return (
    <>
        {tasks.map((task)=>{
            return (
               <Task key={task.id} task={task} deleteHandler={onDelete} toggleHandler={onToggle}/>
            )

        })}
      
    </>
  )
}

export default Tasks
