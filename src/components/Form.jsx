import React, { useState } from 'react'

export default function Form() {
    const [name,setname]=useState({firstname:"",lastname:""});
  return (
    <>
    <form>
        {name.firstname}-{name.lastname}<br></br>
        <input type="text" value={name.firstname} onChange={(e)=>{setname({...name,firstname:e.target.value})}}/>
        <input type="text" value={name.lastname} onChange={(e)=>{setname({...name,lastname:e.target.value})}}/>
       <br></br> <button type="submit" onClick={(e)=>{
         e.preventDefault();
         console.log(name.firstname+name.lastname);
       }}>submit</button>        
    </form>
    </>
  )
}
