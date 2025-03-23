import { CounterContext } from "./Parent";
import React, { useContext } from 'react';
// import Child2 from './Child2';

export default function Child1() {
    let {count, counterDispatch} = useContext(CounterContext)
    return (
        <div>
            <h2>Child1 Component</h2>
            <h3>Count : {count}</h3>
            <button onClick={()=>counterDispatch({type:"DEC"})}>Decrement</button>
            <button onClick={()=>counterDispatch({type:"INC"})}>Increment</button>
            <hr />
            {/* <Child2 /> */}
        </div>
    );
}

















// import React from 'react';
// import Child2 from './Child2';

// export default function Child1() {
//     return (
//         <div>
//             <h2>Child1 Component</h2>
//             <hr />
//             <Child2 />
//         </div>
//     );
// }
