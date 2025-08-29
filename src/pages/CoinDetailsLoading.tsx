import { type FC } from 'react';
import BackLink from '../components/ui/BackLink';
const CoinDetailsLoading: FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <BackLink/>
      <div className="h-64 mt-6 animate-pulse rounded-xl bg-gray-100" />
    </div>
  );
};

export default CoinDetailsLoading;
