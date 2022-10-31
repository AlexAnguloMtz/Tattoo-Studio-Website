import React, { FC } from 'react';
import './BrandDescription.scss';
import img from '../../../pictures/pink-flower.jpg';

const text: JSX.Element =
    <>
        Somos un tattoo studio en Hermosillo, Sonora,
        comprometidos a brindarte un servicio de la más alta calidad.
        Nuestros trabajos son una extensión de nosotros y nuestra identidad,
        siéntete seguro de que saldrás de nuestro estudio
        con una pieza de arte que vas a amar.
        Nuestra filosofía es que cada cliente,
        al igual que cada tatuaje, es único.
    </>

const header: string = 'Vallhala Tattoos';

export const BrandDescription: FC<Props> = ({ children }) => {
    return (
        <section className={`brand-description`}>
            <div className='brand-description__content'>
                <h1 className='brand-description__header main-header'>
                    {header}
                </h1>
                <p className='brand-description__text'>
                    {text}
                </p>
            </div>
            <img
                className='brand-description__img'
                src={img}
                alt="brand-description__img" />
            {children}
        </section>
    );
};

interface Props {
    children?: string | JSX.Element | JSX.Element[]
}

