import React, { createContext } from 'react';
import Child1 from './Child1';

export const NameContext = createContext()
export const DsgContext = createContext()
export const SalaryContext = createContext()
export default function Parent() {
    return (
        <div>
            <h1>Context API Example</h1>
            <h2>Parent Component</h2>
            <hr />
            <NameContext value="Ujjwal">
                <DsgContext value="Trainee">
                    <SalaryContext value={19000000}>
                        <Child1 />
                    </SalaryContext>
                </DsgContext>
            </NameContext>
        </div>
    );
}
