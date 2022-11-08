import React, { FC } from "react";
import './GallerySlider.scss';
import { GallerySliderButtons } from "./GallerySliderButtons";

export const GallerySlider: FC<Props> = ({
    isVisible,
    currentImg,
    onClick,
    onLeftButtonClick,
    onRightButtonClick,
    onCloseButtonClick,
    className = ''
}) => {

    const handleSliderImgClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    }

    return (
        <div
            onClick={onClick}
            className={`gallery__slider ${isVisible ? ' visible' : 'hidden'}`}
        >
            <GallerySliderButtons
                onCloseButtonClick={onCloseButtonClick}
                onLeftButtonClick={onLeftButtonClick}
                onRightButtonClick={onRightButtonClick} />
            <div className="gallery__slider-image-container">
                <img
                    onClick={handleSliderImgClick}
                    className={`gallery__slider-image`}
                    src={currentImg}
                />
            </div>
        </div>
    );
}

interface Props {
    isVisible: boolean,
    currentImg: string,
    onClick: () => void,
    onLeftButtonClick: (e: React.MouseEvent) => void,
    onRightButtonClick: (e: React.MouseEvent) => void,
    onCloseButtonClick: (e: React.MouseEvent) => void
    className?: string
}