import { Hamburguer } from '../Hamburguer/Hamburguer';
import { Logo } from '../Logo/Logo';
import './Top-Bar.scss';
import { Nav } from './Nav/Nav';
import { useState } from 'react';

export const TopBar = () => {

    const [isNavVisible, setNavVisible] = useState(false);

    const toggleNav = () => { setNavVisible(!isNavVisible) };

    return (
        <>
            <div className='top-bar'>
                <Logo />
                <Hamburguer onClick={toggleNav} />
            </div>
            <Nav isVisible={isNavVisible} />
        </>
    );
}

