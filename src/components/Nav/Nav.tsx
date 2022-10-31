import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Hamburguer } from '../Hamburguer/Hamburguer';
import { Logo } from '../Logo/Logo';
import './Nav.scss'
import { ILink } from './NavLink/NavLink';
import { NavLinks } from './NavLinks/NavLinks';

const NAV_COLOR_THRESHOLD: number = 10;

export const Nav: FC<Props> = ({ links }) => {

    const [isNavExpanded, setNavExpanded] = useState(false);

    const [isColored, setColored] = useState(false);

    let location = useLocation();

    useEffect(() => setColored(false), [location]);

    const handleScroll = () => {
        window.addEventListener("scroll", colorNavWhenNecessary);
        return () => window.addEventListener("scroll", colorNavWhenNecessary);
    }

    useEffect(handleScroll, []);

    const colorNavWhenNecessary = () => {
        setColored(surpasedThresold());
    }

    const handleHamburguerClick = () => {
        toggleExpansion();
        if (!surpasedThresold()) {
            toggleColor();
        }
    };

    const toggleExpansion = () => setNavExpanded(!isNavExpanded);

    const toggleColor = () => setColored(!isColored);

    return (
        <nav className={`nav ${isColored ? ' colored' : ''}`}>
            <Logo />
            <Hamburguer
                className='nav__hamburguer'
                isCloseButton={isNavExpanded}
                onClick={handleHamburguerClick} />
            <NavLinks
                onLinkClick={handleHamburguerClick}
                links={links}
                isVisible={isNavExpanded} />
        </nav>
    );
}

interface Props {
    links: ILink[]
}

const surpasedThresold = () => {
    return window.scrollY >= NAV_COLOR_THRESHOLD
}
