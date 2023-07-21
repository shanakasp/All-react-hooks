import React, { forwardRef, useImperativeHandle, useState } from 'react';

function ChildComponent() {
  const [toggle, setToggle] = useState(false);

  const Button = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
      alterToggle() {
        setToggle((prevToggle) => !prevToggle);
      },
    }));

    return (
      <button onClick={() => setToggle((prevToggle) => !prevToggle)}>
        Button from ChildComponent
      </button>
    );
  });

  return (
    <div>
      <Button />
      {toggle && <span>Toggle</span>}
    </div>
  );
}

export default ChildComponent;
