import { FC, useRef } from "react";
import artist from '../../pictures/artist-working.png';
import { ArtistDescription } from "./ArtistDescription";
import { useSimpleIntersectionObserver } from "../../custom-hooks/useSimpleIntersectionObserver";
import { ArtistLinks } from "./ArtistLinks";
import { Parallax } from "../../components/Parallax/Parallax";
import parallax from '../../pictures/love.jpg';
import { ArtistHeader } from "./ArtistHeader";

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

                    <ArtistHeader
                        className="artist__header"
                        isAnimationActive={isTextVisible}
                    />

                    <img
                        className="artist__picture"
                        src={artist}
                        alt="artist"
                    />

                </div>

                <ArtistDescription isHeaderAnimationActive={isTextVisible} />

            </div>

            <ArtistLinks />

            <Parallax
                className="artist__parallax"
                backgroundImage={parallax} />

        </section>
    );
}
