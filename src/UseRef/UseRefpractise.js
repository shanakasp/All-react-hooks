import React, { useRef } from 'react';

function UseRefpractise() {
  const inputRef = useRef(null);

  const onClick = () => {
    // Access the input value using inputRef.current.value
    const enteredText = inputRef.current.value;
    // Update the content of the div with the entered text
    document.getElementById('entered-text').textContent = `Entered text is: ${enteredText}`;
    // Clear the input field after showing the entered text
    inputRef.current.value = '';

    console.log('Entered text is: ', enteredText)
  };

  return (
    <div>
      <h4>UseRef Examples</h4>

      <div id="entered-text"></div>
     
      <input type="text" placeholder="Ex..." ref={inputRef} />
      
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}

export default UseRefpractise;