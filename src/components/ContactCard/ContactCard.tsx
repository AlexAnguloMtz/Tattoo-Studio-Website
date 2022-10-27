import { Anchor } from "../Anchor/Anchor";
import './ContactCard.scss';

export const ContactCard = () => {
    return (
        <article className='contact-card'>
            <p>
                {contactText()};
            </p>
        </article>
    );
}


const contactText = (): JSX.Element => {
    return (
        <>
            Agenda hoy
            <br />
            (662) 9876543210
            <br />
            <Anchor underlined href="">@tuInstagram</Anchor>
        </>
    );
}

