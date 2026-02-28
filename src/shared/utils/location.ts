import { ProjectLocation } from "@/features/projects/types/project.types";
import { LocalizedString } from "../types/common.types";

export function getProjectLocationLabel(location: ProjectLocation, locale: string): string {
    const city = location.city.label[locale as keyof LocalizedString] || location.city.label['en'];
    const country = location.country.label[locale as keyof LocalizedString] || location.country.label['en'];

    return `${city}, ${country}`;
}