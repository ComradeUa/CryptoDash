import BackLink from '../components/BackLink'

type Props = {
  message?: string;
};

const CoinDetailsError: React.FC<Props> = ({ message }) => (
  <div className="max-w-5xl mx-auto p-4 w-full px-2">
    <BackLink/>
    <p className="mt-4 text-red-600">Error: {message}</p>
  </div>
);
export default CoinDetailsError;