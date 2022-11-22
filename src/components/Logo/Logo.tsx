import './Logo.scss';
import logoImg from '../../pictures/logo.png';
import { FC } from 'react';

export const Logo: FC<Props> = ({ className = '' }) => {
    return (
        <img className={`logo ${className}`} src={logoImg} alt='logo'>
        </img>
    );
}

interface Props {
    className?: string
}