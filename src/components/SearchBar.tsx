import React, { useEffect, useState, type FC } from 'react';
import { Input } from './ui/input';
import { useFetch } from '@/hooks/useFetch';
import type { Coin } from '@/types/coin';
import CryptoBarList from './CryptoBarList';
import { Button } from './ui/button';
import { Link } from 'react-router';
const SearchBar: FC = () => {
  const [text, setText] = useState<string>("");
  const [filtredCoins, setFiltredCoins] = useState<Coin[]>([]);
  const { data } = useFetch();

  
  useEffect(() => {
    if (!data) return;
    if (text.trim() === '') {
      setFiltredCoins(data);
    }
    const search = text.toLowerCase();
    setFiltredCoins(
      data.filter(
        (coin) =>
          coin.name.toLowerCase().includes(search) || coin.symbol.toLowerCase().includes(search),
      ),
    );
  }, [text, data]);


  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <>
    <div className='mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-2 items-center w-full px-2'>
      <div className="w-full max-w-sm flex-1">
        <Input
          type="text"
          value={text}
          placeholder="Write name of cryptocurrency..."
          onChange={handleOnChange}
        />
      </div>
      <Link to="/favorites" className="w-full sm:w-auto">
        <Button variant='outline' className="w-full sm:w-auto">Favorites Coins</Button>
      </Link>
    </div>
    <div className="mt-4 px-2">
      <CryptoBarList coins={filtredCoins}/>
    </div>
     </>
  );
};

export default SearchBar;
