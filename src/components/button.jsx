import React, { useState } from 'react'

export default function Button() {
  const [count,setcount]=useState(0);
  const [increment,setincrement]=useState(1);
    function handle(){
      setcount(count+increment);
    }
    function handledec(){
      setcount(count-increment);
  }
  function incrementby(){
    setincrement(increment+1);
  }
  function decrementby(){
    setincrement(increment-1);
  }
  return (
    <div> <h3>your count will be: {count}</h3>
    <button onClick={handle}>increment</button>
    <button onClick={handledec}>decrement</button>
    <h2>increment by number:{increment}</h2>
    <button onClick={incrementby}>incrementBy</button>
    <button onClick={decrementby}>decrementBy</button>
    </div>
  )
}
