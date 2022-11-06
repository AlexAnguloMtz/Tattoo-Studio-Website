import { useRef } from "react";
import { Anchor } from "../../components/Anchor/Anchor";
import { Underlined } from "../../components/Underlined/Underlined";
import { useSimpleIntersectionObserver } from "../../custom-hooks/useSimpleIntersectionObserver";
import { instagramUrl } from "../../data/contact-info";

export const ArtistDescription = () => {

    const ref = useRef(null);

    const isVisible = useSimpleIntersectionObserver({ ref, threshold: 0.99, freezeOnceVisible: true });

    return (
        <div className="artist__description">

            <h1 className="artist__header-desktop">
                Conoce a
                <Underlined
                    text={'André'}
                    className='variable-width'
                />
            </h1>
            <p
                ref={ref}
                className={`artist__text ${isVisible ? 'visible' : ''}`}>
                {text}
            </p>
        </div>
    );
}

const text: JSX.Element =
    <>
        André es el fundador de Vallhala Tattoos. Es
        originario de Guadalajara,
        tierra del mariachi y del tequila.
        Su misión es crear arte único y brindar
        un servicio especial a sus clientes.
        Ya sea que quieras una pieza en blanco y negro,
        un diseño exótico a colores, tu animal favorito o
        tu nombre en un idioma extravagante,
        él lo hará realidad.
    </> 