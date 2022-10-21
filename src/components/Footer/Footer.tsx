import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { useRef } from 'react';
import { useSimpleIntersectionObserver } from '../../custom-hooks/useSimpleIntersectionObserver';

export const Footer = () => {

    const ref = useRef(null);
    const isVisible = useSimpleIntersectionObserver({ ref, threshold: 0.7 });

    return (
        <footer ref={ref} className={`footer ${isVisible ? ' visible' : ''}`} >
            <div className='phone'>
                {phone}
            </div>
            <div className='social-media'>
                <FontAwesomeIcon className='icon ig' icon={faInstagram} />
                <FontAwesomeIcon className='icon fb' icon={faFacebookF} />
                <FontAwesomeIcon className='icon wh' icon={faWhatsapp} />
            </div>
            <p className='address'>
                {address}
            </p>
            <div className='navigation'>
                {links.map(link => <a className='link' href=''>{link}</a>)}
            </div>
        </footer >
    );
}

const address: string = `
    Avenida Juarez #17
    Entre Reforma y Periferico Oriente
    Col. 5 de Mayo
    Hermosillo, Sonora
`;

const phone: string = '(662) 9876543210';

const links: string[] = [
    'Inicio',
    'Galería',
    'Artista',
    'Contacto',
];