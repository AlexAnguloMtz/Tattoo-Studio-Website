import './Artist.scss';

import { PageSection } from "../../components/PageSection/PageSection";
import { CallToAction } from "../../components/CallToAction/CallToAction";
import imgOne from "../../pictures/gallery-small.jpg";
import imgTwo from "../../pictures/back-neck-small.jpg";
import { ArtistMain } from "./ArtistMain";
import { Reviews } from "../../components/Reviews/Reviews";

export const Artist = () => {
    return (
        <>
            <PageSection
                className="artist__hero"
                img={imgOne}
                size="small"
                animated={false}>
                <h1>Artista</h1>
            </PageSection>

            <ArtistMain />

            <Reviews />

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


