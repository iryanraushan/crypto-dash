import axios from "axios";

export const getPrices = async (id, days, priceType) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
    );

    if (response.data) {
      if (priceType === "market_caps") {
        return response.data.market_caps;
      } else if (priceType === "total_volumes") {
        return response.data.total_volumes;
      } else {
        return response.data.prices;
      }
    }
  } catch (error) {
    console.error("Error fetching coin prices:", error.message);
    throw error; 
  }
};