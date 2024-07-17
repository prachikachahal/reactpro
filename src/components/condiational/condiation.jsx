import First from "./first";
import Second from "./second";
export default function Condiation() {
 const display= false;
    // if(display){
    //     return <First/>
    // }
    // else{
    //     return <Second/>
    // }
    return display ?<First/>:<Second/>
}
