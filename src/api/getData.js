import axios from "axios";
export const fetchCoin = async (page = 1) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=${20}&page=${page}&sparkline=false`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching coin data:", error.message);
    throw error;
  }
};
