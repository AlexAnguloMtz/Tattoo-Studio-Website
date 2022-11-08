import { Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Artist } from "../pages/Artist/Artist";
import { ILink } from "../components/Nav/NavLink/NavLink";
import { Portfolio } from "../pages/Portfolio/Portfolio";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";
import { Contact } from "../pages/Contact/Contact";
import { gmapsApiKey } from '../secrets/secrets';

export const home: string = '/';
export const artist: string = '/artista';
export const portfolio: string = '/portafolio';
export const contact: string = '/contact';

export const homePage: ILink = {
    path: home,
    text: 'Inicio',
    element: <Home />
}

export const theLinks: ILink[] = [
    homePage,
    {
        path: artist,
        text: 'Artista',
        element: <Artist />
    },
    {
        path: portfolio,
        text: 'Portafolio',
        element: <Portfolio />
    },
    {
        path: contact,
        text: 'Contacto',
        element: <Contact gmapsApiKey={gmapsApiKey} />
    }
];

export const routes = (): JSX.Element[] => {
    const links: JSX.Element[] = [];
    theLinks.forEach(link => links.push(toRoute(link)));
    return links;
}

const toRoute = (link: ILink): JSX.Element => {
    return (
        <Route
            key={link.path}
            path={link.path}
            element={
                <ScrollToTop>
                    {link.element}
                </ScrollToTop>
            }
        />
    );
}