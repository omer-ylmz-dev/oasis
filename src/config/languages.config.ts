export interface Language {
    value: string;
    label: string;
    fullName: string;
}


export const languages: Language[] = [
    { value: "en", label: "EN", fullName: "English" },
    { value: "az", label: "AZ", fullName: "Azerbaijani" },
    { value: "tr", label: "TR", fullName: "Turkish" },
    { value: "ru", label: "RU", fullName: "Russian" },
];


export const SUPPORTED_LANGUAGES = languages.map(lang => lang.value) as string[];

export const languageLabels: Record<string, string> = languages.reduce((acc, lang) => {
    acc[lang.value] = lang.fullName;
    return acc;
}, {} as Record<string, string>);



export type Languages = (typeof SUPPORTED_LANGUAGES)[number];