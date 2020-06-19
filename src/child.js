// for child compoenent
import React, { useContext } from 'react';
import counterContext from './CounterContext'

// This is by Context API in  which  we donot need to go to step by step just where we need it call it.
// Two phase 1 create Context API and Then use that HOOK in this.

const Child = () => {

    let counterValue = useContext(counterContext);

    return(
        <div>
            <h4>First child using Counter Context</h4>
            <h3> Counter value is: {counterValue[0]}</h3>

            <button onClick={()=> {counterValue[1](++counterValue[0])}}>Increament </button>
            <button onClick={()=> {counterValue[1](--counterValue[0])}}>Dicrement </button>
        </div>
    )
}



//This is  old one and little complex to pass values step by step.
// const Child = (props) => {
//     return(
//         <div>
//             <h2>First child</h2>
//             <h3>First Item is: {props.name}</h3>
//         </div>
//     )
// }

export default Child