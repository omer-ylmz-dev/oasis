import { Languages } from "@/config/languages.config";
import { LocalizedString } from "@/shared/types/common.types";
import { IconType } from "react-icons";

export type HOME_SECTION_CONTENT = {
    title: Record<Languages, string>;
    content: Record<Languages, string>;
};


export interface FeatureItem {
    title: LocalizedString | string;
    description: LocalizedString | string;
    icon?: IconType;
}

export interface FeatureSectionData {
    title?: LocalizedString | string;
    description?: LocalizedString | string;
    items: FeatureItem[];
}