import { IReview } from "./Review/Review";

import profileOne from '../../pictures/profile-one.jpg';
import profileTwo from '../../pictures/profile-two.jpg';
import profileThree from '../../pictures/profile-three.jpg';

export const reviews: IReview[] = [
    {
        user: 'Daniela Santos',
        text: `"Recibí un servicio totalmente profesional.
               Si estás en Sonora y quieres tatuarte,
               Vallhala Tattoos debe ser tu primera opción."`,
        profilePic: profileOne
    },
    {
        user: 'Luz Ramos',
        text: `"Aquí me hice mi primer tatuaje. 
               Y el segundo, y el tercero.
               Siempre me quedan ganas de volver."`,
        profilePic: profileTwo
    },
    {
        user: 'Miguel Avilés',
        text: `"Manejan muy buena relación calidad-precio. 
               Después de tatuarme traje a mi novia a hacerse el suyo
               y ambos quedamos encantados."`,
        profilePic: profileThree
    },
]

