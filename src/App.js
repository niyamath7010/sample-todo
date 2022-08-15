import React, { useState } from "react";
import './App.css';
import Todolist from "./Todolist";

const App=()=>{

  const [inputList,setinputList]=useState(" ");
  const [items,setitems]=useState([]);


  const itemEvent=(event)=>{
    setinputList(event.target.value)
  }

  const listItem=()=>{
      setitems((oldItems)=>{
        return[...oldItems, inputList];
      })

        setinputList(""); 
  
  }

 
  return(
    <>
  <div className="main">
    <div className="center">
      <br/>
      <h1>DO LIST
      </h1>
      <br/>
      <input type="text" placeholder="Enter Item"
      value={inputList} onChange={itemEvent}/>
      <button onClick={listItem}>+</button>
      <ol>
        {/* <ul>{inputList}</ul> */}
       { items.map((itemval,index)=>{
         return <Todolist text={itemval} />
        })}
      </ol>
    </div>
  </div>
    </>
  )
}

export default App;
