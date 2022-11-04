import { FC } from "react";
import { AnimatedIcon } from "../AnimatedIcon/AnimatedIcon";
import './IconWithText.scss';

export const IconWithText: FC<Props> = ({ isAnimationActive, type, text }) => {
    return (
        <div className="icon-with-text">
            <AnimatedIcon type={type} isAnimationActive={isAnimationActive} />
            <p className="icon-with-text__text">{text}</p>
        </div>
    );
}

interface Props {
    isAnimationActive: boolean,
    type: 'instagram' | 'facebook' | 'phone' | 'location',
    text: string
}