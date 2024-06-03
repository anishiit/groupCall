import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Homepage() {
    const [input ,setInput] = useState("");
    const navigate = useNavigate();
    const submitHandler = ()=>{
        navigate(`/room/${input}`);
    }
  return (
    <>
      <div>
        <input value={input} onChange={(e)=>setInput(e.target.value)} type='text' placeholder='Enter Your Name'></input>
        <button onClick={submitHandler}>Join</button>
      </div>
    </>
  )
}

export default Homepage
