import {FaTimes} from 'react-icons/fa';


const Task = ({task, deleteHandler,toggleHandler}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder': 'noreminder'}`} onDoubleClick={()=>toggleHandler(task.id)}>
        <h3>{task.text} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={()=>deleteHandler(task.id)}/></h3>
        <p>{task.day}</p>
      
    </div>
  )
}

export default Task

