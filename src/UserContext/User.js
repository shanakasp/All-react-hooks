import React, {useContext} from 'react'
import { AppContext } from './ContextPractise'

function User() {
    const { username } = useContext(AppContext);
  
    return (
      <div>
        <h2>User Component</h2>
        <p>Username: {username}</p>
        <button onClick={() => setUsername('John')}>Set Username to John</button>
      </div>
    );
  }
  
  export default User;
  