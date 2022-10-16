import { useState } from 'react';
import { Button } from '../Button/Button';
import './Hamburguer.scss';

export const Hamburguer: React.FC<Props> = ({ onClick }) => {

    const [isCloseButton, setIsCloseButton] = useState(false);

    const handleClick = () => {
        setIsCloseButton(!isCloseButton);
        onClick();
    }

    return (
        <Button
            onClick={handleClick}
            className={`hamburguer ${isCloseButton ? 'close' : ''}`}>
            <div className='line center'>
                <div className='line inner-line top'></div>
                <div className='line inner-line bottom'></div>
            </div>
        </Button>
    );
}

interface Props {
    onClick: () => void
}