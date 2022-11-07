import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { useRef } from 'react';
import { useSimpleIntersectionObserver } from '../../custom-hooks/useSimpleIntersectionObserver';
import { theLinks } from '../../routing/routing';
import { ILink } from '../Nav/NavLink/NavLink';
import { LinkAdapter } from '../LinkAdapter/LinkAdapter';
import { useContactData } from '../../context/contact-info-context';

export const Footer = () => {

    const contactData = useContactData();

    const ref = useRef(null);

    const isVisible = useSimpleIntersectionObserver({ ref, threshold: 0.7 });

    return (
        <footer ref={ref} className={`footer ${isVisible ? ' visible' : ''}`} >
            <div className='footer__phone'>
                {contactData.whatsapp}
            </div>

            <div className='footer__logo'>
                <p>LOGO</p>
            </div>
            <div className='footer__social-media'>
                <a href={contactData.instagramUrl} className='icon ig'><FontAwesomeIcon icon={faInstagram} /></a>
                <a href={contactData.facebookUrl} className='icon fb'><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href={contactData.whatsappUrl} className='icon wh'><FontAwesomeIcon icon={faWhatsapp} /></a>
            </div>
            <p className='footer__address'>
                {contactData.address.streetAndNumber} <br />
                {contactData.address.district} <br />
                {contactData.address.cityAndState}
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
