import { FC } from "react";
import { useWindowSize } from "usehooks-ts";
import './BackgroundImage.scss';

const breakpoint: number = 800;

export const BackgroundImage: FC<Props> = ({
    className = '',
    img,
    desktopImg = '',
    children = undefined,
    size = 'full',
    imgPosition = '',
    height = '',
    width = ''
}) => {

    const window = useWindowSize();

    let backgroundImg: string;

    if (desktopImg) {
        backgroundImg = (window.width < breakpoint) ? img : desktopImg;
    }

    else {
        backgroundImg = img;
    }

    return (
        <section className={`background-img ${className} ${size}`}
            style={{
                width: width,
                height: height,
                backgroundImage: `url(${backgroundImg})`,
                backgroundPosition: imgPosition
            }}>
            {children}
        </section>
    );
};

interface Props {
    img: string,
    desktopImg?: string,
    children?: JSX.Element | JSX.Element[],
    className?: string,
    size?: 'full' | 'mid',
    imgPosition?: string,
    width?: string,
    height?: string
}