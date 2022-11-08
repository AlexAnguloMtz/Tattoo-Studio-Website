import './Portfolio.scss';
import heroImg from '../../pictures/artist-small.jpg';
import { SectionHero } from "../../components/SectionHero/SectionHero";
import { Gallery } from '../../components/Gallery/Gallery';
import img1 from '../../pictures/Portfolio/1.jpeg';
import img2 from '../../pictures/Portfolio/2.jpeg';
import img3 from '../../pictures/Portfolio/3.jpeg';
import img4 from '../../pictures/Portfolio/4.jpeg';
import img5 from '../../pictures/Portfolio/5.jpeg';
import img6 from '../../pictures/Portfolio/6.jpeg';

const images: string[] = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6
]

export const Portfolio = () => {
    return (
        <>
            <SectionHero
                img={heroImg}
                header="Portafolio" />
            <section className="portfolio">
                <Gallery
                    images={images}
                    className={''} />
            </section>
        </>
    );
}