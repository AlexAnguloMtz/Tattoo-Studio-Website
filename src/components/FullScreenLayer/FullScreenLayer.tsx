import { FC } from 'react';
import './FullScreenLayer.scss';

export const FullScreenLayer: FC<Props> = ({ children, className = '' }) => {
    return (
        <div className={`full-screen-layer ${className}`}>
            <h1>
                {children}
            </h1>
        </div>
    );
}

interface Props {
    children: JSX.Element,
    className?: string
}