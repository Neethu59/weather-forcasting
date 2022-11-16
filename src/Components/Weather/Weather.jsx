import React from 'react'
import {useState, useEffect } from 'react';
import './Weather.css'; 
import axios from 'axios'
import moment from 'moment'
export default function Weather() {
  // const [condition,setcondition]=useState('')
  const [filterdata,setfilterdata]=useState([])
  useEffect(()=>{
  axios.get("https://api.openweathermap.org/data/2.5/forecast?q=kozhikode&appid=1386b55e69a4ad436d903fde8eae2ecd")
  .then(response=>{
    console.log(response.data.list)
    const data=response.data.list
    console.log(data);
    const filtdata=data.filter(filtervalue=>{
      return filtervalue.dt_txt.includes("06:00:00")
    })
  console.log(filtdata);
  setfilterdata(filtdata)
  console.log(filterdata);
  filterdata.map(filtername=>{
  console.log(filtername);
})
  })

  // .then((response)=>JSON.stringify(response))
  // .then(res=>
  //   console.log(res.data))
  },[])
  






  return (
    <>
    
<div class="container"style={{width:"90%"}}>
 <div class="card">
    <div class="card-body"style={{ boxShadow:' 1px 2px 9px black',height:"10%"}}>
      <div class="card">
      <div class="card-body"style={{paddingBottom:"20%",backgroundColor:"black",color:'wheat' , boxShadow:' 5px 5px 5px black' }}>
        <h1 class="text-center">5-Day Forecast.</h1>
      </div>
      </div>
      </div>
 </div>
 </div>
      <div className='container'style={{width:"90%"}}>
  <div class="card-deck">
  {filterdata?.map(value=>(
 <div class="card " >
 <div class="card-body text-center">
 <b>  <p class="card-text"></p></b>
 <p>{moment(value?.dt_txt).format("dddd")}</p>
 <p>{moment(value.dt_txt).format("MMM-DD,HH:MM")}</p>
 <b><p>{Math.floor(value.main.temp-272.15)}</p></b>
 <p>{value.weather[0].description}</p>
 </div>
</div>
  ))}
  </div>
</div>


    

    </>
  )
}
