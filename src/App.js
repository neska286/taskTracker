import  { useState} from "react"
import AddTask from "./Components/AddTask/AddTask";
import Filter from "./Components/Filter";
import Header from "./Components/Header/Header";
import Tasks from "./Components/Tasks/Tasks";


function App() {
// const inputEle = useRef()
const initialState = {
  text:'',
  day:'',
  // reminder: false
}
  const[showAddTask,SetShowAddTask] = useState(false)
  const[filter,setFilter] = useState("")
  const [inputs,setInputs]= useState(initialState)
  const [reminder,setReminder]= useState(false)
  const[state,setState]= useState([
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


const handleDelete=(id)=>{
  console.log('id',id)
  setState((prevState)=>{
    
return prevState.filter((task)=> task.id !== id)
  })
}
const handleToggle=(id)=>{
  setState((prevState)=>{
    return prevState.map((task)=>{
      return (
        task.id === id ? {...task, reminder : ! task.reminder}: task   
      )

    })
  })
  
}
const toggleHandler = ()=>{
  SetShowAddTask(!showAddTask)
}
// const inputChange = ()=>{
//   console.log(inputEle.current.value)
// }
// const handleFocus =()=>{
//   inputEle.current.focus()
// }
const filterName = (text)=>{
  setFilter(text)
}
const textHandler =()=>{
  if(filter.length !== 0){
    return state.filter((el)=> el.text.includes(filter))
  }
  return state
}

const handleSubmit =(e)=>{
  e.preventDefault()
  console.log('inputs',inputs,reminder)
  const id= Math.floor(Math.random()* 1000) + 1
  console.log('id',id)
  // const newTask = {id,inputs}
  // setState((prevState)=> setState([...prevState,...inputs]))
  const tempState = {id,...inputs,reminder };
  setState([...state,tempState]);

  
}
  return (
    <div className="container">
    <Header showAddTask={showAddTask} toggleHandler={toggleHandler}/>
   {showAddTask && <AddTask 
   setInputs={setInputs} 
   handleSubmit={handleSubmit}
   setReminder={setReminder}
   reminder={reminder}/>}
   {/* <input
   type="text"
   placeholder="test for use ref"
   onChange={inputChange}/>
   <button onClick={handleFocus}> focus me</button> */}
   <Filter filteration={filterName}/>
   {state.length ? ( <Tasks state={textHandler()} handleDelete={handleDelete} handleToggle={handleToggle}/>):('No Tasks To Show')}
    </div>
  );
}


export default App;
