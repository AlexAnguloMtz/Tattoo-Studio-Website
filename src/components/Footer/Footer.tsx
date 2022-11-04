import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { useRef } from 'react';
import { useSimpleIntersectionObserver } from '../../custom-hooks/useSimpleIntersectionObserver';
import { address, phone } from './data';

export const Footer = () => {

    const ref = useRef(null);
    const isVisible = useSimpleIntersectionObserver({ ref, threshold: 0.7 });

    return (
        <footer ref={ref} className={`footer ${isVisible ? ' visible' : ''}`} >
            <div className='footer__phone'>
                {phone}
            </div>

            <div className='footer__logo'>
                <p>LOGO</p>
            </div>
            <div className='footer__social-media'>
                <FontAwesomeIcon className='icon ig' icon={faInstagram} />
                <FontAwesomeIcon className='icon fb' icon={faFacebookF} />
                <FontAwesomeIcon className='icon wh' icon={faWhatsapp} />
            </div>
            <p className='footer__address'>
                {address}
            </p>
            <div className='footer__navigation'>
                {links.map(link => <a key={link} className='link' href=''>{link}</a>)}
            </div>
        </footer >
    );
}

const links: string[] = [
    'Inicio',
    'Galería',
    'Artista',
    'Contacto',
];