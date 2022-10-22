import { FC, useState } from 'react';
import { Hamburguer } from '../Hamburguer/Hamburguer';
import { Logo } from '../Logo/Logo';
import './Nav.scss'
import { ILink, NavLinks } from './NavLinks/NavLinks';

export const Nav: FC<Props> = ({ links }) => {

    const [areLinksVisible, setLinksVisible] = useState(false);

    const toggleLinks = () => setLinksVisible(!areLinksVisible);

    return (
        <nav className="nav">
            <Logo />
            <Hamburguer onClick={toggleLinks} />
            <NavLinks links={links} isVisible={areLinksVisible} />
        </nav>
    );
}

interface Props {
    links: ILink[]
}