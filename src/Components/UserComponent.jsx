import { useDispatch } from "react-redux";
import { addUser } from "../ReduxToolkit/UserSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export const UserComponent=()=>{
    const [data,setData]=useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleClick=()=>{
        dispatch(addUser(data))
        navigate("/getinput");
    }
    return(
        <div>
            <h1>User Component</h1>
            <input type="text" onChange={(e)=> setData(e.target.value)} />
            <button onClick={()=>handleClick()}>click</button>
        </div>
    )
}