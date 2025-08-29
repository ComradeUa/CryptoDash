import { Bitcoin } from 'lucide-react';
import { type FC } from 'react';
const Logo:FC = () => {
    return (
        <div className='flex justify-center'>
          <h1 className='text-6xl font-ubuntu flex items-center gap-2 '>CryptoDash <Bitcoin size={48} /></h1>
        </div>
    );
}

export default Logo;
