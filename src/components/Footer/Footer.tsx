import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { useRef } from 'react';
import { useSimpleIntersectionObserver } from '../../custom-hooks/useSimpleIntersectionObserver';
import { address, facebookUrl, instagramUrl, phone, whatsappUrl } from '../../data/contact-info';
import { theLinks } from '../../routing/routing';
import { ILink } from '../Nav/NavLink/NavLink';
import { LinkAdapter } from '../LinkAdapter/LinkAdapter';

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
                <a href={instagramUrl} className='icon ig'><FontAwesomeIcon icon={faInstagram} /></a>
                <a href={facebookUrl} className='icon fb'><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href={whatsappUrl} className='icon wh'><FontAwesomeIcon icon={faWhatsapp} /></a>
            </div>
            <p className='footer__address'>
                {address}
            </p>
            <div className='footer__navigation'>
                {links()}
            </div>
        </footer >
    );
}

const links = (): JSX.Element[] => {
    return theLinks.map(link => toAnchor(link));
}

const toAnchor = (link: ILink) => {
    return (
        <LinkAdapter
            key={link.path}
            className={'link'}
            to={link.path}
        >
            {link.text}
        </LinkAdapter>
    );
}
