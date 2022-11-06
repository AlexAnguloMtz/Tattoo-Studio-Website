import { FC } from "react"
import { LinkAdapter } from "../../LinkAdapter/LinkAdapter";
import './NavLink.scss';

export const NavLink: FC<Props> = ({
    link,
    onClick,
    isSelected = false
}) => {
    return (
        <li key={link.path} className="nav__li">
            <LinkAdapter
                onClick={onClick}
                className={`nav__link ${isSelected ? ' selected' : ''}`}
                to={link.path}
            >
                {link.text}
            </LinkAdapter>
        </li>
    );
}

export interface ILink {
    path: string,
    text: string,
    element: JSX.Element,
}

interface Props {
    link: ILink,
    onClick: () => void,
    isSelected?: boolean
}

