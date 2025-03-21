import React, {useState, useMemo} from 'react';

function calculations(num2){
    let sum = 0
    for (let i=1; i<10000000000+num2;  i++){
        sum = sum+i
    }
    return sum
}

export default function useMemoHookExample() {
    let [num1,setNum1] = useState(1)
    let [num2,setNum2] = useState(1)
    let sum = useMemo(()=>{
        return calculations(num2)
    },[num2])
  return (
    <div>
      <h1>useMemoExample</h1>
      <h2>num1 = {num1} | num2 = {num2}</h2>
      <button onClick={()=>setNum1(num1+1)}>Increment num1</button>
      <button onClick={()=>setNum2(num2+1)}>Increment num2</button>
      <h3>sum = {sum}</h3>
    </div>
  );
}
