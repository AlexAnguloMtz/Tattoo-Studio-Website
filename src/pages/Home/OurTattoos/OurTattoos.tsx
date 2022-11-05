import { useWindowSize } from "usehooks-ts";
import { CallToAction } from "../../../components/CallToAction/CallToAction";
import { PageSection } from "../../../components/PageSection/PageSection";
import secondImg from '../../../pictures/viking-cropped.jpg';
import { artist } from "../../../routing/routing";
import { ourTattoosText } from "./data";
import './OurTattoos.scss';

const breakpoint: number = 1100;

export const OurTattoos = () => {

    const { width } = useWindowSize();

    return (
        (width < breakpoint) ? mobileLayout() : desktopLayout()
    );

}

const mobileLayout = () => {
    return (
        <PageSection
            className="our-tattoos"
            img={secondImg}
            size={'full'}
            gap={'2em'}
        >
            <p className="our-tattoos__text">
                {ourTattoosText}
            </p>
            <CallToAction
                className="our-tattoos__call-to-action"
                to={artist}
                text="Conoce al artista"
            />
        </PageSection>
    );
}

const desktopLayout = () => {
    return (
        <></>
    );
}