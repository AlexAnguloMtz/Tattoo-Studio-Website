import { FC } from "react";
import './Anchor.scss';

export const Anchor: FC<Props> = ({ children, href, underlined = false }) => {
    return (
        <a className={`anchor ${underlined ? ' underlined' : ''}`} href={href}>
            {children}
        </a>
    );
}

interface Props {
    href: string,
    children?: string,
    underlined?: boolean
}