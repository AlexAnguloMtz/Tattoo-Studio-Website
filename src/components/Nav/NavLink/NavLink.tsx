import { FC } from "react"
import { Link } from 'react-router-dom'
import './NavLink.scss';

export const NavLink: FC<Props> = ({ link, onClick }) => {
    return (
        <li key={link.path} className="nav__li">
            <Link
                onClick={onClick}
                className="nav__link" to={link.path}>{link.text}</Link>
        </li>
    );
}

export interface ILink {
    path: string,
    text: string,
    element: JSX.Element
}

interface Props {
    link: ILink,
    onClick: () => void
}

