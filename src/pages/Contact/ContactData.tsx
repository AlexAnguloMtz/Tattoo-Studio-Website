import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import './ContactData.scss';
import { IconCard } from "../../components/IconCard/IconCard";
import { useContactData } from '../../context/contact-info-context';
import { Address } from '../../data/contact-info';

const instagramGradient: string = 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)';

export const ContactData = () => {

    const contactData = useContactData();

    return (
        <div className="contact__data">
            <IconCard
                className="facebook"
                type={'link'}
                url={contactData.facebookUrl}
                icon={faFacebookF}
                text={contactData.facebookProfile} />
            <IconCard
                className="instagram"
                type={'link'}
                url={contactData.instagramUrl}
                icon={faInstagram}
                text={contactData.instagramProfile}
                gradient={instagramGradient} />
            <IconCard
                className="whatsapp"
                type={'link'}
                url={contactData.whatsappUrl}
                icon={faWhatsapp}
                text={contactData.whatsapp} />
            <IconCard
                className="location"
                icon={faLocationDot}
                text={toString(contactData.address)} />
        </div>
    );
}

const toString = (address: Address): string => {
    return `
        ${address.streetAndNumber}, ${address.district}, ${address.cityAndState}
    `;
}