import { Languages } from "@/config/languages.config";


export interface OfficeProps {
    index: number;
    title: string
    address: string
    phone: string
    location: {
        lat: number
        lng: number
    },
    mapRef: React.RefObject<HTMLIFrameElement | null>;
}


export interface ShowroomProps {
    index: number;
    title: string
    location: {
        lat: number
        lng: number
    },
    mapRef: React.RefObject<HTMLIFrameElement | null>;
}




export interface ShowroomItem {
    title: Record<string, string>;
    location: {
        lat: number;
        lng: number;
    };
}





export interface OfficeItem {
    title: Record<string, string>;
    address: Record<string, string>;
    location: {
        lat: number;
        lng: number;
    };
    phone: string;
}




export type LocationsSectionProps =
    | {
        type: "showroom";
        items: ShowroomItem[];
        mapRef: React.RefObject<HTMLIFrameElement | null>
    }
    | {
        type: "office";
        items: OfficeItem[];
        mapRef: React.RefObject<HTMLIFrameElement | null>
    };





export interface ContactFormField {
    name: string;
    type?: string;
    translationKey: string;
}




export interface ProjectItem {
    id: string;
    label: Record<Languages, string>;
}





export interface ContactFormConfig {
    credentials: ContactFormField[];
    projects: ProjectItem[];
    message: ContactFormField & { rows: number };
    agreement: ContactFormField;
    submit: {
        translationKey: string;
    };
}