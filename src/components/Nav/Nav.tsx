import { FC, useState } from 'react';
import { Hamburguer } from '../Hamburguer/Hamburguer';
import { Logo } from '../Logo/Logo';
import './Nav.scss'
import { ILink } from './NavLink/NavLink';
import { NavLinks } from './NavLinks/NavLinks';

export const Nav: FC<Props> = ({ links }) => {

    const [isNavVisible, setNavVisible] = useState(false);

    const toggleNav = () => setNavVisible(!isNavVisible);

    return (
        <nav className="nav">
            <Logo />
            <Hamburguer isCloseButton={isNavVisible} onClick={toggleNav} />
            <NavLinks
                onLinkClick={toggleNav}
                links={links}
                isVisible={isNavVisible} />
        </nav>
    );
}

interface Props {
    links: ILink[]
}