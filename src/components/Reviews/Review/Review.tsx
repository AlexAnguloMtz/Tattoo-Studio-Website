import { ProfilePicture } from "../../ProfilePicture/ProfilePicture";
import './Review.scss';

export const Review = ({ review }: { review: IReview }) => {
    return (
        <div className="review">
            <ProfilePicture img={review.profilePic} />
            <h1 className="review__header">{review.user}</h1>
            <p className="review__text">{review.text}</p>
        </div>
    );
}

export interface IReview {
    user: string,
    text: string,
    profilePic: string
}