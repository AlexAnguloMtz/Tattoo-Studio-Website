import { useEffect } from "react";
import { useLoading } from "../../context/loading-context";
import { Logo } from "../Logo/Logo";
import { Spinner } from "../Spinner/Spinner";
import './LoadScreen.scss';

export const LoadScreen = () => {

    const { isLoading } = useLoading();

    return (
        <div className={`load-screen ${isLoading ? ' on-screen' : ''}`}>
            <Logo className="load-screen__logo" />
            <Spinner />
        </div>
    );
}