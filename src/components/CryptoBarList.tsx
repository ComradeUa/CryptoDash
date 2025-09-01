import { useFetch } from '@/hooks/useFetch';
import { type FC } from 'react';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { CryptoBarProps } from '@/types/coin';
import { useFavorites } from '../hooks/useFavorites';
import { useCallback } from 'react';
import CryptoRowSkeleton from './CryptoRowSkeleton';
import CryptoRow from './CryptoRow';

const CryptoBarList: FC<CryptoBarProps> = ({ coins }) => {
  const { loading } = useFetch();
  const {favorites, toggleFavorite} = useFavorites();
  const memoToggleFavorite = useCallback(toggleFavorite, [toggleFavorite]);
  return (
    <div className="mt-5 overflow-x-auto max-w-6xl mx-auto">
      <Table className="table-fixed w-full border rounded-xl shadow-sm">
        <TableHeader>
          <TableRow>
            <TableHead className="w-64">Name</TableHead>
            <TableHead className="w-32 text-right">Price</TableHead>
            <TableHead className="w-28 text-right">24h %</TableHead>
            <TableHead className="w-40 text-right">Market Cap</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading
            ? 
              [...Array(5)].map((_, index) => (
                <CryptoRowSkeleton key={index}/>
              ))
            : 
              coins?.map((crypto) => (
                <CryptoRow
                    key={crypto.id}
                    crypto={crypto}
                    isFavorite={favorites?.includes(crypto.id)}
                    toggleFavorite={memoToggleFavorite}
                    />
              ))
            }
        </TableBody>
      </Table>
    </div>
  );
};

export default CryptoBarList;
