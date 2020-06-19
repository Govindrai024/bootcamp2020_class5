import React, {useState} from 'react';
import './App.css';
import Parent from './parent';
import CounterContext from './CounterContext';

function App() {
      //useState 
    let countSate =useState(1);  // [count, SetCount] 
    
      // let [count, SetCount] = useState(30);

  return (

    <div >
      <header className="header">
      
        <CounterContext.Provider value={countSate}>

          <div>
            <Parent  />
          </div>

        </CounterContext.Provider>
      </header>
    </div>
  );
}

export default App;
//