import { useEffect, useState } from 'react';
import { useLocation, Location } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import { Spinner } from '../Spinner/Spinner';
import './LoadingScreen.scss';

const timeoutDuration: number = 1000;

export const LoadingScreen = () => {

    const location: Location = useLocation();

    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
        setTimeout(() => setVisible(false), timeoutDuration);
    }, [location]);

    return (
        <div className={`loading-screen ${isVisible ? ' visible' : ''}`}>
            <Logo />
            <Spinner />
        </div>
    );
}
