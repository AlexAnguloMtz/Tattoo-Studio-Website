import Carousel from "react-material-ui-carousel";
import { Review } from "./Review/Review";
import './Reviews.scss';
import { reviews } from './data';
import { FC } from "react";

export const Reviews: FC = () => {
    return (
        <section className="reviews">
            <Carousel
                interval={5000}
                className="reviews__carousel"
                swipe={false}
                animation='slide'
                navButtonsAlwaysVisible
            >
                {reviews.map(review => <Review review={review} />)}
            </Carousel>
        </section>
    );
}


