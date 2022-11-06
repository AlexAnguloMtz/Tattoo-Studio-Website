import './Portfolio.scss';
import dragon from '../../pictures/dragon-recolored-small.jpeg';
import devil from '../../pictures/devil-cropped.jpeg';
import flowers from '../../pictures/flowers-cropped.jpeg';
import miniDevil from '../../pictures/mini-devil-cropped.jpeg';
import asian from '../../pictures/asian-cropped.jpeg';
import heroImg from '../../pictures/artist-small.jpg';
import { AnimatedEntrance, Animation } from "../../components/AnimatedEntrance/AnimatedEntrance";
import { SectionHero } from "../../components/SectionHero/SectionHero";

export const Portfolio = () => {

    return (
        <>
            <SectionHero
                img={heroImg}
                header="Portafolio" />

            <main className="portfolio">
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
