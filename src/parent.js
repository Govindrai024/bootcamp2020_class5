// for parent compoenent
import React from 'react';
import Child from './child';
import Child2 from './child2';

//With Context API
const Parent = () => {
    return (
        <div>
            <Child />
            <Child2 />
        </div>
    )
}




// Redux or old one

// const Parent = (props) => {
//     return(
//         <div>
//         <Cart2  name={props.name}/>


//         </div>
//     )
// }

export default Parent;