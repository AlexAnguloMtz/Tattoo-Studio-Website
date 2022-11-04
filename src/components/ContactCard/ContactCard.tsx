import { useRef } from "react";
import { useSimpleIntersectionObserver } from "../../custom-hooks/useSimpleIntersectionObserver";
import { Anchor } from "../Anchor/Anchor";
import './ContactCard.scss';

export const ContactCard = () => {

    const ref = useRef(null);

    const isOnScreen = useSimpleIntersectionObserver({ ref, threshold: 0.99 });

    return (
        <article ref={ref} className={`contact-card ${isOnScreen ? ' on-screen' : ''}`}>
            <div className="contact-card__animated-line top"></div>
            <div className="contact-card__animated-line left"></div>
            <div className="contact-card__animated-line right"></div>
            <div className="contact-card__animated-line bottom"></div>
            <p>
                {content()};
            </p>
        </article>
    );
}

const content = (): JSX.Element => {
    return (
        <>
            Agenda hoy  <br />
            (662) 9876543210 <br />
            <Anchor underlined href="">@tuInstagram</Anchor>
        </>
    );
}

