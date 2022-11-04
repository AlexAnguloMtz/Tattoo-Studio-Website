import { useWindowSize } from "usehooks-ts";
import { SectionHero } from "../../components/SectionHero/SectionHero";
import heroImg from '../../pictures/neck.jpg';

export const Contact = () => {
    return (
        <SectionHero
            img={heroImg}
            header="Contacto" />
    );
}