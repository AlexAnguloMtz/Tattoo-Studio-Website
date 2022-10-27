import { ScrollToTop } from "../../components/ScrollToTop/ScrollToTop"
import './Gallery.scss';
import galleryImg from '../../pictures/gallery-small.jpg';
import dragon from '../../pictures/dragon-recolored-small.jpeg';
import devil from '../../pictures/devil-cropped.jpeg';
import flowers from '../../pictures/flowers-cropped.jpeg';
import miniDevil from '../../pictures/mini-devil-cropped.jpeg';
import asian from '../../pictures/asian-cropped.jpeg';
import { PageSection } from "../../components/PageSection/PageSection";
import imgOne from '../../pictures/artist-small.jpg';
import { AnimatedEntrance, Animation } from "../../components/AnimatedEntrance/AnimatedEntrance";

export const Gallery = () => {
    return (
        <>
            <PageSection
                className="gallery__hero"
                img={imgOne}
                size="small">
                <h1>Galería</h1>
            </PageSection>
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
