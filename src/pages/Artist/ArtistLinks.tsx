import { CardLink } from "../../components/CardLink/CardLink";
import { useContactData } from "../../context/contact-info-context";
import { portfolio } from "../../routing/routing";

export const ArtistLinks = () => {

    const { instagramUrl, facebookUrl } = useContactData();

    return (
        <div className="artist__links">
            <CardLink
                href={portfolio}
                className="artist__portfolio"
                containerClassName="artist__portfolio-container"
                text="Portafolio"
            />
            <CardLink
                href={instagramUrl}
                className="artist__instagram"
                containerClassName="artist__instagram-container"
                text="Instagram"
                anchor
            />
            <CardLink
                href={facebookUrl}
                className="artist__facebook"
                containerClassName="artist__facebook-container"
                text="Facebook"
                anchor
            />
        </div>
    );
}