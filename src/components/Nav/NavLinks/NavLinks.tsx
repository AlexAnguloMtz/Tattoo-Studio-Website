import { NavLink } from '../NavLink/NavLink';
import './NavLinks.scss';

export const NavLinks: React.FC<Props> = ({ isVisible }) => {
    return (
        <ul className={`nav__links ${isVisible ? ' visible' : ''}`}>
            {links.map(renderLink)}
        </ul>);
}

const links: string[] = [
    'Inicio',
    'Galería',
    'Artista',
    'Contacto'
];

interface Props {
    isVisible: boolean
}

const renderLink = (link: string): JSX.Element => {
    return <NavLink key={link} text={link} />;
}
