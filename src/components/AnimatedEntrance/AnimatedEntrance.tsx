import { FC, useRef } from "react";
import { useSimpleIntersectionObserver } from "../../custom-hooks/useSimpleIntersectionObserver";
import './AnimatedEntrance.scss';

export enum Animation {
    Open = 'open',
    Fading = 'fading',
}

export const AnimatedEntrance: FC<Props> = ({
    children = undefined,
    className = '',
    threshold,
    animation,
    freezeOnceVisible = false,
    gap = ''
}) => {

    const ref = useRef(null);

    const isVisible = useSimpleIntersectionObserver({ ref, threshold: threshold, freezeOnceVisible: freezeOnceVisible });

    return (
        <div ref={ref}
            style={{ gap: gap }}
            className={
                `${animation} ${isVisible ? ' visible' : ''} ${className}`}>
            {children}
        </div>
    );

}

interface Props {
    children?: JSX.Element | JSX.Element[],
    className?: string,
    animation: Animation,
    threshold: number,
    freezeOnceVisible?: boolean,
    gap?: string
}

