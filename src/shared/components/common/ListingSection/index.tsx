import styles from "./ListingSection.module.scss"

import ListingGrid from './ListingGrid'
import ListingHeader from './ListingHeader'
import { ListingVariant, PaginationMeta } from "@/shared/types/common.types";
import Pagination from "./Pagination";
import { ProjectListItem } from "@/features/projects/types/project.types";
import { NewsListItem } from "@/features/news/types/news.types";


interface Props {
  variant: ListingVariant;
  data: ProjectListItem[] | NewsListItem[];
  meta: PaginationMeta;
}

export default function ListingSection({ variant, data, meta }: Props) {

  return (
    <div className={styles.container}>
      <ListingHeader variant={variant} />
      <ListingGrid variant={variant} items={data} />
      <Pagination
        totalPages={meta.totalPages}
        currentPage={meta.page}
      />
    </div>
  )
}
