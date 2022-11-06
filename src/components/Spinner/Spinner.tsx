import { FC } from "react";
import './Spinner.scss';

export const Spinner: FC<Props> = ({ className }) => {
    return (
        <div className="spinner">
            <div className="inner one"></div>
            <div className="inner two"></div>
            <div className="inner three"></div>
        </div>

    );
}

interface Props {
    className?: string
}