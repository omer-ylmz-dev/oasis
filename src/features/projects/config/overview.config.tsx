import { GrStatusInfo } from "react-icons/gr";
import { Project } from "../types/project.types";
import { getProjectLabel } from "../utils/project-helpers";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdCheckCircleOutline, MdOutlineDateRange } from "react-icons/md";
import { BiArea } from "react-icons/bi";
import { formatDate } from "@/shared/utils/date";
import { IoPricetagsOutline } from "react-icons/io5";



interface OverviewFact {
    key: string;
    icon: React.ElementType;
    value: string;
}

export const overviewConfig = (
    data: Project['overview'],
    locale: string
): OverviewFact[] => [
        {
            key: 'status',
            icon: GrStatusInfo,
            value: getProjectLabel.status(data.status, locale),
        },
        {
            key: 'type',
            icon: HiOutlineOfficeBuilding,
            value: getProjectLabel.type(data.type, locale),
        },
        {
            key: 'area',
            icon: BiArea,
            value: data.area.toLocaleString(),
        },
        {
            key: 'commencementDate',
            icon: MdOutlineDateRange,
            value: formatDate(data.commencementDate),
        },
        {
            key: 'completionDate',
            icon: MdCheckCircleOutline,
            value: formatDate(data.completionDate),
        },
        {
            key: 'priceRange',
            icon: IoPricetagsOutline,
            value: `${data.priceRange.min.toLocaleString()} - ${data.priceRange.max.toLocaleString()} ${data.priceRange.currency}`,
        },
    ];