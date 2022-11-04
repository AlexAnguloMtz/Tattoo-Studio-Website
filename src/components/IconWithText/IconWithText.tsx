import { FC } from "react";
import './IconWithText.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const icons: Map<string, IconProp> = new Map();
icons.set('facebook', faFacebookF);
icons.set('instagram', faInstagram);
icons.set('whatsapp', faWhatsapp);
icons.set('location', faLocationDot);

export const IconWithText: FC<Props> = ({ type, text }) => {
    return (
        <div className={`icon-with-text ${type}`}>
            {iconFor(type)}
            {textFor(type, text)}
        </div>
    );
}

interface Props {
    type: 'instagram' | 'facebook' | 'whatsapp' | 'location',
    text: string
}

function iconFor(type: string) {
    return (
        <FontAwesomeIcon
            icon={icons.get(type) as IconProp} />
    );
}

const textFor = (type: string, text: string): JSX.Element => {
    if (type === 'facebook' || type === 'instagram') {
        return <a className="icon-with-text__link">{text}</a>
    }
    return <p className="icon-with-text__text">{text}</p>
}