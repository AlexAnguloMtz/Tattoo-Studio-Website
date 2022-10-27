import { Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Artist } from "../pages/Artist/Artist";
import { ILink } from "../components/Nav/NavLink/NavLink";
import { Gallery } from "../pages/Gallery/Gallery";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";

export const theLinks: ILink[] = [
    {
        path: '/',
        text: 'Home',
        element: <Home />
    },
    {
        path: '/artista',
        text: 'Artista',
        element: <Artist />
    },
    {
        path: '/galeria',
        text: 'Galería',
        element: <Gallery />
    }
];

export const routes = (): JSX.Element[] => {
    const links: JSX.Element[] = [];
    theLinks.forEach(link => links.push(renderRoute(link)));
    return links;
}

const renderRoute = (link: ILink): JSX.Element => {
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