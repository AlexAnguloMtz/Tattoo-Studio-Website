import './NavLinks.scss';
import './NavLink.scss';
import { Link } from "react-router-dom";

export const NavLinks: React.FC<Props> = ({ isVisible, links }) => {
    return (
        <ul className={`nav__links ${isVisible ? ' visible' : ''}`}>
            {links.map(link => renderLink(link.path, link.text))}
        </ul>);
}

export interface ILink {
    path: string,
    text: string,
    element: JSX.Element
}

interface Props {
    isVisible: boolean,
    links: ILink[]
}

const renderLink = (path: string, text: string): JSX.Element => {
    return (
        <li className='nav__li ' key={text}>
            <Link className='nav__link ' to={path}>{text}</Link>
        </li>);
}
