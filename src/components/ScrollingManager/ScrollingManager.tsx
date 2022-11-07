import { useEffect } from "react";
import { useLoading } from "../../context/loading-context";

export const ScrollingManager = () => {

    const { isLoading } = useLoading();

    useEffect(() => {
        if (isLoading) {
            disableScrolling();
        }
        else {
            enableScrolling();
        }
    }, [isLoading]);

    return (<></>);
}

const disableScrolling = (): void => {
    setBodyOverflow('hidden');
}

const enableScrolling = (): void => {
    setBodyOverflow('auto');
}

const setBodyOverflow = (value: string): void => {
    document.body.style.overflow = value;
}