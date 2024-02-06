import axios from 'axios';
import React, { useState, createContext, useContext, useEffect } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const [trending, setTrending] = useState([]);

  const url = `${BASE_URL}3/trending/movie/day?language=pl-PL`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWNlODk4Njg1Y2Y3Y2YzYWU4OWE5YjY4NDBlNjU1OCIsInN1YiI6IjY1YzEzNDI1MDMxZGViMDE4M2YzYTUwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z0M1Gt0gZ7sp1cqOFs9beKTDiVHIn15JzYaDT_F6w7M',
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(url, options);
        const data = response.data;
        setTrending(data.results);
        console.log(data.results);
      } catch (error) {
        console.error('error:' + error);
      }
    };

    if (trending.length < 1) {
      fetchData();
    }
  }, [trending, options]);
  const appValue = {
    query,
    trending,
  };

  return <AppContext.Provider value={appValue}>{children}</AppContext.Provider>;
};
