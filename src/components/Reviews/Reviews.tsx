import Carousel from "react-material-ui-carousel";
import { Review } from "./Review/Review";
import './Reviews.scss';
import { reviews } from './data';
import { FC } from "react";
import { Overlay } from "../Overlay/Overlay";

export const Reviews: FC = () => {
    return (
        <section className="reviews">
            <div className="reviews__overlay">
                <Carousel
                    interval={5000}
                    className="reviews__carousel"
                    swipe={false}
                    animation='slide'
                    navButtonsAlwaysVisible
                >
                    {reviews.map(review => <Review review={review} />)}
                </Carousel>
            </div>
        </section>
    );
}


