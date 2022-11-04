import { ProfilePicture } from "../../ProfilePicture/ProfilePicture";
import './Review.scss';

export const Review = ({ review }: { review: IReview }) => {
    return (
        <article className="review">
            <ProfilePicture img={review.user.profilePic} />
            <h1 className="review__username">{review.user.username}</h1>
            <p className="review__text">{review.text}</p>
        </article>
    );
}

export interface IUser {
    username: string,
    profilePic: string
}

export interface IReview {
    user: IUser,
    text: string
}