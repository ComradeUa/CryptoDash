import type { CryptoRowProps } from '@/types/coin';
import { type FC } from 'react';
import { TableRow, TableCell } from './ui/table';
import { Button } from './ui/button';
import { Link } from 'react-router';
const CryptoRow:FC<CryptoRowProps> = ({crypto, isFavorite, toggleFavorite}) => {
    return (
      <TableRow>
                  <TableCell className="font-medium">
                    <span className="flex items-center gap-2">
                      <Button
                        onClick={() => toggleFavorite(crypto.id)}
                        variant="outline"
                        className="px-2 py-1"
                      >
                        {isFavorite ? '⭐' : '☆'}
                      </Button>
                      <span className="truncate max-w-[120px]">
                        <Link to={`/coin/:${crypto.id}`} title={crypto.name} >
                        {crypto.name}
                        </Link>
                        </span>
                      <img src={crypto.image} alt={crypto.name} className="w-5 h-5" />
                    </span>
                  </TableCell>

                  <TableCell className="text-right tabular-nums">{crypto.current_price}$</TableCell>

                  <TableCell
                    className={`text-right tabular-nums ${
                      crypto.price_change_percentage_24h > 0 ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {crypto.price_change_percentage_24h.toFixed(2)}%
                  </TableCell>

                  <TableCell className="text-right tabular-nums">
                    {crypto.market_cap.toLocaleString()}
                  </TableCell>
                </TableRow>
    );
}

export default CryptoRow;
