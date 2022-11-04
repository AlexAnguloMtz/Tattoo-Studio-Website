import { FC } from 'react';
import './SelfDrawingCircle.scss';

export const SelfDrawingCircle: FC<Props> = ({ isAnimationActive = false, children = undefined }) => {
    return (

        <div className={`self-drawing-circle ${isAnimationActive ? ' active' : ''}`}>

            {children}

            <svg className='self-drawing-circle__svg'
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_268_16)">
                    <circle
                        cx="24"
                        cy="20"
                        r="19"
                        shape-rendering="geometricPrecision" />
                </g>
                <defs>
                    <filter
                        id="filter0_d_268_16"
                        x="0"
                        y="0"
                        width="48"
                        height="48"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB">
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_268_16" result="shape" />
                    </filter>
                </defs>
            </svg>
        </div>
    );
}

interface Props {
    isAnimationActive: boolean,
    children?: JSX.Element
}