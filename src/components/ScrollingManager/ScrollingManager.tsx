import { useEffect } from "react";
import { decide } from "../../common/decide";
import { disableScrolling, enableScrolling } from "../../common/scrolling";
import { useLoading } from "../../context/loading-context";

export const ScrollingManager = () => {

    const { isLoading } = useLoading();

    useEffect(() => {
        decide(isLoading, disableScrolling, enableScrolling);
    }, [isLoading]);

    return (<></>);
}
