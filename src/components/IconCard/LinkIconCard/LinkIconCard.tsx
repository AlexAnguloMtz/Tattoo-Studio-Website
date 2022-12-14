import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import './LinkIconCard.scss';

export const LinkIconCard: FC<Props> = ({
    url,
    icon,
    text,
    gradient = '',
    className = ''
}) => {

    if (!gradient) {
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

    return (
        <>
            <a
                style={{ background: gradient }}
                className={`link-icon-card gradient ${className}`}
                href={url}
            >
                <div
                    className="overlay-for-gradient-animation">
                    <FontAwesomeIcon
                        className={'link-icon-card__icon'}
                        icon={icon}
                    />
                    {text}
                </div>
            </a>
        </>
    );

}

interface Props {
    url: string,
    icon: IconProp,
    text: string,
    gradient?: string,
    className?: string,
}