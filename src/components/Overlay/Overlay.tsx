import { FC } from 'react';
import './Overlay.scss';

export const Overlay: FC<Props> = ({ className = '', children = undefined }) => {
    return (
        <div className={`overlay ${className}`}>
            {children}
        </div>
    );
}

interface Props {
    className?: string,
    children?: JSX.Element | JSX.Element[]
}