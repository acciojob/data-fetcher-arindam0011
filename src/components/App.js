  import React, { useEffect, useState } from "react";
  import './../styles/App.css';
  import 'regenerator-runtime/runtime';

  const DataFetcher = () => {
    const [apiData, setApiData] = useState();
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://dummyjson.com/products');
          
          const data = await response.json();
          if (data && data.products && data.products.length > 0) {
            setApiData(data.products);
          } else {
            setApiData([]);
          }
        } catch (error) {
          setError('An error occurred: ' + error.message);
          setApiData([]);
        }
      };
      fetchData();
    }, []);

    if (error) {
      return <h1>{'No data found'}</h1>;
    }


    return (
      <div id="main">
        {apiData?  (
          <>
            <h1 id="header">Data Fetched from API</h1>
            <pre id="output">{JSON.stringify(apiData, null, 2)|| apiData}</pre>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  };

  export default DataFetcher;
