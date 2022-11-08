import React, { FC } from "react"
import './DirectionButton.scss';

export const DirectionButton: FC<Props> = ({
    direction,
    onClick,
    className = ''
}) => {
    return (
        <button
            onClick={onClick}
            className={`direction-button ${direction} ${className}`}>
        </button>
    );
}

interface Props {
    direction: 'left' | 'right',
    onClick: (e: React.MouseEvent) => void,
    className?: string
}