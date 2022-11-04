import { FC } from 'react';
import { PageSection } from '../PageSection/PageSection';
import './SectionHero.scss';

export const SectionHero: FC<Props> = ({ header, img }) => {
    return (
        <PageSection
            className="section__hero"
            img={img}
            animated={false}
            size='mid'>
            <h1 className='section__hero header'>{header}</h1>
        </PageSection>
    );
}

interface Props {
    header: string,
    img: string
}