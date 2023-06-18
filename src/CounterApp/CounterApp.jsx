import React, { useState } from 'react'
import './CounterApp.css';

export default function CounterApp() {

    let [count,setCount] = useState(0)

    function handleReset()
    {
        setCount(0);
    }

  return (
    <>
    <div className='counterMain'>
        <h1>Counter App</h1> 
        <div className='counter'>
            <h2>{count}</h2>
            <div className='setResetBtns'>
                <button className='incrementBtn' onClick={()=>setCount(count + 1)}>Increment</button>
                <button className='decrementBtn' onClick={()=>setCount(count -1)}>Decrement</button>
            </div>
            <button className='resetBtn' onClick={handleReset}>Reset Data</button>
        </div>
    </div>
    </>
  )
}
