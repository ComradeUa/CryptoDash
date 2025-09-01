import { useFavorites } from '@/hooks/useFavorites';
import { useCallback, useMemo, type FC } from 'react';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useFetch } from '@/hooks/useFetch';
import CryptoRowSkeleton from '@/components/CryptoRowSkeleton';
import CryptoRow from '@/components/CryptoRow';
const Favorites: FC = () => {
  const { favorites, toggleFavorite } = useFavorites();
  const memoToggleFavorite = useCallback(toggleFavorite, [toggleFavorite]);
  const { data, loading } = useFetch();

  const favoritesCrypto = useMemo(() => {
    if (!data) return [];
    return data.filter((crypto) => favorites.includes(crypto.id));
  }, [data, favorites]);

  return (
    <div className='mt-5 w-full px-2'>
      <div className='flex justify-center w-full'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-ubuntu flex items-center gap-2 w-full justify-center text-center'>Favorites Coins here:</h1>
      </div>
      <div className="mt-5 overflow-x-auto max-w-6xl mx-auto w-full">
      <Table className="min-w-[400px] w-full border rounded-xl shadow-sm text-xs sm:text-sm md:text-base">
        <TableHeader>
          <TableRow>
            <TableHead className="w-40 sm:w-64">Name</TableHead>
            <TableHead className="w-20 sm:w-32 text-right">Price</TableHead>
            <TableHead className="w-16 sm:w-28 text-right">24h %</TableHead>
            <TableHead className="w-24 sm:w-40 text-right">Market Cap</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading
            ? 
              [...Array(5)].map((_, index) => (
               <CryptoRowSkeleton key={index}/>
              ))
            : 
              favoritesCrypto?.map((crypto) => (
                <CryptoRow crypto={crypto} key={crypto.id} isFavorite={favorites.includes(crypto.id)} toggleFavorite={memoToggleFavorite}/>
              ))}
        </TableBody>
      </Table>
    </div>
    </div>
  );
};

export default Favorites;
