export const disableScrolling = (): void => {
    setBodyOverflow('hidden');
}

export const enableScrolling = (): void => {
    setBodyOverflow('auto');
}

const setBodyOverflow = (value: string): void => {
    document.body.style.overflow = value;
}