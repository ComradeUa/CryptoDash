import { useState,useEffect } from "react";
import { type CoinDetailsResponse } from "@/types/coin";
import { type ChartItem } from "@/pages/CoinDetails";
import { fetchCoinDetails, fetchCoin7Days } from "@/api";
export const useCoinDetails = (id?: string) => {
  const cleanId = id?.replace(/^:/, '').trim();
  const [details, setDetails] = useState<CoinDetailsResponse | null>(null);
  const [chart, setChart] = useState<ChartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    if (!cleanId) return;

    (async () => {
      try {
        setLoading(true);
        const [d, points] = await Promise.all([
          fetchCoinDetails(cleanId),
          fetchCoin7Days(cleanId),
        ]);

        setDetails(d);
        setChart(points.map(([ts, price]) => ({
          t: new Date(ts).toLocaleDateString(undefined, { month: "short", day: "numeric" }),
          p: Number(price.toFixed(2)),
        })));
      } catch (e: any) {
        setErr(e?.message ?? "Failed to load");
      } finally {
        setLoading(false);
      }
    })();
  }, [cleanId]);

  return { details, chart, loading, err };
}