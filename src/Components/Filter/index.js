import React,{useState} from 'react'

const Filter = ({filteration}) => {
    const[filterName, setFilterName]=useState("")

    const handleInputChange=(e)=>{
        setFilterName(e.target.value)
        filteration(e.target.value)
    }
  return (
    <div>
   <input
   type="text"
   placeholder="test for filter"
   value={filterName}
   onChange={handleInputChange}/>
    </div>
  )
}

export default Filter