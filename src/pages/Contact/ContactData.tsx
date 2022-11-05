import { facebook, instagram, whatsapp, location, whatsappUrl } from "./data";
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import './ContactData.scss';
import { IconCard } from "../../components/IconCard/IconCard";

export const ContactData = () => {
    return (
        <div className="contact__data">
            <IconCard
                className="facebook"
                type={'link'}
                url={''}
                icon={faFacebookF}
                text={facebook} />
            <IconCard
                className="instagram"
                type={'link'}
                url={''}
                icon={faInstagram}
                text={instagram} />
            <IconCard
                className="whatsapp"
                type={'link'}
                url={whatsappUrl}
                icon={faWhatsapp}
                text={whatsapp} />
            <IconCard
                className="location"
                icon={faLocationDot}
                text={location} />
        </div>
    );
}