import Fruit from "./fruit";
  export default function Fruits(){
const fruit=[
  {
    name:"Apple",
    quantity:10,
    cost:150

  },{
    name:"Banana",
    quantity:10,
    cost:50
  },{
    name:"lichi",
    quantity:10,
    cost:120
  },{
    name:"Mango",
    quantity:10,
    cost:90
  }
];
return (<div>
  <ul>{fruit.map((fruit)=><Fruit key={fruit.name} cost={fruit.cost} quantity={fruit.quantity}/>)}</ul>
</div>)
}