import { useEffect, useState } from "react";

export const useCircularArray = (arr: any[]): [any, () => void, () => void] => {

    const [elements, setElements] = useState(arr);

    const [current, setCurrent] = useState();

    useEffect(
        () => {
            setCurrent(elements[0]);
        }
        , [elements]
    );

    // This function does not mutate the original array. It creates a new one instead.
    const next = (): void => {
        const withoutLastElement: string[] = elements.slice(0, -1);
        const withOnlyLastElement: string[] = [elements[elements.length - 1]];
        const withLastElementAtTheStart: string[] = withOnlyLastElement.concat(withoutLastElement);
        setElements(withLastElementAtTheStart);
    }

    // This function does not mutate the original array. It creates a new one instead.
    const previous = (): void => {
        const withoutFirstElement: string[] = elements.slice(1);
        const withFirstElementAtTheEnd: string[] = withoutFirstElement.concat(elements[0]);
        setElements(withFirstElementAtTheEnd);
    }

    return [current, next, previous];

}