import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            className={`direction-button ${className}`}>
            <FontAwesomeIcon
                className={`direction-button__icon`}
                icon={direction === 'left' ? faChevronCircleLeft : faChevronCircleRight} />
        </button>
    );
}

interface Props {
    direction: 'left' | 'right',
    onClick: (e: React.MouseEvent) => void,
    className?: string
}