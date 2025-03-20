import React, { useEffect, useState } from 'react';
import Child from './Child';

export default function Parent() {

    let [num1, setNum1] = useState(1)
    let [num2, setNum2] = useState(1)

    useEffect(() =>{
        console.log("Parent component is called");
    },[])
  return (
    <div>
      <h1>useEffect Example</h1>
      <h2>Parent Component</h2>
      <h3>num1 = {num1} | num2 = {num2}</h3>
      <button onClick={()=>setNum1(num1+1)}>Increment Num1  </button>
      <button onClick={()=>setNum2(num2+1)}>Increment Num2  </button>
      <hr />
      <Child num1={num1} num2={num2} />
    </div>
  );
}
