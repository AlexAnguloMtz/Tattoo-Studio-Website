import { FC } from "react";
import { ArtistHeader } from "./ArtistHeader";

export const ArtistDescription: FC<Props> = ({ isHeaderAnimationActive = false }) => {

    return (
        <div className="artist__description">

            <ArtistHeader
                className="artist__header-desktop"
                isAnimationActive={isHeaderAnimationActive} />
            <p
                className={`artist__text `}>
                {text}
            </p>
        </div>
    );
}

interface Props {
    isHeaderAnimationActive: boolean
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