import { Hero } from '../../components/Hero/Hero';
import { TopBar } from '../../components/TopBar/Top-Bar';
import './Home.scss';

export const Home = () => {
    return (
        <>
            <TopBar />
            <Hero />
        </>
    );
}