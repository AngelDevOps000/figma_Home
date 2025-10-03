import Left from "./left";
import Right from "./right";
import Top from "./top";


export default function Start(){
     return <div className="flex "><Left/><div className="flex flex-col w-full h-full "><div><Top/><Right/></div></div></div>
}