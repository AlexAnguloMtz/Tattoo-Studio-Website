import { FC, useRef } from "react";
import { Underlined } from "../../components/Underlined/Underlined";
import artist from '../../pictures/artist-working.png';
import { ArtistDescription } from "./ArtistDescription";
import { useSimpleIntersectionObserver } from "../../custom-hooks/useSimpleIntersectionObserver";
import { ArtistLinks } from "./ArtistLinks";
import { Parallax } from "../../components/Parallax/Parallax";
import parallax from '../../pictures/love.jpg';

export const ArtistMain: FC = () => {

    const ref = useRef(null);

    const isTextVisible = useSimpleIntersectionObserver({ ref, threshold: 0.6 });

    return (
        <section
            className={`artist`}>

            <div
                ref={ref}
                className={`artist__presentation ${isTextVisible ? ' visible' : ''}`}>

                <div className="artist__header-and-picture">

                    <h1 className="artist__header">
                        {artistTitle()}
                    </h1>

                    <img
                        className="artist__picture"
                        src={artist}
                        alt="artist"
                    />

                </div>

                <ArtistDescription />

            </div>

            <ArtistLinks />

            <Parallax
                className="artist__parallax"
                backgroundImage={parallax} />

        </section>
    );
}

const artistTitle = (): JSX.Element => {
    return (
        <>
            Conoce a
            <Underlined
                text={'André'}
                className='variable-width'
            />
        </>
    );
};
