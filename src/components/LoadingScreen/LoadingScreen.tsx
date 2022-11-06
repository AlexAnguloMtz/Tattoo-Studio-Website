import { FC } from 'react';
import { Logo } from '../Logo/Logo';
import { Spinner } from '../Spinner/Spinner';
import './LoadingScreen.scss';

export const LoadingScreen: FC<Props> = ({ isVisible }) => {
    return (
        <div className={`loading-screen ${isVisible ? ' visible' : ''}`}>
            <Logo />
            <Spinner />
        </div>
    );
}

interface Props {
    isVisible: boolean
}