import { FC } from "react";
import { Button } from "../../../components/Button/Button";
import { Hero, Size } from "../../../components/Hero/Hero";
import heroImg from '../../../pictures/hero-small.jpg';
import './HomeHero.scss';

const HEADER: string = 'Mas que un tatto, una experiencia';

export const HomeHero: FC<Props> = ({ onScrollButtonClick }) => {
    return (
        <Hero
            className="home-hero"
            img={heroImg}
            size={Size.FULL_SCREEN}
            header={HEADER}>

            <Button
                className='call-to-action'
                onClick={() => { }}>
                Agendar sesión
            </Button>

            <Button
                className='scroll-button'
                onClick={onScrollButtonClick} />

        </Hero>
    );
}

interface Props {
    onScrollButtonClick: () => void;
}