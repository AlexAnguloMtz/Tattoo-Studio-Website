import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLoading } from "../../context/loading-context";

const loadingDuration: number = 1000;

export const LoadingManager = () => {

    const location = useLocation();

    const { setLoading } = useLoading();

    useEffect(
        () => {
            setLoading(true);
            const timeout = setTimeout(() => setLoading(false), loadingDuration);
            return () => clearTimeout(timeout);
        }, [location]);

    return (<></>);

}