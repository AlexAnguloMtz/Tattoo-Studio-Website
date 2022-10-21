import './PictureWithDescription.scss';
import pic from '../../pictures/tatto-flowers.jpg';
import { useRef } from 'react';
import { useIntersectionObserver } from 'usehooks-ts';
import { useSimpleIntersectionObserver } from '../../custom-hooks/useSimpleIntersectionObserver';

export const PictureWithDescription = () => {

    const ref = useRef<HTMLDivElement | null>(null);
    const isVisible = useSimpleIntersectionObserver({ ref, threshold: 0.8 });

    return (
        <section className='picture-with-description'>
            <div ref={ref} className={`picture-with-description__anchor ${isVisible ? ' visible' : ''}`}>
                <div className='picture-with-description__description'>
                    <p className='picture-with-description__description-text'>
                        Agenda hoy <br />
                        (662) 9876543210 <br />
                        @tuInstagram
                    </p>
                </div>
                <img
                    className='picture-with-description__picture'
                    src={pic}
                    alt="tatto-picture-example" />
            </div>
        </section>
    );
}