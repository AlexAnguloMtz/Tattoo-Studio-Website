import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLoading } from "../../context/loading-context";

const loadingDuration: number = 600;

export const LoadingChronometer = () => {

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