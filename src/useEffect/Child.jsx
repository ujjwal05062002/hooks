import React, {useEffect} from 'react';

export default function Child() {
    useEffect(()=>{
            console.log("Child component is called");
        },[])
  return (
    <>
     <h2>Child Component</h2> 
    </>
  );
}
