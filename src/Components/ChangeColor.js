import {useState, useEffect} from 'react';

function ChangeColor(){
    const [color, setColor] = useState("white");
    const click = (color)=>{
            setColor(color);
    }
    useEffect(()=>{
        document.body.style.backgroundColor = color;
    },[color])
  return(
    <>
         <button onClick={()=>{
            click("crimson")
         }}> change Background Color</button>
    </>
  )
}

export default ChangeColor;