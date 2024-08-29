import React, { useEffect, useState } from "react";
import './../styles/App.css';
import 'regenerator-runtime/runtime';

const App = () => {
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setApiData(data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="main">
      {isLoading ? (
        <h4>Loading...</h4>
      ) : error ? (
        <h4>Error: {error}</h4>
      ) : (
        <>
          <h1 id="header">Data Fetched from API</h1>
          <pre id="output">{JSON.stringify(apiData, null, 2)}</pre>
        </>
      )}
    </div>
  );
};

export default App;
