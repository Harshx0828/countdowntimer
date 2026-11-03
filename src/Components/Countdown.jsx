import { useEffect, useRef, useState } from 'react';
import './Countdown.css'
function Countdown(){
const [target,settarget]=useState(null);   
const [now,setnow]=useState(null);
const [diff,setdiff]=useState(0);
const id=useRef(null);
function starthandle(){
    id.current=setInterval(()=>{
setdiff( new Date(target)-new Date());
    },1000);}
useEffect(()=>{
    if(diff<0){
    clearInterval(id.current);setdiff(0)};[diff]})
const getDays=()=>{
    console.log("ans");
    return Math.floor(diff/(1000*60*60*24));
} 
const gethours=()=>{
const hoursinms=diff%(1000*60*60*24);
return Math.floor(hoursinms/(1000*60*60));
}  
const getminutes=()=>{
const minutesinms=diff%(1000*60*60);
return Math.floor(minutesinms/(1000*60));
}     
const getseconds=()=>{
const minutesinms=diff%(1000*60);
return Math.floor(minutesinms/(1000));
}     
    return(
<>

<h1>Countdown timer app</h1>
<div id="input">
    <input type="datetime-local" name="" id="date-time" onChange={(e)=>{
       settarget(e.target.value); 
    }} />
    <button id="submit" onClick={starthandle}>start</button>
    <div className="display">
        <ul>
            <li><span id='days'>{getDays()}</span>days</li>
            <li><span id='hours'>{gethours()}</span>hours</li>
            <li><span id='minutes'>{getminutes()}</span>minutes</li>
            <li><span id='second'>{getseconds()}</span>second</li>
        </ul>
    </div>
</div>
</>

    )
}
export default Countdown;