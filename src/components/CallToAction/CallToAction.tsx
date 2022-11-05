import { FC } from "react";
import { Link } from 'react-router-dom'
import './CallToAction.scss';

export const CallToAction: FC<Props> = ({ to = '', text, className }) => {
    return (
        <Link
            to={to}
            className={`call-to-action ${className}`}
        >
            {text}
        </Link>
    );
}

interface Props {
    text: string,
    to?: string,
    href?: string,
    className?: string
}

