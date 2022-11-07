import { FC } from 'react';
import { useContactData } from '../../context/contact-info-context';
import { Address } from '../../data/contact-info';

export const Map: FC<Props> = ({ className, gmapsApiKey }) => {

    const { latitude, longitude }: Address = useContactData().address;

    const URL: string = `https://www.google.com/maps/embed/v1/search?q=${latitude}%2C%20${longitude}&key=${gmapsApiKey}`;

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