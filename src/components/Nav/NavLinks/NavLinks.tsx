import './NavLinks.scss';
import { ILink, NavLink } from '../NavLink/NavLink';

export const NavLinks: React.FC<Props> = ({ isVisible, links, onLinkClick }) => {
    return (
        <ul className={`nav__links ${isVisible ? ' visible' : ''}`}>
            {links.map(link => <NavLink onClick={onLinkClick} link={link}></NavLink>)}
        </ul>
    );
}

interface Props {
    isVisible: boolean,
    links: ILink[],
    onLinkClick: () => void
}