// import logo from './logo.svg';
// import './App.css';
// import React, { useState } from 'react';


// function App() {
//   const [num, setCount] = useState(4)
//   const [theme, setTheme] = useState('blue')

//   function decrementCount() {
//     setCount(prev => (
//       prev - 1
//     ))
//   }

//   function incrementCount() {
//     setCount(prev => (
//       prev + 1 
//     ))
//   }
  
//   return (
//     <div>
//       {/* <button onClick={() => setCount(prev => prev - 1)}>-</button> */}
//       <button onClick={decrementCount}>-</button>
//       <span>{num}</span>
//       <span>{theme}</span>
//       {/* <button onClick={() => setCount(prev => prev + 1)}>+</button> */}
//       <button onClick={incrementCount}>+</button>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import HookCounter from './components/functionCounter'
import HookCounter2 from './components/HookCounter2'

function App() {
  return (
    <>
      {/* <HookCounter /> */}
      <HookCounter2 />
    </>
  )
}

export default App;


