import React, { useRef } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const buttonRef = useRef(null);

  return (
    <div>
    <h4>useImperativeHandle Example</h4>
      <button onClick={() => buttonRef.current.alterToggle()}>Button from Parent</button>
      <ChildComponent ref={buttonRef} />
    </div>
  );
}

export default ParentComponent;
