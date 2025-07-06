import React, { useState, useEffect } from 'react';

const V12_FetchdataAPI = () => {
  const [apidata, setDataapi] = useState([]);

  useEffect(() => {
    const Fetachadatapi = async () => {
      try {
        const api = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await api.json();
        setDataapi(data);
        console.log("My data", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    Fetachadatapi();
  }, []);

  return (
    <div style={{
        backgroundColor:'pink',
        margin:'10px',
        padding:'0px',
        border:'2px solid black'
    }}>
      {apidata ? (
        <div>
          <h3>Title: {apidata.title}</h3>
          <p>ID: {apidata.id}</p>
          <p>Completed: {apidata.completed ? "Yes" : "No"}</p>
        </div>
      ) : (
        <h4>Loading...</h4>
      )}
    </div>
  );
};

export default V12_FetchdataAPI;
