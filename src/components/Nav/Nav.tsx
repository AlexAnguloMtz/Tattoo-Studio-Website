import { FC, useEffect, useState } from 'react';
import { useLocation, Location } from 'react-router-dom';
import { useLoading } from '../../context/loading-context';
import { home } from '../../routing/routing';
import { Hamburguer } from '../Hamburguer/Hamburguer';
import { LinkAdapter } from '../LinkAdapter/LinkAdapter';
import { Logo } from '../Logo/Logo';
import './Nav.scss'
import { ILink } from './NavLink/NavLink';
import { NavLinks } from './NavLinks/NavLinks';

const NAV_COLOR_THRESHOLD: number = 10;

export const Nav: FC<Props> = ({ links, homePage: homepage }) => {

    const { isLoading } = useLoading();

    const [isNavExpanded, setNavExpanded] = useState(false);

    const [isColored, setColored] = useState(false);

    let location = useLocation();

    useEffect(() => setColored(false), [location]);

    useEffect(handleScroll, []);

    useEffect(handleLoading, [isLoading]);

    function handleScroll() {
        window.addEventListener("scroll", colorNavWhenNecessary);
        return () => window.addEventListener("scroll", colorNavWhenNecessary);
    }

    function handleLoading() {
        if (isLoading) {
            setNavExpanded(false);
        }
    }

    const colorNavWhenNecessary = () => {
        setColored(surpasedThresold());
    }

    const handleNavEvent = () => {
        toggleExpansion();
        if (!surpasedThresold()) {
            toggleColor();
        }
    }

    const toggleExpansion = () => setNavExpanded(!isNavExpanded);

    const toggleColor = () => setColored(!isColored);

    return (
        <nav className={`nav ${isColored ? ' colored' : ''}`}>
            <LinkAdapter
                className='nav__homepage-link'
                to={homepage.path}>
                <Logo />
            </LinkAdapter>
            <Hamburguer
                className='nav__hamburguer'
                isCloseButton={isNavExpanded}
                onClick={handleNavEvent} />
            <NavLinks
                selectedPath={selectedPath(location)}
                onLinkClick={handleNavEvent}
                links={links}
                isVisible={isNavExpanded} />
        </nav>
    );
}

interface Props {
    links: ILink[],
    homePage: ILink
}

const surpasedThresold = () => {
    return window.scrollY >= NAV_COLOR_THRESHOLD
}

const selectedPath = (location: Location) => {
    return location.pathname;
}