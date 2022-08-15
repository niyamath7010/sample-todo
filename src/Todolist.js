import React, { useState } from "react"

import DeleteIcon from '@material-ui/icons/Delete';


const Todolist=(props)=>{
    const[line,setline]=useState(false)
    const cutIt=()=>{
       setline(true);
    }
    return(
    
    <div className="todo">
    <span onClick={cutIt}>
            <DeleteIcon className="delete"/>
    </span>
     <li style={{textDecoration: line ?"line-through":"none"}}>
     {props.text}</li>





</div>

    )
    
};

export default Todolist;