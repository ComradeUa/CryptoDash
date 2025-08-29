import type { CoinDetailsResponse } from '@/types/coin';
import  { type FC } from 'react';



type Props = {
    details: CoinDetailsResponse
}

const CoinDescription:FC<Props> = ({details}) => {
    return (
        <section className="mt-6 prose max-w-none">
        <h2 className="text-lg font-medium">About</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: (details.description.en || "")
              .split(". ").slice(0, 3).join(". ")
          }}
        />
      </section>
    );
}

export default CoinDescription;
