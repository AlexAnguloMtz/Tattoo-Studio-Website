import { IReview } from "./Review/Review";
import profileOne from '../../pictures/profile-one.jpg';
import profileTwo from '../../pictures/profile-two.jpg';
import profileThree from '../../pictures/profile-three.jpg';

export const reviews: IReview[] =
    [
        {
            user: {
                username: 'Daniela Santos',
                profilePic: profileOne
            },
            text: `"Recibí un servicio totalmente profesional.
               Si estás en Sonora y quieres tatuarte,
               Vallhala Tattoos debe ser tu primera opción."`,
        },
        {
            user: {
                username: 'Luz Ramos',
                profilePic: profileTwo
            },
            text: `"Aquí me hice mi primer tatuaje. 
               Y el segundo, y el tercero.
               Siempre me quedan ganas de volver."`
        },
        {
            user: {
                username: 'Miguel Avilés',
                profilePic: profileThree
            },
            text: `"Excelente relación calidad-precio. 
               Después de tatuarme traje a mi novia a hacerse el suyo
               y ambos quedamos encantados."`
        }
    ]
