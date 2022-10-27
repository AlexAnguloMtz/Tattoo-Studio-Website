import { FC } from "react";
import { Button } from "../Button/Button";
import './ArrowButton.scss';

export const ArrowButton: FC<Props> = ({ onClick, className = '' }) => {
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