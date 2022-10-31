import { createRef } from 'react';
import './Home.scss';
import { ScrollAnchor } from '../../components/ScrollAnchor/ScrollAnchor';
import { BrandDescription } from './BrandDescription/BrandDescription';
import { Hero } from './Hero/Hero';
import { CallToAction } from '../../components/CallToAction/CallToAction';
import imgOne from '../../pictures/Vikings/ship-small.jpg';
import imgTwo from '../../pictures/black-shirt-small.jpg';
import imgThree from '../../pictures/viking-cropped.jpg';
import imgFour from '../../pictures/tatto-flowers.jpg';
import { PageSection } from '../../components/PageSection/PageSection';
import { ContactCard } from '../../components/ContactCard/ContactCard';
import { Anchor } from '../../components/Anchor/Anchor';

const ourServicesText: string = `
    Con nuestro servicio de tatuajes totalmente
    personalizados volveremos realidad cualquier diseño que eligas.
    Realizamos trabajos únicos, lo que nos ha
    posicionado como uno de los mejores estudios de la región. 
`;

const tattoTypesWeHandle = (): JSX.Element => {
    return (
        <p>
            Somos especialistas en el estilo Blackwork.
            Además manejamos cualquier tipo de tatuaje.
            El límite es tu imaginación.
            Contáctanos para cotizar y agendar tu cita.
            Conoce a nuestro artista
            <Anchor underlined href=""> aquí.</Anchor>
        </p>
    );
}


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
                <p>{tattoTypesWeHandle()}</p>
            </PageSection>

            <PageSection
                img={imgFour}
                size={'full'}>
                <ContactCard />
            </PageSection>
        </>
    );
}
