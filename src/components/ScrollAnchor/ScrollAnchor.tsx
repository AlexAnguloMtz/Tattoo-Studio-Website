import './ScrollAnchor.scss';
import { FC, forwardRef } from 'react';

export const ScrollAnchor = forwardRef<HTMLDivElement, Props>((props, ref) => {
    return (
        <div className='scroll-anchor' ref={ref}>
        </div >
    );
});

interface Props {
}