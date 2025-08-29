import type { CoinDetailsResponse } from "@/types/coin";
import { type FC } from "react";
type Props = {
  details: CoinDetailsResponse;
};

const CoinHeader: FC<Props> = ({ details }) => (
  <header className="mt-4 flex items-center gap-4">
    <img src={details.image.small} alt={details.name} className="w-10 h-10" />
    <h1 className="text-2xl font-semibold">{details.name} ({details.symbol.toUpperCase()})</h1>
  </header>
);
export default CoinHeader;