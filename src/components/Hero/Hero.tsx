import { FC } from 'react';
import { Button } from '../Button/Button';
import './Hero.scss'

export const Hero: FC<Props> = ({ onButtonClick }) => {
    return (
        <div className="hero" >
            <div className="overlay">
                <header className='header'>
                    <h1 className='slogan'>
                        Más que un tattoo, una experiencia
                    </h1>
                </header>
                <Button
                    className='call-to-action'
                    onClick={() => { }}>
                    Agendar sesión
                </Button>
                <Button
                    className='arrow'
                    onClick={onButtonClick} />
            </div>
        </div>
    );
}

interface Props {
    onButtonClick: () => void
}