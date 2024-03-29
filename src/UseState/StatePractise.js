
import React, { useState } from 'react'

const StatePractise = () => {

const[counter, setCounter] = useState(0);

const decrement = () =>
{
    setCounter(counter - 1);
}

const increment = () =>
{
    setCounter(counter + 1);
}

  return (
   <div>
   <h3>useState Examples</h3>
    {counter}<button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
   </div>
  )
}

export default StatePractise