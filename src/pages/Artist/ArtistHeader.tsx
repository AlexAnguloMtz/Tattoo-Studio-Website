import { FC } from "react";
import { AnimatedUnderline } from "../../components/AnimatedUnderline/AnimatedUnderline";

export const ArtistHeader: FC<Props> = ({ className = '', isAnimationActive = false }) => {
    return (
        <h1 className={className}>
            Conoce a
            <AnimatedUnderline
                text={'André'}
                isAnimationActive={isAnimationActive}
            />
        </h1>
    );
}

interface Props {
    className?: string,
    isAnimationActive?: boolean
}