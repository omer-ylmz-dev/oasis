import { Languages } from "@/config/languages.config";
import { LocalizedString } from "@/shared/types/common.types";


export interface InfoItem {
  direction?: "ltr" | "rtl";       
  category?: string | LocalizedString;
  title: string | LocalizedString;
  content: string | LocalizedString; 
  image: string;                      
}


export interface InfoSectionData {
  type: string;      
  items: InfoItem[];  
}
