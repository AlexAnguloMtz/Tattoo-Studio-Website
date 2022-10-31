import { useState } from 'react';
import { Button } from '../Button/Button';
import './Hamburguer.scss';

export const Hamburguer: React.FC<Props> = ({ onClick, isCloseButton, className }) => {
    return (
        <Button
            onClick={onClick}
            className={`hamburguer ${isCloseButton ? 'close' : ''} ${className}`}>
            <div className='line center'>
                <div className='line inner-line top'></div>
                <div className='line inner-line bottom'></div>
            </div>
        </Button>
    );
}

interface Props {
    onClick: () => void,
    isCloseButton: boolean,
    className?: string
}