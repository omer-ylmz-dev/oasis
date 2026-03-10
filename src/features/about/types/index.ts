import { Languages } from "@/config/languages.config";

export type ABOUT_SECTION_CONTENT = {
    title: Record<Languages, string>;
    content: Record<Languages, string>;
    images: string[];
};

export type ABOUT_SECTION_QUOTE = {
    quote: Record<Languages, string>;
    author: Record<Languages, string>;
    role?: Record<Languages, string>;
};



export interface ExpertItem {
    name: Record<Languages, string>;
    role: Record<Languages, string>;
    image: string;
}

export interface ExpertSectionData {
    title: Record<Languages, string>;
    description: Record<Languages, string>;
    items: ExpertItem[];
}