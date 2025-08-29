import  { type FC } from 'react';
import { useParams } from 'react-router';
import BackLink from '@/components/ui/BackLink';
import CoinHeader from '@/components/ui/CoinHeader';
import CoinPrice from '@/components/ui/CoinPrice';
import PriceCharts from '@/components/ui/PriceCharts';
import CoinDescription from '@/components/ui/CoinDescription';
import { useCoinDetails } from '@/hooks/useCoinDetails';
import CoinDetailsLoading from '@/pages/CoinDetailsLoading';
import CoinDetailsError from '@/pages/CoinDetailsErr';
export type ChartItem = { t: string; p: number };

 const CoinDetails:FC = () => {
  const { id } = useParams<{ id: string }>();
  const {details,err,chart,loading} = useCoinDetails(id);

  if (loading) return <CoinDetailsLoading />;
  if (err || !details) return <CoinDetailsError message={err ?? "Unknown error"} />;
  return (
    <div className="max-w-5xl mx-auto p-4">
      <BackLink/>

      <CoinHeader details={details}/>

      <CoinPrice details={details}/>

      <section className="mt-6">
        <h2 className="text-lg font-medium mb-2">Price (7 days)</h2>
        <PriceCharts data={chart}/>
      </section>

      <CoinDescription details={details}/>
    </div>
  );
}
export default CoinDetails;
