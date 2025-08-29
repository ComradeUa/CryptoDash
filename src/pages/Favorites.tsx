import { useFavorites } from '@/hooks/useFavorites';
import { type FC } from 'react';
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
  const { data, loading } = useFetch();

  const favoritesCrypto = data?.filter((crypto) => favorites.includes(crypto.id));
  return (
    <div className='mt-5'>
      <div className='flex justify-center'>
        <h1 className='text-5xl font-ubuntu flex items-center gap-2'>Favorites Coins here:</h1>
      </div>
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
              favoritesCrypto?.map((crypto, index) => (
                <CryptoRow crypto={crypto} key={index} isFavorite={favorites.includes(crypto.id)} toggleFavorite={toggleFavorite}/>
              ))}
        </TableBody>
      </Table>
    </div>
    </div>
  );
};

export default Favorites;
