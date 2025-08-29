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
    <div className='mt-8 flex justify-center gap-2'>
      <div className="w-full max-w-sm ">
        <Input
          type="text"
          value={text}
          placeholder="Write name of cryptocurrency..."
          onChange={handleOnChange}></Input>
      </div>
      <Link to="/favorites"><Button variant='outline'>Favorites Coins</Button></Link>
    </div>
     <CryptoBarList coins={filtredCoins}/>
     </>
  );
};

export default SearchBar;
