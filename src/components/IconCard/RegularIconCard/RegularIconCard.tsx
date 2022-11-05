import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import './RegularIconCard.scss';

export const RegularIconCard: FC<Props> = ({
    text,
    icon,
    gradient = '',
    className = ''
}) => {
    return (
        <div className={`regular-icon-card ${className}`}>
            <FontAwesomeIcon
                className="regular-icon-card__icon"
                icon={icon}
            />
            <h4 className="regular-icon-card__text">
                {text}
            </h4>
        </div>
    );
}

interface Props {
    text: string,
    icon: IconProp,
    gradient?: string,
    className?: string
}