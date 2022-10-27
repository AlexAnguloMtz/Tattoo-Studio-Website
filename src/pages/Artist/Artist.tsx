import { useRef } from "react";
import { Underlined } from "../../components/Underlined/Underlined";
import { useSimpleIntersectionObserver } from "../../custom-hooks/useSimpleIntersectionObserver";
import './Artist.scss';
import artist from '../../pictures/artist-working.png';
import { ArtistDescription } from "./ArtistDescription";
import { PageSection } from "../../components/PageSection/PageSection";
import { CallToAction } from "../../components/CallToAction/CallToAction";
import imgOne from "../../pictures/gallery-small.jpg";
import imgTwo from "../../pictures/back-neck-small.jpg";

export const Artist = () => {

    const ref = useRef(null);

    const isTextVisible = useSimpleIntersectionObserver({ ref, threshold: 0.1 });

    return (
        <>
            <PageSection
                className="artist__hero"
                img={imgOne}
                size="small">
                <h1>Artista</h1>
            </PageSection>
            <section
                ref={ref}
                className={`artist ${isTextVisible ? ' visible' : ''}`}>

                <h1 className="header">
                    {headerText()}
                </h1>

                <img
                    className="picture"
                    src={artist}
                    alt="artist" />

                <ArtistDescription />
            </section>
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

const headerText = (): JSX.Element => {
    return (
        <>
            “Soy
            <Underlined text={'André,'} className='variable-width' />
            tu próximo
            <Underlined text={'tattoo'} className='variable-width' />
            artist”
        </>
    );
};