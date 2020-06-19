import React, { useReducer } from 'react';
import CounterReducer from './counterReducer';

const Child2 = () => {

    let [state, dispatch] = useReducer(CounterReducer, 10);


    return (
        <div>
            <h4>Second child using Counter Reducer</h4>
            <h4>Value of reducer state is: {state}</h4>
            <button onClick={() => dispatch('INCREMENT')}>Increment Reducer</button>
            <button onClick={() => dispatch('DICREMENT')}>Dicrement Reducer</button>
        </div>
    )
}

export default Child2 