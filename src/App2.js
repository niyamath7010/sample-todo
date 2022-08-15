import './App2.css';
import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Todolist from "./Todolist";

const App2=()=>{

        const[inputList,setinputList]=useState("")
        const[Items,setItems]=useState([])



        const itemEvent=(event)=>{
            setinputList(event.target.value)
        }

        const listItems=()=>{
            setItems((oldItems)=>{
            return[...oldItems,inputList]
            })
            setinputList("");
        }
        
  


    return(
        <>

        <div className="name">
            <div className="center">
            <br></br>
                <h1>to do list
                </h1>
                <br/>
                <input type="text" placeholder="enter items" 
                value={inputList} onChange={itemEvent}/>
                <Button className="btn" onClick={listItems}>

                <AddIcon/>
                </Button>
                <br/>
                <br/>
<ol>
   {
       Items.map((itemval,index)=>{
           return <Todolist key={index} text={itemval}/>
       })
   }
</ol>
                
            </div>
        </div>

        




</>

    )
}

export default App2;
