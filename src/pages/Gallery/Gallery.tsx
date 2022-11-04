import { ScrollToTop } from "../../components/ScrollToTop/ScrollToTop"
import './Gallery.scss';
import galleryImg from '../../pictures/gallery-small.jpg';
import dragon from '../../pictures/dragon-recolored-small.jpeg';
import devil from '../../pictures/devil-cropped.jpeg';
import flowers from '../../pictures/flowers-cropped.jpeg';
import miniDevil from '../../pictures/mini-devil-cropped.jpeg';
import asian from '../../pictures/asian-cropped.jpeg';
import { PageSection } from "../../components/PageSection/PageSection";
import heroImg from '../../pictures/artist-small.jpg';
import { AnimatedEntrance, Animation } from "../../components/AnimatedEntrance/AnimatedEntrance";
import { SectionHero } from "../../components/SectionHero/SectionHero";

export const Gallery = () => {

    return (
        <>
            <SectionHero
                img={heroImg}
                header="Galería" />

            <main className="gallery">
                <AnimatedEntrance animation={Animation.Fading} threshold={0.5} freezeOnceVisible>
                    <img className="image" src={devil} alt="devil-tatto" />
                </AnimatedEntrance>
                <AnimatedEntrance animation={Animation.Fading} threshold={0.5} freezeOnceVisible>
                    <img className="image contain" src={flowers} alt="flowers-tatto" />
                </AnimatedEntrance>
                <AnimatedEntrance animation={Animation.Fading} threshold={0.5} freezeOnceVisible>
                    <img className="image" src={dragon} alt="dragon-tatto" />
                </AnimatedEntrance>
                <AnimatedEntrance animation={Animation.Fading} threshold={0.5} freezeOnceVisible>
                    <img className="image contain" src={miniDevil} alt="mini-devil-tatto" />
                </AnimatedEntrance>
                <AnimatedEntrance animation={Animation.Fading} threshold={0.5} freezeOnceVisible>
                    <img className="image contain" src={asian} alt="asian-letters-tatto" />
                </AnimatedEntrance>
            </main>
        </>
    );
}
