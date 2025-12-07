export type ItemsWithPaginator<T> = {
  items: T[];
  total: number;
  page: number;
  size: number;
  pages: number;
};
