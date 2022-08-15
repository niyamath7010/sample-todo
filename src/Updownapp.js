import React, { useState } from "react";
import "./Updown.css";
import AddBoxIcon from '@material-ui/icons/AddBox';
import DeleteIcon from '@material-ui/icons/Delete';
const Up=()=>{

    const [Num,setNum]=useState(0)

 const incNum=()=>{
     setNum(Num+1);
 }
    const decNum=()=>{
        setNum(Num-1)
    }

    return(
        <>
<div className="main">
<div className="center">
<br/>
<h3>counting app</h3>
    <br/>

    <br/>
    <h1>{Num}</h1>
    <br/><br/><br/>
    <button onClick={incNum}>
        <AddBoxIcon />
    </button>
    <button onClick={decNum}>
        <DeleteIcon />
    </button>
</div>
</div>
        </>
    )
}

export default Up;