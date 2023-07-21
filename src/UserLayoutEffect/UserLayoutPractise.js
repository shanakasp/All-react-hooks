import React, { useState, useLayoutEffect, useRef } from 'react';

function UseLayoutPractise() {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  // useLayoutEffect runs synchronously after DOM mutations but before the browser repaints
  useLayoutEffect(() => {
    if (ref.current) {
      const newWidth = ref.current.getBoundingClientRect().width;
      setWidth(newWidth);
    }
  }, []);

  return (
    <div>
      <h4>useLayoutEffect Example</h4>
      <div ref={ref} style={{ border: '1px solid black', padding: '10px' }}>
        Resize me to see the width: {width}px
      </div>
    </div>
  );
}

export default UseLayoutPractise;
