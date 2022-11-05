import { FC } from 'react';

export const Map: FC<Props> = ({ className, gmapsApiKey }) => {

    const URL: string = `https://www.google.com/maps/embed/v1/search?q=29.083785170425852%2C%20-110.9831964155967&key=${gmapsApiKey}`;

    return (
        <iframe
            className={className}
            loading="lazy"
            src={URL}>
        </iframe>
    );
}

interface Props {
    className: string
    gmapsApiKey: string
}