import { useState } from "react";

interface Props<T> {
  list: T[];
  itemsPerPage: number;
}

export default function useListWithPaginator<T>({
  list,
  itemsPerPage,
}: Props<T>) {
  const [page, setPage] = useState<number>(0);
  const slicedList: T[] = list.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage
  );

  return {
    slicedList,
    setPage,
  };
}
