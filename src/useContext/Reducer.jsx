import React from 'react';

export default function Reducer(state, action) {
    switch (action.type) {
        case "INC":
            return  {count:state.count + 1}
        case "DEC":
            if (state.count > 1)
                return  {count:state.count - 1}
            else
                return  state

        default:
            return state
    }

}
