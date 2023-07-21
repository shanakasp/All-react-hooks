import React, { useState, useMemo } from 'react';

function ExpensiveComputation({ number }) {
  console.log('Expensive computation...');
  // Some expensive computation based on the number
  return number * 2;
}

function MemoExample() {
  const [count, setCount] = useState(1);

  // Use useMemo to memoize the result of the expensive computation
  const doubledNumber = useMemo(() => {
    return ExpensiveComputation(count);
  }, [count]);

  return (
    <div>
      <h2>Memo Example</h2>
      <p>Count: {count}</p>
      <p>Doubled Number: {doubledNumber}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
    </div>
  );
}

export default MemoExample;
