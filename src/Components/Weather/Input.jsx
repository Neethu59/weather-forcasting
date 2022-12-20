import React, { useState } from 'react'
import './Weather.css'
import SearchIcon from '@mui/icons-material/Search';
// import {SearchIcon} from '@mui/icons-material'; 
export default function Input({citysearch}) {
  const [state,setstate]=useState({
    name:"" 
  })
  const setregister=(event)=>{
const {name,value}=event.target
setstate({...state,[name]:value})
console.log(state)
  }
  const registersubmit=(event)=>{
    event.preventDefault()
    console.log(state.name)
    citysearch(state.name)
  }
  return (
    <>
   
    

<div className='search'>
<form>
<div className='input-group rounded'>
  <div>
  <input type="search"class="form-control rounded "aria-label="Search"aria-describedby='search-addon'placeholder='search' name="name" value={state.name||""}onChange={setregister}/>
  </div>
  <div class="mr-5">
  < SearchIcon onClick={registersubmit}/></div>
</div>
</form>
</div>

  
    </>
  )
}
