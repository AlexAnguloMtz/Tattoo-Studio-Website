import { FC } from "react";
import './BackgroundImage.scss';

export const BackgroundImage: FC<Props> = ({
    className = '',
    img = '',
    children = undefined,
    size = false
}) => {
    return (
        <section className={`background-img ${className} ${size}`}
            style={{ backgroundImage: `url(${img})` }}>
            {children}
        </section>
    );
};

interface Props {
    img: string
    children?: JSX.Element | JSX.Element[],
    className?: string,
    size: 'full' | 'mid' | 'small'
}