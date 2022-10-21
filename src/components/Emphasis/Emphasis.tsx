import './Emphasis.scss';
import { FC } from "react";

export const Emphasis: FC<Props> = ({ text }) => {
    return (
        <span className="emphasis">
            {text}
        </span>
    );
}

interface Props {
    text: string
}