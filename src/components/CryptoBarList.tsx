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
    <div className="mt-5 max-w-6xl mx-auto px-2">
      <Table className="w-full border rounded-xl shadow-sm text-xs sm:text-sm md:text-base">
        <TableHeader>
          <TableRow>
            <TableHead className="w-auto min-w-0 sm:w-64">Name</TableHead>
            <TableHead className="text-right w-auto min-w-0 sm:w-32">Price</TableHead>
            <TableHead className="text-right w-auto min-w-0 sm:w-28">24h %</TableHead>
            <TableHead className="text-right w-auto min-w-0 sm:w-40">Market Cap</TableHead>
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
