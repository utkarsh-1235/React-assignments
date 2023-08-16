import React from 'react';
import './App.css';
import Person from './Components/person';
import Button from './Components/Button';
import Header from './Components/Header';
import List from './Components/List';
import UseState from './Components/UseState';
import ChangeColor from './Components/ChangeColor';
import Avatar from './Components/Avatar';


function App(props) {
  
 
  const onClick=()=>{
  console.log("button clicked")
}
  return (
    <div>
      <Person name="utkarsh saxena" age={21}/>
      <Button text="clickMe" onClick={onClick}/>
      <Header header="Namaste Utkarsh" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt natus quasi sint. Optio recusandae temporibus magni distinctio magnam minus soluta!"/>
      <List items="google"/>
      <UseState/>
      <br/>
      <ChangeColor/>
      <Avatar src="https://imgd.aeplcdn.com/1920x1080/n/cw/ec/150621/g-class-exterior-right-front-three-quarter-2.jpeg?isig=0&q=75&q=75" height="200px" width="200px"/>

    </div>
  );
}

export default App;
