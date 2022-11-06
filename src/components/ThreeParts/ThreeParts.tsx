import { FC, useRef } from "react";
import { useWindowSize } from "usehooks-ts";
import { useSimpleIntersectionObserver } from "../../custom-hooks/useSimpleIntersectionObserver";
import { AnimatedEntrance, Animation } from "../AnimatedEntrance/AnimatedEntrance";
import { BackgroundImage } from "../BackgroundImage/BackgroundImage";
import { CallToAction } from "../CallToAction/CallToAction";
import { Overlay } from "../Overlay/Overlay";
import './ThreeParts.scss';

const firstBreakpoint: number = 800;
const secondBreakpoint: number = 1100;

export const ThreeParts: FC<Props> = ({
    leftImg,
    rightImg,
    leftAlt,
    rightAlt,
    centralImg,
    text,
    callToActionText,
    callToActionUrl,
    className = '',
    centralImgPosition = '',
    overlayOpacity = 0.4
}) => {

    const ref = useRef(null);

    const isContentOnScreen = useSimpleIntersectionObserver({ ref, threshold: 0.6 });

    const { width } = useWindowSize();

    return (
        <>
            <section ref={ref} className={`three-images ${isContentOnScreen ? ' on-screen' : ''} ${className}`}>
                <img className="three-images__image left" src={leftImg} alt={leftAlt} />
                <BackgroundImage
                    className="three-images__central"
                    img={centralImg}
                    imgPosition={centralImgPosition}
                    width={widthFor(width)}
                    height={heightFor(width)}>
                    <Overlay className="three-images__central-overlay" opacity={overlayOpacity}>
                        <AnimatedEntrance
                            className="three-images__central-animated-entrance"
                            animation={Animation.Fading}
                            threshold={0.5}>
                            <p className="three-images__text">{text}</p>
                            <CallToAction
                                className="three-images__call-to-action"
                                to={callToActionUrl}
                                text={callToActionText} />
                        </AnimatedEntrance>
                    </Overlay>
                </BackgroundImage>
                <img className="three-images__image right" src={rightImg} alt={rightAlt} />
            </section>

        </>
    );

}

interface Props {
    leftImg: string,
    rightImg: string,
    leftAlt: string,
    rightAlt: string,
    centralImg: string,
    text: string,
    callToActionText: string,
    callToActionUrl: string,
    className?: string,
    centralImgPosition?: string,
    overlayOpacity?: number
}

function widthFor(width: number): string {
    if (width < firstBreakpoint) {
        return '100%';
    }
    else if (width < secondBreakpoint) {
        return '50%';
    }
    return '400px';
}

function heightFor(width: number): string {
    if (width < secondBreakpoint) {
        return '100%';
    }
    return '700px';
}

