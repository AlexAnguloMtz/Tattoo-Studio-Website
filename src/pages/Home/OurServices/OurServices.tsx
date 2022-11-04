import { PageSection } from '../../../components/PageSection/PageSection';
import { data } from './data';
import imgMobile from '../../../pictures/Vikings/ship-small.jpg';
import imgDesktop from '../../../pictures/tattoo-of-woman.jpg';
import './OurServices.scss';
import { RefObject, useRef } from 'react';
import { useSimpleIntersectionObserver } from '../../../custom-hooks/useSimpleIntersectionObserver';
import { Overlay } from '../../../components/Overlay/Overlay';

export const OurServices = () => {

    const ref = useRef<HTMLDivElement>(null);

    const isContentOnScreen = useSimpleIntersectionObserver({ ref, threshold: 0.3 });

    return (
        <>
            {mobileLayout()}
            {desktopLayout(ref, isContentOnScreen)}
        </>
    );

}

const mobileLayout = () => {
    return (
        <PageSection
            className='our-services__background mobile'
            img={imgMobile}
            size={'full'}>
            {<p className='our-services__text'>{data}</p>}
        </PageSection>
    );
}

const desktopLayout = (ref: RefObject<HTMLDivElement>, isContentOnScreen: boolean) => {
    return (
        <section ref={ref} className={`our-services desktop ${isContentOnScreen ? ' on-screen' : ''}`}>
            <Overlay className='our-services__overlay'>
                <img className='our-services__img' src={imgDesktop} alt="viking-ship" />
                <p className='our-services__text'>{data}</p>
            </Overlay>
        </section>
    );
}
