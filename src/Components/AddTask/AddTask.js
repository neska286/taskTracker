

const AddTask = ({setInputs,handleSubmit,reminder,setReminder}) => {
  // const [text, setText] = useState("");
  // const [day, setDay] = useState("");

  const handleInputChange=(e)=>{
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  const handleReminderChange=(e)=>{
    setReminder(e.target.checked)
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          name="text"
          placeholder="Add Task"
          onChange={handleInputChange}

        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          name="day"
          placeholder="Add Day & Time"
          onChange={handleInputChange}

        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          onChange={handleReminderChange}
          checked={reminder}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
