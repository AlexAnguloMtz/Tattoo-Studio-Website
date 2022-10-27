import React, { FC } from 'react';
import './BrandDescription.scss';

export const BrandDescription: FC<Props> = ({ children }) => {
    return (
        <section className={`brand-description`}>
            <h1 className='brand-description__header main-header'>
                {header}
            </h1>
            <p className='brand-description__text'>
                {text}
            </p>
            {children}
        </section>
    );
};

interface Props {
    children?: string | JSX.Element | JSX.Element[]
}

const header: string = 'Vallhala Tattoos';

const text: JSX.Element =
    <>
        Somos un tattoo studio en Hermosillo, Sonora,
        comprometidos a brindarte un servicio de calidad premium.
        Nuestra filosofía es que cada cliente,
        al igual que cada tatuaje, es único
    </>