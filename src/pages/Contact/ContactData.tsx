import { IconWithText } from "../../components/IconWithText/IconWithText";
import { facebook, instagram, whatsapp, location } from "./data";
import './ContactData.scss';

export const ContactData = () => {
    return (
        <div
            className="contact__data">
            <IconWithText type='facebook' text={facebook} />
            <IconWithText type='instagram' text={instagram} />
            <IconWithText type='whatsapp' text={whatsapp} />
            <IconWithText type='location' text={location} />
        </div>

    );
}