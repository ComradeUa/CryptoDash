import { type FC } from 'react';
import { TableRow,TableCell } from './ui/table';
import { Skeleton } from './ui/skeleton';
const CryptoRowSkeleton:FC = () => {
    return (
            <TableRow>
                  <TableCell>
                    <Skeleton className="h-6 w-32" />
                  </TableCell>
                  <TableCell className="text-right">
                    <Skeleton className="h-6 w-20 ml-auto" />
                  </TableCell>
                  <TableCell className="text-right">
                    <Skeleton className="h-6 w-16 ml-auto" />
                  </TableCell>
                  <TableCell className="text-right">
                    <Skeleton className="h-6 w-24 ml-auto" />
                  </TableCell>
                </TableRow>
    );
}

export default CryptoRowSkeleton;
