import { PageSection } from '../../../components/PageSection/PageSection';
import { ourServices } from './our-services-data';
import imgOne from '../../../pictures/Vikings/ship-small.jpg';

export const OurServices = () => {
    return (
        <PageSection
            img={imgOne}
            size={'full'}>
            {<p>{ourServices}</p>}
        </PageSection>
    );
} 