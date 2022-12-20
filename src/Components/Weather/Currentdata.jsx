import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import './Weather.css'; 
import Input from './Input';
import moment from 'moment';
export default function Currentdata({}) {
  const [state,setstate]=useState({})
  const[details,setdetails]=useState({})
  const[view,setview]=useState({})
  const findcity = (cityname)=>{
    console.log(cityname)
    axios.get(` https://api.openweathermap.org/data/2.5/forecast/daily?q=${cityname}&units=metric&cnt=7&appid=d94bcd435b62a031771c35633f9f310a`)
    .then(response =>{
     console.log(response)
     
     setstate(response.data)
     console.log(response.data)
      const value=response.data.list[0]
      console.log(value.weather[0].description)
      setdetails(value)
      const cont=value.weather[0]
      setview(cont)
      console.log(cont.description)
    })
   

  }

 return (
    <>
    <Input citysearch={findcity}/>
<div class="row ">
  <div class="col-sm-5 offset-sm-1 mt-5" >
    <div class="card pb-5">
    <div class="card-body">
      <div id="display">
      <p>AM</p>
      <p class="pm"style={{marginLeft:"90%"}}>PM</p>
      </div>
    </div>
    <h1 class="offset-sm-4">{state?.city?.name}  {state?.city?.country}</h1>
    <p class="offset-sm-4">{moment(details.dt*1000).format("dddd DD MMMM")} </p>
    <p class="offset-sm-4">Population:{state?.city?.population}</p>
    </div>
  </div>
  <div class="col-sm-5 mt-5">
    <div class="card pb-5">
    <div class="card-body"id="display">
    <p>{moment(details.sunrise*1000).format("HH:MM")}AM</p>
      <p class="pm"style={{marginLeft:"70%"}} >{moment(details.sunset*1000).format("HH:MM")}PM</p>

    </div>
    <h1 class="offset-sm-4">{details?.temp?.day}°C</h1>
    <p class="offset-sm-4">{view.description}</p>
    <div id="display">
    <div class="ml-5">
      <p>{details.pressure}hPa</p>
      <p>{details.humidity}%</p>
      <p>{details.speed}m/s N</p>
    </div>
<div style={{marginLeft:"50%"}}>
<img src={`https://openweathermap.org/img/w/${view.icon}.png`}/>
</div>

    </div>

    </div>



 </div>
</div>



    </>
  )
}
