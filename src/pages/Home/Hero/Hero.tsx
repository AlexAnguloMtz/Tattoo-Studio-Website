import { FC } from 'react';
import { ArrowButton } from '../../../components/ArrowButton/ArrowButton';
import './Hero.scss';

export const Hero: FC<Props> = ({ onScrollButtonClick }) => {
    return (
        <div className="hero">
            <div className='hero__overlay'>
                <h1 className='hero__heading'>
                    LOGO
                </h1>
                <ArrowButton
                    className='hero__arrow'
                    onClick={onScrollButtonClick} />
            </div>
        </div>
    );
}

interface Props {
    onScrollButtonClick: () => void
}