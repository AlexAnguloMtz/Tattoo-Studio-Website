import { FC } from "react";
import { Button } from "../Button/Button";
import './CallToAction.scss';

export const CallToAction: FC<Props> = ({ text, className }) => {
    return (
        <Button
            className={`call-to-action ${className}`}
            onClick={() => { }}>
            {text}
        </Button>
    );
}

interface Props {
    text: string,
    className?: string
}

