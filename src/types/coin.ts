export type Coin = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
};
export type CryptoBarProps = {
  coins: Coin[];
};
export type CryptoRowProps = {
  crypto: {
    id: string;
    name: string;
    image: string;
    current_price: number;
    price_change_percentage_24h: number;
    market_cap: number;
  };
  isFavorite: boolean;
  toggleFavorite: (id: string) => void;
};
export type CoinDetailsResponse = {
  id: string;
  name: string;
  symbol: string;
  image: { small: string; large: string };
  description: { en: string };
  market_data: { current_price: { usd: number } };
};
export type MarketChartPoint = [number, number];