import { FC } from 'react';
import { CircularArrowButton } from '../../../components/CircularArrowButton/CircularArrowButton';
import { Logo } from '../../../components/Logo/Logo';
import './Hero.scss';

export const Hero: FC<Props> = ({ onScrollButtonClick }) => {
    return (
        <div className="hero">
            <div className='hero__overlay'>
                <div className='hero__logo-container'>
                    <Logo className='hero__logo' />
                </div>
                <CircularArrowButton
                    className='hero__arrow'
                    onClick={onScrollButtonClick} />
            </div>
        </div>
    );
}

interface Props {
    onScrollButtonClick: () => void
}