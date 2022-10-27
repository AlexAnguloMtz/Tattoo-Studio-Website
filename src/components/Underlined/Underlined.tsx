import { FC } from "react";
import './Underlined.scss';

const SPACE: string = ' ';

export const Underlined: FC<Props> = ({ text, className = '' }) => {
    return (
        <>
            <span>
                {SPACE}
            </span>
            <span className={`underlined ${className}`}>
                {text}
                <div className={`underlined__line ${className}`}></div>
            </span>
            <span>
                {SPACE}
            </span>
        </>
    );
}

interface Props {
    text: string,
    className?: string
}