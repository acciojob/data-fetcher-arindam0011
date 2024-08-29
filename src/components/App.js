import React, { useEffect, useState } from "react";
import './../styles/App.css';
import 'regenerator-runtime/runtime';

const DataFetcher = () => {
  const [apiData, setApiData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        if (data && data.products && data.products.length > 0) {
          setApiData(data.products);
        } else {
          setApiData([]); // No data found
        }
      } catch (error) {
        setError('An error occurred: ' + error.message);
        setApiData([]);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <h4>{error}</h4>;
  }

  if (apiData.length === 0 && !error) {
    return <h4>No data found</h4>;
  }

  return (
    <div id="main">
      <h1 id="header">Data Fetched from API</h1>
      <pre id="output">{JSON.stringify(apiData, null, 2)}</pre>
    </div>
  );
};

export default DataFetcher;
