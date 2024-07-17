import React from 'react'
import Fruits from './fruits'
export default function Fruit(props) {
  return (
    <div><li>{props.name}{props.cost}{props.quantity}</li><h2>hlo</h2></div>
  )
}
