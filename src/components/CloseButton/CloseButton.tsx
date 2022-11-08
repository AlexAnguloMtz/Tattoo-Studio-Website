import React, { FC } from "react";
import './CloseButton.scss';

export const CloseButton: FC<Props> = ({ onClick, className = '' }) => {
    return (
        <button className={`close-button ${className}`}>

        </button>
    );
}

interface Props {
    onClick: (e: React.MouseEvent) => void,
    className?: string
}