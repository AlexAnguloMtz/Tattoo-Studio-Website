import { FC, useRef } from 'react';
import './RotatedHeaderSection.scss';
import { useSimpleIntersectionObserver } from '../../custom-hooks/useSimpleIntersectionObserver';

export const RotatedHeaderSection: FC<Props> = ({ header, text }) => {

    const ref = useRef<HTMLDivElement | null>(null);
    const isVisible = useSimpleIntersectionObserver({ ref, threshold: 0.6 });

    return (
        <section ref={ref} className={`rotated-header-section ${isVisible ? ' visible' : ''}`}>
            <h1 className='rotated-header-section__header'>
                {header}
            </h1>
            <p className='rotated-header-section__text'>
                {text}
            </p>
        </section>
    );
}

interface Props {
    header: string,
    text: string
}