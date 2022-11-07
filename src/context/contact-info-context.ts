import { Address } from "../data/contact-info";
import { createContext, Dispatch, useContext } from "react";

export type ContactDataContextType = {
    instagramProfile: string,
    instagramUrl: string,
    facebookProfile: string,
    facebookUrl: string,
    whatsapp: string,
    whatsappUrl: string,
    address: Address
}

export const ContactDataContext = createContext<ContactDataContextType>({
    instagramProfile: '',
    instagramUrl: '',
    facebookProfile: '',
    facebookUrl: '',
    whatsapp: '',
    whatsappUrl: '',
    address: {
        streetAndNumber: '',
        district: '',
        cityAndState: '',
        latitude: '',
        longitude: ''
    }
});

export const useContactData = () => useContext(ContactDataContext);