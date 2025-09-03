import type { ChartItem } from '@/pages/CoinDetails';
import { type FC } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
type Props = {
  data: ChartItem[];
};

const PriceCharts: FC<Props> = ({ data }) => {
  return (
    <div className="h-72 w-full rounded-xl border">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 12, left: 0, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="t" tickMargin={8} />
          <YAxis tickMargin={8} domain={['auto', 'auto']} />
          <Tooltip />ß
          <Line type="monotone" dataKey="p" dot={false} stroke="#2563eb" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceCharts;
