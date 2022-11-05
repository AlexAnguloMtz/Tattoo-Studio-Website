import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import './LinkIconCard.scss';

export const LinkIconCard: FC<Props> = ({
    url,
    icon,
    text,
    className = ''
}) => {
    return (
        <a
            className={`link-icon-card ${className}`}
            href={url}
        >
            <FontAwesomeIcon
                className={'link-icon-card__icon'}
                icon={icon}
            />
            {text}
        </a>
    );
}

interface Props {
    url: string,
    icon: IconProp,
    text: string,
    className?: string,
}