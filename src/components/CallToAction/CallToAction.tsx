import { FC } from "react";
import { LinkAdapter } from "../LinkAdapter/LinkAdapter";
import './CallToAction.scss';

export const CallToAction: FC<Props> = ({
    to = '',
    text,
    className,
    size }) => {
    return (
        <LinkAdapter
            to={to}
            className={`call-to-action ${size} ${className}`}
        >
            {text}
        </LinkAdapter>
    );
}

interface Props {
    text: string,
    to?: string,
    href?: string,
    className?: string
    size?: 'small' | 'regular'
}