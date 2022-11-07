export const decide = (
    condition: boolean,
    ifTrue: () => void,
    ifFalse: () => void
) => {

    if (condition)
        ifTrue();

    else
        ifFalse();

}

