import { createRef } from 'react';
import './Home.scss';
import { ScrollAnchor } from '../../components/ScrollAnchor/ScrollAnchor';
import { BrandDescription } from './BrandDescription/BrandDescription';
import { Hero } from './Hero/Hero';
import { BackgroundImage } from '../../components/BackgroundImage/BackgroundImage';
import { Overlay } from '../../components/Overlay/Overlay';
import { AnimatedEntrance } from '../../components/AnimatedEntrance/AnimatedEntrance';
import { CallToAction } from '../../components/CallToAction/CallToAction';
import { Animation } from '../../components/AnimatedEntrance/AnimatedEntrance';
import imgOne from '../../pictures/Vikings/ship-small.jpg';
import imgTwo from '../../pictures/black-shirt-small.jpg';
import imgThree from '../../pictures/viking-cropped.jpg';
import imgFour from '../../pictures/tatto-flowers.jpg';
import { PageSection } from '../../components/PageSection/PageSection';
import { ContactCard } from '../../components/ContactCard/ContactCard';

const ourServicesText: string = `
    Con nuestro servicio de tatuajes totalmente
    personalizados y a la medida, volveremos realidad
    tu visión. Siempre manteniéndonos como uno de 
    los mejores estudios de la ciudad.
`;

const tattoTypesWeHandle: string = `
    En Vallhala Tattos manejamos cualquier tipo de tatuaje. 
    El límite es tu imaginación.
    Contáctanos para cotizar y agendar tu cita. 
`;

const thresholdForTextVisibility: number = 0.6;

export const Home = () => {

    const ref = createRef<HTMLDivElement>();

    const scrollToContent = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <Hero onScrollButtonClick={scrollToContent} />

            <BrandDescription >
                <ScrollAnchor ref={ref} />
            </BrandDescription>

            <PageSection
                img={imgOne}
                size={'full'}>
                {<p>{ourServicesText}</p>}
            </PageSection>

            <PageSection
                img={imgTwo}
                animated={false}
                size={'mid'}>
                <CallToAction
                    className='home__gallery-button'
                    text={'Galería'} />
            </PageSection>

            <PageSection
                img={imgThree}
                size={'full'}>
                <p>{tattoTypesWeHandle}</p>
            </PageSection>

            <PageSection
                img={imgFour}
                size={'full'}>
                <ContactCard />
            </PageSection>
        </>
    );
}
