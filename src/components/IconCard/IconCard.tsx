import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FC } from "react";
import { LinkIconCard } from "./LinkIconCard/LinkIconCard";
import { RegularIconCard } from "./RegularIconCard/RegularIconCard";

export const IconCard: FC<Props> = ({
    text,
    icon,
    type = 'regular',
    url = '',
    gradient = '',
    className = ''
}) => {

    if (type === 'regular') {
        return (
            <RegularIconCard
                text={text}
                icon={icon}
                gradient={gradient}
                className={className} />
        );
    }

    else if (type === 'link') {
        return (
            <LinkIconCard
                url={url}
                text={text}
                icon={icon}
                gradient={gradient}
                className={className} />
        );
    }

    else
        throw new Error(`Could not render card for type: ${type}`);

}

interface Props {
    text: string,
    icon: IconProp
    type?: 'regular' | 'link',
    url?: string,
    gradient?: string
    className?: string
}
