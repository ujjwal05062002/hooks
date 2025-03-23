import React, { createContext, useReducer } from 'react';
import Child1 from './Child1';
import Reducer from './Reducer';

export const CounterContext = createContext()

export default function Parent() {
    let [counter,counterDispatch] = useReducer(Reducer,{count:1})
    return (
        <div>
            <h1>Context API Example</h1>
            <h2>Parent Component</h2>
            <h3>Count : {counter.count}</h3>
            <button onClick={()=>counterDispatch({type:"DEC"})}>Decrement</button>
            <button onClick={()=>counterDispatch({type:"INC"})}>Increment</button>
            <hr />

            <CounterContext.Provider value={{...counter, counterDispatch}}>
                <Child1 />
            </CounterContext.Provider>

        </div>
    );
}





















// import React, { createContext } from 'react';
// import Child1 from './Child1';

// export const NameContext = createContext()
// export const DsgContext = createContext()
// export const SalaryContext = createContext()
// export default function Parent() {
//     return (
//         <div>
//             <h1>Context API Example</h1>
//             <h2>Parent Component</h2>
//             <hr />
//             <NameContext value="Ujjwal">
//                 <DsgContext value="Trainee">
//                     <SalaryContext value={19000000}>
//                         <Child1 />
//                     </SalaryContext>
//                 </DsgContext>
//             </NameContext>
//         </div>
//     );
// }
