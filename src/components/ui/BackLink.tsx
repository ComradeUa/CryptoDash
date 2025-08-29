import { type FC } from 'react';
import { Link } from 'react-router';
const BackLink:FC = () => {
    return (
        <Link to="/" className="text-sm text-blue-600 hover:underline">← Back</Link>
    );
}

export default BackLink;
