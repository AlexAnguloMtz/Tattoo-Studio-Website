import './NavLinks.scss';
import { ILink, NavLink } from '../NavLink/NavLink';

export const NavLinks: React.FC<Props> = ({
    isVisible,
    links,
    onLinkClick,
    selectedPath
}) => {
    return (
        <ul className={`nav__links ${isVisible ? ' visible' : ''}`}>
            {links.map(link => toLink(link, onLinkClick, selectedPath))}
        </ul>
    );
}

interface Props {
    isVisible: boolean,
    links: ILink[],
    onLinkClick: () => void,
    selectedPath: string
}

const toLink = (
    link: ILink,
    onClick: () => void,
    selectedPath: string
) => {
    return (
        <NavLink
            isSelected={selectedPath === link.path}
            onClick={onClick}
            link={link} />
    );
}