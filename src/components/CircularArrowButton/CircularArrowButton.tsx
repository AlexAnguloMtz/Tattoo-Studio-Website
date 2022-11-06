import { FC } from "react";
import { Button } from "../Button/Button";
import './CircularArrowButton.scss';

export const CircularArrowButton: FC<Props> = ({ onClick, className = '' }) => {
    return (
        <Button
            className={`arrow-button ${className}`}
            onClick={onClick} />
    );
}

interface Props {
    onClick: () => void,
    className?: string
}