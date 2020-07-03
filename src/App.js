import React, { useState, useEffect } from 'react';
import Header from './components/ui/Header';

import './App.css';
import Axios from 'axios';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await Axios(
        `https://www.breakingbadapi.com/api/characters`
      );

      console.log(result.data);
    };
    fetchItems();
  }, []);

  return (
    <div className="container">
      <Header />
    </div>
  );
};

export default App;
