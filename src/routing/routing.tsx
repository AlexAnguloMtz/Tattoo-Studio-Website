import { ILink } from "../components/Nav/NavLinks/NavLinks";
import { Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Artist } from "../pages/Artist/Artist";

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
    }
];

export const routes = (): JSX.Element[] => {
    const links: JSX.Element[] = [];
    theLinks.forEach(link => links.push(renderRoute(link)));
    return links;
}

const renderRoute = (link: ILink): JSX.Element => {
    return <Route key={link.path} path={link.path} element={link.element} />
}