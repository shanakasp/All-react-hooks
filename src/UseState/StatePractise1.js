
import React, {useState} from 'react'

const StatePractise1 = () => {

    const[inputValue, setInputValue] = useState("Hello");

    let onChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
    };


      return (
  <div>
    <input placeholder='Enter Something...' onChange={onChange} />
    {inputValue}
  </div>
  )
}

export default StatePractise1