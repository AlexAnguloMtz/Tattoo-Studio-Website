import { FC } from "react";
import { Link } from "react-router-dom";
import './CardLink.scss';

const linkClass: string = 'card-link__link';

export const CardLink: FC<Props> = ({ className, text, href, anchor = false, containerClassName = '' }) => {

    return (
        <div
            className={`card-link ${containerClassName}`}>
            <div className={`card-link__background ${className}`}>
                {linkFor(anchor, text, href)}
            </div>
        </div>
    );
}

interface Props {
    text: string,
    href: string,
    containerClassName?: string,
    anchor?: boolean,
    className?: string
}

const linkFor = (isAnchor: boolean, text: string, href: string) => {

    if (isAnchor) {
        return (
            <a className={linkClass}
                href={href}
            >
                {text}
            </a>
        );
    }

    return (
        <Link
            className={linkClass}
            to={href}
        >
            {text}
        </Link>);
}