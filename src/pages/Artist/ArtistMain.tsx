import { FC, useRef } from "react";
import { Underlined } from "../../components/Underlined/Underlined";
import artist from '../../pictures/artist-working.png';
import { ArtistDescription } from "./ArtistDescription";
import { useSimpleIntersectionObserver } from "../../custom-hooks/useSimpleIntersectionObserver";

export const ArtistMain: FC = () => {

    const ref = useRef(null);

    const isTextVisible = useSimpleIntersectionObserver({ ref, threshold: 0.1 });

    return (
        <section
            ref={ref}
            className={`artist ${isTextVisible ? ' visible' : ''}`}>

            <h1 className="header">
                {artistTitle()}
            </h1>

            <img
                className="picture"
                src={artist}
                alt="artist" />

            <ArtistDescription />
        </section>
    );
}

const artistTitle = (): JSX.Element => {
    return (
        <>
            “Conoce a
            <Underlined text={'André,'} className='variable-width' />
            tu próximo
            <Underlined text={'tattoo'} className='variable-width' />
            artist”
        </>
    );
};
