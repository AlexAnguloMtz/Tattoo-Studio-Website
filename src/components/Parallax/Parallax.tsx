import { FC } from "react"
import './Parallax.scss';

export const Parallax: FC<Props> = ({
    backgroundImage,
    height = '500px',
    className = ''
}) => {
    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
                height: height
            }}
            className={`parallax ${className}`}>
        </div>
    );
}

interface Props {
    backgroundImage: string
    height?: string,
    className?: string
}