import { Languages } from "@/config/languages.config";

export interface StatItem {
    value: string;
    label: Record<Languages, string>;
}