import { createRef, MutableRefObject, useState } from 'react';
import { Hero } from '../../components/Hero/Hero';
import { Nav } from '../../components/Nav/Nav';
import './Home.scss';
import { ScrollAnchor } from '../../components/ScrollAnchor/ScrollAnchor';
import { BrandDescription } from '../../components/BrandDescription/BrandDescription';
import { PictureWithDescription } from '../../components/PictureWithDescription/PictureWithDescription';
import { FirstTattoSection } from '../../components/FirstTattoSection/FirstTattoSection';
import { Footer } from '../../components/Footer/Footer';
import { RotatedHeaderSection } from '../../components/RotatedHeaderSection/RotatedHeaderSection';

export const Home = () => {

    const ref = createRef<HTMLDivElement>();

    const scrollToContent = () => { ref.current?.scrollIntoView({ behavior: 'smooth' }) }

    return (
        <>
            <Nav />
            <Hero onButtonClick={scrollToContent} />
            <BrandDescription >
                <ScrollAnchor ref={ref} />
            </BrandDescription>
            <RotatedHeaderSection
                header={'¿Qué ofrecemos?'}
                text={ourServicesText} />
            <PictureWithDescription />
            <FirstTattoSection />
            <Footer />
        </>
    );
}

const ourServicesText: string = `
    Apuntamos a ser lo mejor de lo mejor.
    Queremos volver realidad tu visión,
    con nuestro servicio de tatuajes totalmente
    personalizados y a la medida.
`;