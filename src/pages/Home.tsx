import { type FC } from 'react';
import type { IHomeProps } from '../types/homeProps';
const Home: FC<IHomeProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex justify-center items-start sm:items-center px-2">
      <div className='mt-8 w-full max-w-4xl'>{children}</div>
    </div>
  );
};

export default Home;
