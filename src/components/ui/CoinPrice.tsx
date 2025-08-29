import type { CoinDetailsResponse } from '@/types/coin';
import  { type FC } from 'react';

type Props = {
  details: CoinDetailsResponse;
};
const CoinPrice: FC<Props> = ({details}) => {
  return (
    <section className="mt-3">
      <p className="text-xl tabular-nums">
        Current price:{' '}
        <span className="font-semibold">
          ${details.market_data.current_price.usd.toLocaleString()}
        </span>
      </p>
    </section>
  );
};

export default CoinPrice;
