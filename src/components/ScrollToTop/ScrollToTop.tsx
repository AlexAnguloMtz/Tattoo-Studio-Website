import { useLocation } from "react-router-dom";
import { FC, useEffect } from 'react';

export const scrollToTop = () => { window.scrollTo(0, 0) }

export const ScrollToTop: FC<Props> = ({ children }) => {

    let location = useLocation();

    useEffect(scrollToTop, [location]);

    return <>{children}</>
}

interface Props {
    children: JSX.Element[] | JSX.Element
}