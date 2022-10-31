import { FC } from 'react';
import './ProfilePicture.scss';

export const ProfilePicture: FC<Props> = ({ img }) => {
    return (
        <img
            className="profile-pic"
            src={img}
            alt="profile-picture" />);
}

interface Props {
    img: string
}