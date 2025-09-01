import { Bitcoin } from 'lucide-react';
import { type FC } from 'react';
const Logo:FC = () => {
    return (
        <div className='flex justify-center w-full'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-ubuntu flex items-center gap-2 break-words w-full justify-center text-center'>
            CryptoDash <Bitcoin size={32} className="sm:w-10 sm:h-10 w-8 h-8" />
          </h1>
        </div>
    );
}

export default Logo;
