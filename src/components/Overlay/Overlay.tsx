import { FC } from 'react';
import './Overlay.scss';

export const Overlay: FC<Props> = ({
    className = '',
    children = undefined,
    opacity = 0.5,
    gap = ''
}) => {
    return (
        <div
            className={`overlay ${className}`}
            style={{
                backgroundColor: `rgba(0, 0, 0, ${opacity})`,
                gap: gap
            }}>
            {children}
        </div >
    );
}

interface Props {
    className?: string,
    children?: JSX.Element | JSX.Element[],
    opacity?: number,
    gap?: string
}