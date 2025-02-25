import React, { useState, useEffect } from 'react';

function ExampleComponent() {
    
    const [details, setDetails] = useState({name:"", counter:0})
    function increaseCounter() {
        setDetails((prev)=>({...prev,counter:prev.counter + 1}))

    }
    function namer(e) {
        setDetails((prev)=>({...prev,name:e.target.value})) 
        }
    
  return (
    <div>
        <input type="text" onChange={namer}></input>
      <p>{details.name} clicked {details.counter} times</p>
      <button onClick={increaseCounter}>
        Click me
      </button>
    </div> 
  );
}

export default ExampleComponent;