import React, {useContext} from 'react';
import Child4 from './Child4';
import { NameContext, DsgContext, SalaryContext } from './Parent';

export default function Child3() {
    let name = useContext(NameContext)
    let dsg = useContext(DsgContext)
    let salary = useContext(SalaryContext)
    return (
        <div>
            <h2>Child3 Component</h2>
            <hr />
            <h3>Name : {name}</h3>
            <h3>Dsg : {dsg}</h3>
            <h3>Salary : {salary}</h3>
            <Child4 />
        </div>
    );
}
