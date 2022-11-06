import { AnimatedEntrance } from "../AnimatedEntrance/AnimatedEntrance";
import { BackgroundImage } from "../BackgroundImage/BackgroundImage";
import { CallToAction } from "../CallToAction/CallToAction";
import { Overlay } from "../Overlay/Overlay";
import { Animation } from "../AnimatedEntrance/AnimatedEntrance";
import { FC } from "react";
import './PageSection.scss';

const thresholdForTextVisibility: number = 0.5;

export const PageSection: FC<Props> = ({
    img,
    children,
    desktopImg = '',
    className = '',
    animated = true,
    size = 'full',
    gap = ''
}) => {
    return (
        <BackgroundImage
            className={className}
            img={img}
            desktopImg={desktopImg}
            size={size}>
            <Overlay gap={gap}>
                {
                    animated
                        ? withAnimation(thresholdForTextVisibility, children, gap)
                        : <>{children}</>
                }
            </Overlay>
        </BackgroundImage>
    );
}

interface Props {
    img: string,
    desktopImg?: string,
    children?: JSX.Element | JSX.Element[],
    className?: string,
    animated?: boolean,
    size?: 'full' | 'mid',
    gap?: string
}

const withAnimation = (
    threshold: number,
    children: JSX.Element | JSX.Element[] | undefined,
    gap: string
) => {
    return (
        <AnimatedEntrance
            className='page-section__content'
            threshold={threshold}
            animation={Animation.Fading}
            gap={gap}>
            {children}
        </AnimatedEntrance>
    );
}