import React, { FC } from 'react';
import './BrandDescription.scss';
import img from '../../../pictures/pink-flower.jpg';
import { data } from './brand-description-data'

const header: string = 'Vallhala Tattoos';

export const BrandDescription: FC<Props> = ({ children }) => {
    return (
        <section className='brand-description'>
            <div className='brand-description__content'>
                <h1 className='brand-description__header main-header'>
                    {header}
                </h1>
                <p className='brand-description__text'>
                    {<>{data}</>}
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

