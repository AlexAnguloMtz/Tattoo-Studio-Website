import { Hero } from "../../components/Hero/Hero";
import artistImg from '../../pictures/artist-small.jpg';


export const Artist = () => {
    return (
        <Hero
            img={artistImg}
            header={'Artista'} />
    );
}