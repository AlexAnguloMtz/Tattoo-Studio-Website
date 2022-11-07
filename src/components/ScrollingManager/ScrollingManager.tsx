import { useEffect } from "react";
import { useLoading } from "../../context/loading-context";
import { decide } from "../../util/decide";

export const ScrollingManager = () => {

    const { isLoading } = useLoading();

    useEffect(() => {
        decide(isLoading, disableScrolling, enableScrolling);
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