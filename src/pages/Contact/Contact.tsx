import { FC } from "react";
import { SectionHero } from "../../components/SectionHero/SectionHero";
import heroImg from '../../pictures/neck-small.jpg';
import desktopHeroImg from '../../pictures/neck.jpg';
import './Contact.scss';
import { Map } from '../../components/Map/Map';
import { ContactData } from "./ContactData";
import { Parallax } from "../../components/Parallax/Parallax";
import img from '../../pictures/skull-small.jpg';

export const Contact: FC<Props> = ({ gmapsApiKey }) => {

    return (
        <>
            <SectionHero
                img={heroImg}
                desktopImg={desktopHeroImg}
                header="Contacto"
            />
            <section className="contact">
                <ContactData />
                <Map
                    className='contact__map'
                    gmapsApiKey={gmapsApiKey} />
            </section>
            <Parallax
                className="contact__parallax"
                backgroundImage={img} />
        </>

    );
}

interface Props {
    gmapsApiKey: string
}