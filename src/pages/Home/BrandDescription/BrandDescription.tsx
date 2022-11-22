import { FC, useRef } from 'react';
import './BrandDescription.scss';
import img from '../../../pictures/pink-flower.jpg';
import { data } from './data'
import { useSimpleIntersectionObserver } from '../../../custom-hooks/useSimpleIntersectionObserver';
import { Parallax } from '../../../components/Parallax/Parallax';

const header: string = 'Valhalla Tattoos';

export const BrandDescription: FC<Props> = ({ children }) => {

    const ref = useRef(null);

    const isContentOnScreen = useSimpleIntersectionObserver({ ref, threshold: 0.5 });

    return (
        <>
            <section ref={ref} className={`brand-description ${isContentOnScreen ? ' on-screen' : ''}`}>
                <div className='brand-description__content'>
                    <h1 className='brand-description__header main-header'>
                        {header}
                    </h1>
                    <p className='brand-description__text'>
                        {<>{data}</>}
                    </p>
                </div>
                {children}
            </section>
            <Parallax
                className='brand-description brand-description__parallax'
                backgroundImage={img} />
        </>

    );

};

interface Props {
    children?: string | JSX.Element | JSX.Element[]
}