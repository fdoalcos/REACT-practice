import React, { useState } from 'react';



function HookCounter() {
    // function incrementCount() {
    //     setCount(prev => (
    //         prev + 1
    //     ))
    // }

    const [count, setCount] = useState(0);


    return (
        <div>
            <button onClick={() => setCount(count + 1) }>Count {count}</button>
        </div>
    )
}

export default HookCounter;