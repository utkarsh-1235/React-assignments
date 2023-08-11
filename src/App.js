import React from 'react';
import './App.css';
import Person from './Components/person';
import Button from './Components/Button';
import Header from './Components/Header';
import List from './Components/List';

function App(props) {
  const ButtonClick = ()=>{
    console.log("button clicked");
  }
  return (
   
    <div>
      <Person name="utkarsh saxena" age={21}/>
      <Button text="clickMe" onClick={ButtonClick}/>
      <Header header="Namaste Utkarsh" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt natus quasi sint. Optio recusandae temporibus magni distinctio magnam minus soluta!"/>
      <List items="google"/>

    </div>
  );
}

export default App;
