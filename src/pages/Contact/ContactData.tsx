import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import './ContactData.scss';
import { IconCard } from "../../components/IconCard/IconCard";
import { address, facebookProfile, facebookUrl, instagramProfile, instagramUrl, phone, whatsappUrl } from '../../data/contact-info';

const instagramGradient: string = 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)';

export const ContactData = () => {
    return (
        <div className="contact__data">
            <IconCard
                className="facebook"
                type={'link'}
                url={facebookUrl}
                icon={faFacebookF}
                text={facebookProfile} />
            <IconCard
                className="instagram"
                type={'link'}
                url={instagramUrl}
                icon={faInstagram}
                text={instagramProfile}
                gradient={instagramGradient} />
            <IconCard
                className="whatsapp"
                type={'link'}
                url={whatsappUrl}
                icon={faWhatsapp}
                text={phone} />
            <IconCard
                className="location"
                icon={faLocationDot}
                text={address} />
        </div>
    );
}