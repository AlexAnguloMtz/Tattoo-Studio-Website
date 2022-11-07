import { createContext, Dispatch, SetStateAction, useContext } from 'react';

export type LoadingContextType = {
    isLoading: boolean,
    setLoading: Dispatch<SetStateAction<boolean>>
}

export const LoadingContext = createContext<LoadingContextType>({
    isLoading: true,
    setLoading: () => { }
});

export const useLoading = () => useContext(LoadingContext);