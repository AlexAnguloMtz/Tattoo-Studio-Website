import { FC, useState } from 'react';
import { Hamburguer } from '../Hamburguer/Hamburguer';
import { Logo } from '../Logo/Logo';
import './Nav.scss'
import { NavLinks } from './NavLinks/NavLinks';

export const Nav = () => {

    const [areLinksVisible, setLinksVisible] = useState(false);

    const toggleLinks = () => setLinksVisible(!areLinksVisible);

    return (
        <nav className="nav">
            <Logo />
            <Hamburguer onClick={toggleLinks} />
            <NavLinks isVisible={areLinksVisible} />
        </nav>
    );
}