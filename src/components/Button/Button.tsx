import { ReactNode } from 'react';
import './Button.scss'

export const Button: React.FC<Props> = ({ children = '', className, onClick }) => {
    return (
        <button
            className={`button ${className}`}
            onClick={onClick}>
            {children}
        </button>
    );
}

interface Props {
    children?: string | ReactNode,
    className: string,
    onClick: () => void
}