import { useEffect, useState } from "react"
import { type Coin } from "../types/coin"
import { fetchCrypto } from "../api";

export const useFetch = () => {
    const [data,setData] = useState<Coin[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error,setError] = useState<unknown>(null);
    useEffect(() => {
       const fetchData = () => {
            setLoading(true);
            fetchCrypto()
                .then(setData)
                .catch(setError)
                .finally(() => setLoading(false));
        };
        fetchData();
        //const interval = setInterval(fetchData, 3000);
        //return () => clearInterval(interval);
    }, [])
    return {data, loading, error}
}