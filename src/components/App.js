
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import 'regenerator-runtime/runtime';
const App = () => {
  const[apiData, setApiData] = useState([]);
  useEffect(() => {
    const fetchData = async ()=>{
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setApiData([data]);
    }
    fetchData();
    }, []);
  return (
    <div id="main">
      <pre id="output">{JSON.stringify(apiData, null, 2)}</pre>
    </div>
  )
}

export default App
