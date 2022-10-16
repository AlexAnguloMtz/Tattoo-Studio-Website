import { Button } from '../Button/Button';
import './Hero.scss'

export const Hero = () => {
    return (
        <div className="hero">
            <div className="overlay">
                <header className='header'>
                    <h1 className='slogan'>
                        Más que un tatoo, una experiencia
                    </h1>
                </header>
                <Button
                    className='arrow'
                    onClick={() => { }} />
            </div>
        </div>
    );
}