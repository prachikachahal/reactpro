function Hello(){
 return <h1>hello I am a Engineer.</h1>
}
export default function Prachika({info}) {
  return  <div><h1>hello,I am Prachika.{<Hello></Hello>}</h1>
  <h2> {info.clas}{info.year}{info.stream}
    {info.emoji}
    </h2></div>
}