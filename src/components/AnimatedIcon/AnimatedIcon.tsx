import { FC } from "react";
import { SelfDrawingCircle } from "../SelfDrawingCircle/SelfDrawingCircle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import './AnimatedIcon.scss';

interface Props {
    isAnimationActive: boolean,
    type: 'instagram' | 'facebook' | 'phone' | 'location'
}

const icons: Map<string, IconProp> = new Map();
icons.set('facebook', faFacebookF);
icons.set('instagram', faInstagram);
icons.set('phone', faPhone);
icons.set('location', faLocationDot);

export const AnimatedIcon: FC<Props> = ({
    isAnimationActive,
    type
}) => {
    return (
        <SelfDrawingCircle isAnimationActive={isAnimationActive} >
            <FontAwesomeIcon
                style={{ fontSize: (type === 'phone' ? '1em' : '1.3em') }}
                className="animated-icon__icon"
                icon={icons.get(type) as IconProp} />
        </SelfDrawingCircle>
    );
}
