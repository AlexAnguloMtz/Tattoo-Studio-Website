import { FC } from 'react';
import { Button } from '../Button/Button';
import './Hero.scss'

export const Hero: FC<Props> = ({ children = undefined, img, size = Size.DEFAULT, header, className = '' }) => {

    const aClass: string = className;

    return (
        <div
            className={`hero ${sizeClassFor(size)}`}
            style={{ backgroundImage: `url(${img})` }} >
            <div className={`overlay ${aClass}`}>
                <header className='header'>
                    <h1 className='header__text'>
                        {header}
                    </h1>
                </header>
                {children}
            </div>
        </div>
    );
}

interface Props {
    children?: JSX.Element[]
    img: string,
    size?: Size,
    header: string,
    className?: string
}

export enum Size {
    DEFAULT,
    FULL_SCREEN
}

const sizeClassFor = (size: Size) => {
    if (size === Size.DEFAULT)
        return '';

    else if (size === Size.FULL_SCREEN)
        return 'full-screen';
}
