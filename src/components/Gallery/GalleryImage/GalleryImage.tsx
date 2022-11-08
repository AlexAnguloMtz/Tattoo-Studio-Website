import React, { FC } from 'react'
import './GalleryImage.scss';

export const GalleryImage: FC<Props> = ({ src, onClick }) => {
    return (
        <li className='gallery__image-container'>
            <div
                onClick={() => onClick(src)}
                className='gallery__image-overlay'>
            </div>
            <img
                className='gallery__image'
                src={src}
            >
            </img>
        </li>

    )
}

interface Props {
    src: string
    onClick: (src: string) => void
}
