import React, { FC, useEffect, useState } from "react";
import { GalleryImage } from "./GalleryImage/GalleryImage";
import './Gallery.scss';
import { useCircularArray } from "../../custom-hooks/useCircularArray";
import { GallerySlider } from "./GallerySlider/GallerySlider";
import { decide } from "../../common/decide";
import { disableScrolling, enableScrolling } from "../../common/scrolling";

export const Gallery: FC<Props> = ({ images, className = '' }) => {

    const [sliderImg, setSliderImg] = useState('');

    const [isSliderVisible, setSliderVisible] = useState(false);

    useEffect(() => {
        decide(isSliderVisible, disableScrolling, enableScrolling);
    }, [isSliderVisible]);

    const handleGalleryImgClick = (src: string): void => {
        setSliderImg(src);
        setSliderVisible(true);
    }

    const handleDirectionButton = (e: React.MouseEvent, direction: 'previous' | 'next') => {
        e.stopPropagation();
        setSliderImg(imageFor(direction));
    }

    const imageFor = (direction: 'previous' | 'next'): string => {
        return images[indexFor(direction)];
    }

    const indexFor = (direction: 'previous' | 'next'): number => {
        return (direction === 'next') ? nextIndex() : previousIndex();
    }

    const previousIndex = (): number => {
        return firstImage() ? lastIndex() : currentIndex() - 1;
    }

    const nextIndex = (): number => {
        return lastImage() ? firstIndex() : currentIndex() + 1;
    }

    const firstImage = (): boolean => {
        return currentIndex() === firstIndex();
    }

    const lastImage = (): boolean => {
        return currentIndex() === lastIndex();
    }

    const currentIndex = (): number => {
        return images.indexOf(sliderImg);
    }

    const firstIndex = (): number => {
        return 0;
    }

    const lastIndex = (): number => {
        return images.length - 1;
    }

    return (
        <>
            <ul className={`gallery ${className}`}>
                {images.map(img => <GalleryImage onClick={handleGalleryImgClick} src={img} />)}
            </ul>
            <GallerySlider
                isVisible={isSliderVisible}
                currentImg={sliderImg}
                onClick={() => setSliderVisible(false)}
                onLeftButtonClick={(e: React.MouseEvent) => handleDirectionButton(e, 'previous')}
                onRightButtonClick={(e: React.MouseEvent) => handleDirectionButton(e, 'next')}
                onCloseButtonClick={() => setSliderVisible(false)}
            />
        </>

    );
}

interface Props {
    images: string[],
    className?: string
}