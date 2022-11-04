import { FC } from 'react';
import './Map.scss';

export const Map: FC<Props> = ({ gmapsApiKey }) => {

    const URL: string = `https://www.google.com/maps/embed/v1/search?q=29.083785170425852%2C%20-110.9831964155967&key=${gmapsApiKey}`;

    return (
        <iframe
            className='map'
            loading="lazy"
            src={URL}>
        </iframe>
    );
}

interface Props {
    gmapsApiKey: string
}