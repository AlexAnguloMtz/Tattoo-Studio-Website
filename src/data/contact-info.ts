import { ContactDataContextType } from "../context/contact-info-context";

export interface Address {
    streetAndNumber: string,
    district: string,
    cityAndState: string,
    latitude: string,
    longitude: string
}

export const address: Address = {
    streetAndNumber: 'Esqueda 254',
    district: 'Lopez Portillo',
    cityAndState: 'Hermosillo, Son',
    latitude: '29.13008334025927',
    longitude: '-110.96935791307818'
};

export const phone: string = `6623560806`;

export const facebookProfile: string = `
    André Ramos
`;

export const facebookUrl: string = `
    https://www.facebook.com/profile.php?id=100022475361330
`;

export const instagramProfile: string = `
    @sr.daedra
`;

export const instagramUrl: string = `
    https://instagram.com/sr.daedra?igshid=YmMyMTa2M2Y=
`;

const customWhatsappMessage: string = `
    Hola, quiero agendar una cita para un tatuaje.
`;

export const whatsappUrl: string = `
    https://api.whatsapp.com/send?phone=526623560806&text=${customWhatsappMessage}
`;

export const contactData: ContactDataContextType = {
    instagramProfile: instagramProfile,
    instagramUrl: instagramUrl,
    facebookProfile: facebookProfile,
    facebookUrl: facebookUrl,
    whatsapp: phone,
    whatsappUrl: whatsappUrl,
    address: address
}