import Carousel from "react-material-ui-carousel";
import { Review } from "./Review/Review";
import './Reviews.scss';
import { reviews } from './reviews-data';

export const Reviews = () => {
    return (
        <section className="reviews">
            <h1 className="reviews__header">{headerText}</h1>
            <Carousel
                interval={5000}
                className="reviews__carousel"
                swipe={false}
                animation='slide'
                navButtonsAlwaysVisible>
                {reviews.map(review => <Review review={review} />)}
            </Carousel>
        </section>
    );
}

const headerText = 'Opiniones';

