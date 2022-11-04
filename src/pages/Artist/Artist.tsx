import './Artist.scss';
import { PageSection } from "../../components/PageSection/PageSection";
import { CallToAction } from "../../components/CallToAction/CallToAction";
import imgTwo from "../../pictures/back-neck-small.jpg";
import { ArtistMain } from "./ArtistMain";
import heroImg from "../../pictures/gallery-small.jpg";
import { SectionHero } from '../../components/SectionHero/SectionHero';

export const Artist = () => {
    return (
        <>
            <SectionHero
                img={heroImg}
                header='Artista' />
            <ArtistMain />
            <PageSection
                img={imgTwo}
                animated={false}
                size={'mid'}>
                <CallToAction
                    className='home__gallery-button'
                    text={'Agendar cita'} />
            </PageSection>
        </>

    );

}


