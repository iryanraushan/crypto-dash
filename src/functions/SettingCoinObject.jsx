export const settingCoinObject = (data, setCoin) => {
  setCoin({
    id: data.id,
    name: data.name,
    symbol: data.symbol,
    image: data.image.large,
    desc: data.description.en,
    price_change_percentage_24h: data.market_data.price_change_percentage_24h,
    total_volume: data.market_data.total_volume.usd,
    current_price: data.market_data.current_price.usd,
    market_cap: data.market_data.market_cap.usd,
    categories: data.categories,
    last_updated: data.market_data.last_updated,
    watchlist_portfolio_users: data.watchlist_portfolio_users,
    market_cap_rank : data.market_cap_rank,
    blockchain_site : data.links.blockchain_site,
    homepage : data.links.homepage
  });
};