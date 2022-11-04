import { FC } from "react";
import { SectionHero } from "../../components/SectionHero/SectionHero";
import heroImg from '../../pictures/neck.jpg';
import './Contact.scss';
import { Map } from '../../components/Map/Map';
import { ContactData } from "./ContactData";

export const Contact: FC<Props> = ({ gmapsApiKey }) => {

    return (
        <>
            <SectionHero
                img={heroImg}
                header="Contacto"
            />
            <section className="contact">
                <ContactData />
                <Map gmapsApiKey={gmapsApiKey} />
            </section>
        </>

    );
}

interface Props {
    gmapsApiKey: string
}