import './Artist.scss';
import { PageSection } from "../../components/PageSection/PageSection";
import { CallToAction } from "../../components/CallToAction/CallToAction";
import imgTwo from "../../pictures/back-neck-small.jpg";
import imgThree from '../../pictures/back-neck.jpg';
import { ArtistMain } from "./ArtistMain";
import heroImg from "../../pictures/gallery-small.jpg";
import { SectionHero } from '../../components/SectionHero/SectionHero';
import { contact } from '../../routing/routing';

export const Artist = () => {
    return (
        <>
            <SectionHero
                img={heroImg}
                header='Artista' />

            <ArtistMain />

            <PageSection
                className='artist__book-session'
                img={imgTwo}
                desktopImg={imgThree}
                animated={false}
                size={'full'}>
                <CallToAction
                    to={contact}
                    text={'Agendar cita'} />
            </PageSection>
        </>

    );

}


