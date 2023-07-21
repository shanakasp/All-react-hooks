import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UseEffectpractise() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const firstEmail = data[0].email;

  return (

    <div>
    <h3>UseEffect Examples</h3>
      <p>First Email: {firstEmail}</p>
    </div>
  );
}

export default UseEffectpractise;
