import { createRef } from 'react';
import './Home.scss';
import { ScrollAnchor } from '../../components/ScrollAnchor/ScrollAnchor';
import { BrandDescription } from './BrandDescription/BrandDescription';
import { Hero } from './Hero/Hero';
import { CallToAction } from '../../components/CallToAction/CallToAction';
import firstImg from '../../pictures/black-shirt-small.jpg';
import secondImg from '../../pictures/viking-cropped.jpg';
import thirdImg from '../../pictures/tatto-flowers.jpg';
import { PageSection } from '../../components/PageSection/PageSection';
import { ContactCard } from '../../components/ContactCard/ContactCard';
import { Anchor } from '../../components/Anchor/Anchor';
import { OurServices } from './OurServices/OurServices';

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

            <OurServices />

            <PageSection
                img={firstImg}
                animated={false}
                size={'mid'}>
                <CallToAction
                    className='home__gallery-button'
                    text={'Galería'} />
            </PageSection>

            <PageSection
                img={secondImg}
                size={'full'}>
                <p>{tattoTypesWeHandle()}</p>
            </PageSection>

            <PageSection
                img={thirdImg}
                size={'full'}>
                <ContactCard />
            </PageSection>
        </>
    );
}

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