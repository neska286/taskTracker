import {FaTimes} from 'react-icons/fa';


const Task = ({task,handleDelete,handleToggle}) => {
  return (
    <div className={`task ${task.reminder? 'reminder' : 'noreminder'}`} onClick={()=>handleToggle(task.id)}>
        <h3>{task.text} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={(e)=>handleDelete(e,task.id)}/></h3>
        <p>{task.day}</p>
      
    </div>
  )
}
export default Task