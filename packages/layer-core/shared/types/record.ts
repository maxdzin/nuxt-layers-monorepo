export interface RecordItem {
  [key: string]: unknown
}

export interface Pagination {
  page: number
  pageSize: number
  total: number
}

type SortableValue = string | number | boolean | Date
type Sortable<T> = {
  [K in keyof T]: T[K] extends SortableValue ? K : never
}[keyof T]
export interface RecordListSorting<T extends object> {
  field?: Sortable<T>
  direction?: 'asc' | 'desc'
}

export interface RecordData<T, M extends RecordItem | undefined = undefined> {
  item: T
  meta?: M
}
export interface RecordDataListMeta {
  pagination?: Pagination
}
export interface RecordDataList<
  T,
  M extends RecordDataListMeta = RecordDataListMeta,
> {
  items: T[]
  meta?: M
}

export interface RecordTarget<T, A = string> {
  item?: T
  action?: A
  pending?: boolean
}

export interface RecordTableHeader<T extends object = object> {
  field: keyof T | string
  label?: string
  sortable?: boolean | Sortable<T>
}
export interface RecordTableSkeleton {
  columns: number
  rows: number
}

export type PartialDeep<T> = T extends object
  ? {
      [P in keyof T]?: PartialDeep<T[P]>
    }
  : T
