
import React, { useState } from 'react'

const StatePractise = () => {

const[counter, setCounter] = useState(0);

const increment = () =>
{
    setCounter(counter + 1);
}

  return (
   <div>
    {counter}<button onClick={increment}>increment</button>
   </div>
  )
}

export default StatePractise