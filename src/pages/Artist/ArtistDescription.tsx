import { useRef } from "react";
import { Anchor } from "../../components/Anchor/Anchor";
import { useSimpleIntersectionObserver } from "../../custom-hooks/useSimpleIntersectionObserver";

export const ArtistDescription = () => {

    const ref = useRef(null);

    const isVisible = useSimpleIntersectionObserver({ ref, threshold: 0.5 });

    return (
        <>
            <p
                ref={ref}
                className={`text ${isVisible ? 'visible' : ''}`}>
                {text}
                <Anchor underlined href="">Instagram.</Anchor>
            </p>
        </>
    );
}

const text: JSX.Element =
    <>
        André es originario de Guadalajara,
        tierra del mariachi y del tequila.
        Su visión es crear arte único y brindar
        un servicio especial a sus clientes.
        Ya sea que quieras una pieza en blanco y negro,
        un diseño exótico a colores, tu animal favorito o
        tu nombre en un idioma extravagante,
        él lo hará realidad. No olvides seguirlo en {' '}
    </> 