import React from 'react'

export default function Second() {
    const bool="True"
    let name;
    if(!bool){
     name="prachika"
    }
    else{
        name="suman"
    }
  return (
    <div>hello prachika {name}</div>
  )
}
