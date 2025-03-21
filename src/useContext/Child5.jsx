import React from 'react';
import { NameContext, DsgContext, SalaryContext } from './Parent';

export default function Child5() {
    return (
        <div>
            <h2>Child5  Component</h2>
            <NameContext.Consumer>
                {
                    (data) => <h3>Name : {data}</h3>
                }
            </NameContext.Consumer>

            <DsgContext.Consumer>
                {
                    (data) => <h3>Designation : {data}</h3>
                }
            </DsgContext.Consumer>


            <SalaryContext.Consumer>
                {
                    (data) => <h3>Salary : {data}</h3>
                }
            </SalaryContext.Consumer>

        </div>
    );
}
