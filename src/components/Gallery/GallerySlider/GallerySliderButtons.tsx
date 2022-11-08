import React, { FC } from "react";
import { CloseButton } from "../../CloseButton/CloseButton";
import { DirectionButton } from "../../DirectionButton/DirectionButton";

export const GallerySliderButtons: FC<Props> = ({
    onLeftButtonClick,
    onRightButtonClick,
    onCloseButtonClick
}) => {

    return (
        <>
            <CloseButton
                onClick={onCloseButtonClick}
                className="gallery__slider-close-button"
            />
            <DirectionButton
                onClick={onLeftButtonClick}
                className="gallery__slider-button left"
                direction="left"
            />
            <DirectionButton
                onClick={onRightButtonClick}
                className="gallery__slider-button right"
                direction="right"
            />
        </>
    );
}

interface Props {
    onLeftButtonClick: (event: React.MouseEvent) => void,
    onRightButtonClick: (event: React.MouseEvent) => void,
    onCloseButtonClick: (event: React.MouseEvent) => void
}