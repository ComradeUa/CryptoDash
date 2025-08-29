import { type FC } from 'react';
import type { IHomeProps } from '../types/homeProps';
const Home: FC<IHomeProps> = ({ children }) => {
  return (
    <div className="h-screen w-[100%] flex justify-center">
      <div className='mt-8'>
        {children}
        </div>
    </div>
  );
};

export default Home;
