import React, { FC, forwardRef, MutableRefObject, useRef } from 'react';
import { useSimpleIntersectionObserver } from '../../custom-hooks/useSimpleIntersectionObserver';
import { Emphasis } from '../Emphasis/Emphasis';
import './FirstTattooSection.scss';

export const FirstTattoSection: FC<Props> = ({ children }) => {

    const ref = useRef(null);
    const isVisible: boolean = useSimpleIntersectionObserver({ ref, threshold: 0.8, freezeOnceVisible: true });

    return (
        <section ref={ref} className={`first-tatto ${isVisible ? ' visible' : ''}`}>
            <h1 className='first-tatto__header main-header'>
                ¿Tu primer tatuaje?
            </h1>
            <p className='first-tatto__text'>
                <Emphasis text={'¡Felicidades! '} />
                <br />
                Todos pasamos por ahí
                <br />
                <Emphasis text={'Bienvenido'} /> a la familia.
            </p>
        </section>
    );
};

interface Props {
    children?: string | JSX.Element | JSX.Element[]
}

const conAcento: string = 'á, é, í, ó, ú, ¡, ¿';