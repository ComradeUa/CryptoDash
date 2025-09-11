import type { Coin, CoinDetailsResponse } from "../types/coin";
import axios from "axios";
import { type MarketChartPoint } from "../types/coin";

export  const fetchCrypto = async(): Promise<Coin[]> => {
    try{
        const response = await axios.get<Coin[]>(
            'https://api.coingecko.com/api/v3/coins/markets',
            {
                params: {
                    vs_currency: 'usd',
                    per_page: 30,
                    order: "market_cap_desc"
                },
                headers:{
                    'x-cg-demo-api-key': process.env.TOKEN
                }
            }
        );
        return response.data;
    }catch(e){
        console.log(e);
        throw e;
    }
} 
export const fetchCoinDetails = async (id: string): Promise<CoinDetailsResponse> => {
  try {
    const response = await axios.get<CoinDetailsResponse>(
      `https://api.coingecko.com/api/v3/coins/${id}`, 
      {
        headers: {
          'x-cg-demo-api-key':  process.env.TOKEN
        }
      }
    );
    return response.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
}


export const fetchCoin7Days = async (id: string): Promise<MarketChartPoint[]> => {
  try {
    const response = await axios.get<{ prices: MarketChartPoint[] }>(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart`,
      {
        params: {
          vs_currency: "usd",
          days: 7
        }
      }
    );
    return response.data.prices;
  } catch (e) {
    console.log(e);
    throw e;
  }
}
