import { useState } from "react";

function UseState(){
    const [x,setX] = useState(0);
    const [todo, setTodo] = useState(['todo1','todo2']);
 return (
    <>
    count:{x} is {(x%2===0)? 'Even' : 'Odd'}
      <button onClick={()=>{setX(x+1)}}> click me for Increment</button>
      <button onClick={()=>{setX(x-1)}}> click me for Decrement</button>

      <ul>
        {todo.map((todo)=><li>{todo}</li>)}
        <button onClick={()=>{
            setTodo([...todo,'AnotherOne'])
        }}>click</button>
      </ul>
    </>
 )
}

export default UseState;