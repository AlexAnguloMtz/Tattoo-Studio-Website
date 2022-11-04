import { FC } from "react";
import './BackgroundImage.scss';

export const BackgroundImage: FC<Props> = ({
    className = '',
    img,
    children = undefined,
    size = 'full',
    imgPosition = '',
    height = '',
    width = ''
}) => {
    return (
        <section className={`background-img ${className} ${size}`}
            style={{
                width: width,
                height: height,
                backgroundImage: `url(${img})`,
                backgroundPosition: imgPosition
            }}>
            {children}
        </section>
    );
};

interface Props {
    img: string
    children?: JSX.Element | JSX.Element[],
    className?: string,
    size?: 'full' | 'mid',
    imgPosition?: string,
    width?: string,
    height?: string
}