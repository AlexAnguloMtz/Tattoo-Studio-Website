import { FC } from "react";
import './AnimatedUnderline.scss';

const SPACE: string = ' ';

export const AnimatedUnderline: FC<Props> = ({ text, isAnimationActive = false }) => {
    return (
        <>
            <span>{SPACE}</span>
            <span className={`animated-underline ${isAnimationActive ? ' active' : ''}`}>
                {text}
            </span>
            <span>{SPACE}</span>
        </>
    );
}

interface Props {
    text: string,
    isAnimationActive?: boolean
}