// src/context/CoinContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CoinContext = createContext();

export const useCoins = () => {
  return useContext(CoinContext);
};

export const CoinProvider = ({ children }) => {

  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=200&page=1&sparkline=false`)
      .then((response) => {
        setCoins(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('ERROR>>>', error.message);
        setLoading(false);
      });
  }, [page]);

  return (
    <CoinContext.Provider value={{ coins, loading, setCoins, page, setPage }}>
      {children}
    </CoinContext.Provider>
  );
};
