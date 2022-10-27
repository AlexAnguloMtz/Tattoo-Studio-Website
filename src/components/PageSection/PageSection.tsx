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
    className = '',
    animated = true,
    size = 'full'
}) => {
    return (
        <BackgroundImage
            className={className}
            img={img}
            size={size}>
            <Overlay>
                {
                    animated ?

                        <AnimatedEntrance
                            className='page-section__content'
                            threshold={thresholdForTextVisibility}
                            animation={Animation.Fading}>
                            {children}
                        </AnimatedEntrance>

                        : <>{children}</>
                }
            </Overlay>
        </BackgroundImage>
    );
}

interface Props {
    img: string,
    children?: JSX.Element,
    className?: string,
    animated?: boolean,
    size: 'full' | 'mid' | 'small'
}