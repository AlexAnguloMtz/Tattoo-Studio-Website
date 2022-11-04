import { FC, useRef } from "react";
import { IconWithText } from "../../components/IconWithText/IconWithText";
import { SectionHero } from "../../components/SectionHero/SectionHero";
import { useSimpleIntersectionObserver } from "../../custom-hooks/useSimpleIntersectionObserver";
import heroImg from '../../pictures/neck.jpg';
import './Contact.scss';
import { facebook, instagram, phone, location } from "./data";
import { Map } from '../../components/Map/Map';

export const Contact: FC<Props> = ({ gmapsApiKey }) => {

    const ref = useRef(null);

    const isContentOnScreen = useSimpleIntersectionObserver({ threshold: 0.7, ref });

    return (
        <>
            <SectionHero
                img={heroImg}
                header="Contacto"
            />

            <section className="contact">
                <div
                    ref={ref}
                    className="contact__data">
                    <IconWithText type='facebook' text={facebook} isAnimationActive={isContentOnScreen} />
                    <IconWithText type='instagram' text={instagram} isAnimationActive={isContentOnScreen} />
                    <IconWithText type='phone' text={phone} isAnimationActive={isContentOnScreen} />
                    <IconWithText type='location' text={location} isAnimationActive={isContentOnScreen} />
                </div>

                <Map gmapsApiKey={gmapsApiKey} />

            </section>
        </>

    );
}

interface Props {
    gmapsApiKey: string
}