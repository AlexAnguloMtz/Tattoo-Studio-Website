import React, { FC, forwardRef, MutableRefObject, useRef } from 'react';
import { useSimpleIntersectionObserver } from '../../custom-hooks/useSimpleIntersectionObserver';
import { Emphasis } from '../Emphasis/Emphasis';
import './BrandDescription.scss';

export const BrandDescription: FC<Props> = ({ children }) => {

    const ref = useRef(null);
    const isVisible: boolean = useSimpleIntersectionObserver({ ref, threshold: 0.8, freezeOnceVisible: true });

    return (
        <section ref={ref} className={`brand-description ${isVisible ? ' visible' : ''}`}>
            {children}
            <h1 className='brand-description__header main-header'>
                Nombre del estudio
            </h1>
            <p className='brand-description__text'>
                Somos un
                <Emphasis text={' tattoo '} />
                studio en
                <Emphasis text={' Hermosillo'} />, Sonora,
                comprometidos con brindarte un servicio de calidad premium.
                <br /><br />
                Nuestra filosofía es que
                <Emphasis text={' cada cliente'} />,
                al igual que cada tatuaje,
                <Emphasis text={' es único'} />.
            </p>
        </section>
    );
};

interface Props {
    children?: string | JSX.Element | JSX.Element[]
}
