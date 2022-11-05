import { createRef } from 'react';
import './Home.scss';
import { ScrollAnchor } from '../../components/ScrollAnchor/ScrollAnchor';
import { BrandDescription } from './BrandDescription/BrandDescription';
import { Hero } from './Hero/Hero';
import thirdImg from '../../pictures/tatto-flowers.jpg';
import leftImg from '../../pictures/blackwork-three.jpg';
import rightImg from '../../pictures/blackwork-one.jpg';
import centralImg from '../../pictures/blackwork-two.jpg';
import parallaxBackground from '../../pictures/planets-cropped-2.jpg';
import parallaxBackgroundTwo from '../../pictures/Vikings/ship.jpg';
import { PageSection } from '../../components/PageSection/PageSection';
import { ContactCard } from '../../components/ContactCard/ContactCard';
import { Reviews } from '../../components/Reviews/Reviews';
import { OurTattoos } from './OurTattoos/OurTattoos';
import { OurServices } from './OurServices/OurServices';
import { ThreeParts } from '../../components/ThreeParts/ThreeParts';
import { Parallax } from '../../components/Parallax/Parallax';
import { invitationToGallery } from './data';
import { portfolio } from '../../routing/routing';

export const Home = () => {

    const ref = createRef<HTMLDivElement>();

    const scrollToContent = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <Hero onScrollButtonClick={scrollToContent} />

            <BrandDescription >
                <ScrollAnchor ref={ref} />
            </BrandDescription>

            <OurServices />

            <ThreeParts
                leftImg={leftImg}
                leftAlt={'tattoo-in-the-back'}
                rightImg={rightImg}
                rightAlt={'tattoo-in-the-arm'}
                text={invitationToGallery}
                centralImg={centralImg}
                callToActionText='Portafolio'
                callToActionUrl={portfolio}
            />

            <Parallax
                backgroundImage={parallaxBackground}
                className='home-parallax home-parallax-one'
            />

            <OurTattoos />

            <Reviews />

            <Parallax
                backgroundImage={parallaxBackgroundTwo}
                className='home-parallax home-parallax-two'
            />

            <PageSection
                img={thirdImg}
                size={'full'}
            >
                <ContactCard />
            </PageSection>

        </>
    );
}
